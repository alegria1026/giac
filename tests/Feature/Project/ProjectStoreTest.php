<?php

namespace Tests\Feature\Project;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use App\Models\User;

class ProjectStoreTest extends TestCase
{
    use RefreshDatabase;

    private function actingUser()
    {
        return $this->actingAs(User::factory()->create());
    }

    private function validPayload(array $overrides = [])
    {
        return array_merge([
            'name' => 'Proyecto válido',
            'description' => 'Descripción del proyecto válida.',
            'category' => 'Ingeniería',
            'attached_file' => UploadedFile::fake()->image('proyecto.jpg')->size(500),
        ], $overrides);
    }


    public function test_store_fails_when_name_is_missing()
    {
        $this->actingUser();
        Storage::fake('projects');

        $response = $this->post(route('projects.store'), $this->validPayload([
            'name' => ''
        ]));

        $response->assertSessionHasErrors('name');
    }

    public function test_store_fails_when_name_is_too_short()
    {
        $this->actingUser();
        Storage::fake('projects');

        $response = $this->post(route('projects.store'), $this->validPayload([
            'name' => 'ab'
        ]));

        $response->assertSessionHasErrors('name');
    }

    public function test_store_fails_when_name_is_too_long()
    {
        $this->actingUser();
        Storage::fake('projects');

        $response = $this->post(route('projects.store'), $this->validPayload([
            'name' => str_repeat('a', 256)
        ]));

        $response->assertSessionHasErrors('name');
    }

    /** ------------------
     *  DESCRIPTION
     * ------------------*/

    public function test_store_fails_when_description_is_missing()
    {
        $this->actingUser();
        Storage::fake('projects');

        $response = $this->post(route('projects.store'), $this->validPayload([
            'description' => ''
        ]));

        $response->assertSessionHasErrors('description');
    }

    public function test_store_fails_when_description_is_too_short()
    {
        $this->actingUser();
        Storage::fake('projects');

        $response = $this->post(route('projects.store'), $this->validPayload([
            'description' => 'ab'
        ]));

        $response->assertSessionHasErrors('description');
    }

    public function test_store_fails_when_description_is_too_long()
    {
        $this->actingUser();
        Storage::fake('projects');

        $response = $this->post(route('projects.store'), $this->validPayload([
            'description' => str_repeat('a', 501)
        ]));

        $response->assertSessionHasErrors('description');
    }

    /** ------------------
     *  CATEGORY
     * ------------------*/

    public function test_store_fails_when_category_is_missing()
    {
        $this->actingUser();
        Storage::fake('projects');

        $response = $this->post(route('projects.store'), $this->validPayload([
            'category' => ''
        ]));

        $response->assertSessionHasErrors('category');
    }

    public function test_store_fails_when_category_is_invalid()
    {
        $this->actingUser();
        Storage::fake('projects');

        $response = $this->post(route('projects.store'), $this->validPayload([
            'category' => 'Otra'
        ]));

        $response->assertSessionHasErrors('category');
    }

    /** ------------------
     *  ATTACHED FILE
     * ------------------*/

    public function test_store_fails_when_attached_file_is_missing()
    {
        $this->actingUser();
        Storage::fake('projects');

        $payload = $this->validPayload();
        unset($payload['attached_file']);

        $response = $this->post(route('projects.store'), $payload);

        $response->assertSessionHasErrors('attached_file');
    }

    public function test_store_fails_when_attached_file_is_not_an_image()
    {
        $this->actingUser();
        Storage::fake('projects');

        $response = $this->post(route('projects.store'), $this->validPayload([
            'attached_file' => UploadedFile::fake()->create('file.pdf', 100),
        ]));

        $response->assertSessionHasErrors('attached_file');
    }

    public function test_store_fails_when_attached_file_is_too_large()
    {
        $this->actingUser();
        Storage::fake('projects');

        $response = $this->post(route('projects.store'), $this->validPayload([
            'attached_file' => UploadedFile::fake()->image('big.jpg')->size(6001),
        ]));

        $response->assertSessionHasErrors('attached_file');
    }

    /** ------------------
     *  SUCCESS CASE
     * ------------------*/

    public function test_store_succeeds_with_valid_data()
    {
        $this->actingUser();
        Storage::fake('projects');

        $response = $this->post(route('projects.store'), $this->validPayload());

        $response->assertRedirect(route('projects.index'));
        $this->assertDatabaseCount('projects', 1);

        $project = \App\Models\Project::first();
        Storage::disk('projects')->assertExists($project->attached_file);
    }
}
