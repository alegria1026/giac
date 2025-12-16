<?php

namespace Tests\Feature\Project;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use App\Models\User;
use App\Models\Project;

class ProjectUpdateTest extends TestCase
{
    use RefreshDatabase;

    private function actingUser()
    {
        return $this->actingAs(User::factory()->create());
    }

    private function createProject()
    {
        Storage::fake('projects');

        $file = UploadedFile::fake()->image('initial.jpg')->size(500);
        $path = $file->storeAs('', 'initial.jpg', 'projects');

        return Project::create([
            'user_id' => auth()->id(),
            'name' => 'Nombre inicial',
            'description' => 'Descripción inicial',
            'category' => 'Ingeniería',
            'attached_file' => $path,
        ]);
    }

    private function validPayload(array $overrides = [])
    {
        return array_merge([
            'name' => 'Nuevo nombre',
            'description' => 'Nueva descripción',
            'category' => 'Construcción',
            'attached_file' => UploadedFile::fake()->image('updated.jpg')->size(500),
        ], $overrides);
    }

    public function test_update_fails_when_name_is_missing()
    {
        $this->actingUser();
        $project = $this->createProject();

        $response = $this->patch(route('projects.update', $project), $this->validPayload([
            'name' => ''
        ]));

        $response->assertSessionHasErrors('name');
    }

    public function test_update_fails_when_name_is_too_short()
    {
        $this->actingUser();
        $project = $this->createProject();

        $response = $this->patch(route('projects.update', $project), $this->validPayload([
            'name' => 'ab'
        ]));

        $response->assertSessionHasErrors('name');
    }

    public function test_update_fails_when_name_is_too_long()
    {
        $this->actingUser();
        $project = $this->createProject();

        $response = $this->patch(route('projects.update', $project), $this->validPayload([
            'name' => str_repeat('a', 256)
        ]));

        $response->assertSessionHasErrors('name');
    }

    public function test_update_fails_when_description_is_missing()
    {
        $this->actingUser();
        $project = $this->createProject();

        $response = $this->patch(route('projects.update', $project), $this->validPayload([
            'description' => ''
        ]));

        $response->assertSessionHasErrors('description');
    }

    public function test_update_fails_when_description_is_too_short()
    {
        $this->actingUser();
        $project = $this->createProject();

        $response = $this->patch(route('projects.update', $project), $this->validPayload([
            'description' => 'ab'
        ]));

        $response->assertSessionHasErrors('description');
    }

    public function test_update_fails_when_description_is_too_long()
    {
        $this->actingUser();
        $project = $this->createProject();

        $response = $this->patch(route('projects.update', $project), $this->validPayload([
            'description' => str_repeat('a', 501)
        ]));

        $response->assertSessionHasErrors('description');
    }

    public function test_update_fails_when_category_is_missing()
    {
        $this->actingUser();
        $project = $this->createProject();

        $response = $this->patch(route('projects.update', $project), $this->validPayload([
            'category' => ''
        ]));

        $response->assertSessionHasErrors('category');
    }

    public function test_update_fails_when_category_is_invalid()
    {
        $this->actingUser();
        $project = $this->createProject();

        $response = $this->patch(route('projects.update', $project), $this->validPayload([
            'category' => 'Otra'
        ]));

        $response->assertSessionHasErrors('category');
    }

    public function test_update_fails_when_file_is_missing()
    {
        $this->actingUser();
        $project = $this->createProject();

        $payload = $this->validPayload();
        unset($payload['attached_file']);

        $response = $this->patch(route('projects.update', $project), $payload);

        $response->assertSessionHasErrors('attached_file');
    }

    public function test_update_fails_when_file_is_not_an_image()
    {
        $this->actingUser();
        $project = $this->createProject();

        $response = $this->patch(route('projects.update', $project), $this->validPayload([
            'attached_file' => UploadedFile::fake()->create('file.pdf', 100)
        ]));

        $response->assertSessionHasErrors('attached_file');
    }

    public function test_update_fails_when_file_is_too_large()
    {
        $this->actingUser();
        $project = $this->createProject();

        $response = $this->patch(route('projects.update', $project), $this->validPayload([
            'attached_file' => UploadedFile::fake()->image('big.jpg')->size(6000)
        ]));

        $response->assertSessionHasErrors('attached_file');
    }

    public function test_update_succeeds_with_valid_data()
    {
        $this->actingUser();
        Storage::fake('projects');

        $project = $this->createProject();

        $response = $this->patch(route('projects.update', $project), $this->validPayload());

        $response->assertRedirect(route('projects.index'));
        $this->assertDatabaseHas('projects', ['id' => $project->id, 'name' => 'Nuevo nombre']);

        $updated = Project::find($project->id);
        Storage::disk('projects')->assertExists($updated->attached_file);
    }
}
