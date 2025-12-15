<?php

namespace Tests\Feature\Service;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use App\Models\User;

class ServiceStoreTest extends TestCase
{
    use RefreshDatabase;

    private function actingUser()
    {
        return $this->actingAs(User::factory()->create());
    }

    private function validPayload($overrides = [])
    {
        return array_merge([
            'name' => 'Servicio válido',
            'description' => 'Descripción válida',
            'category' => 'Ingeniería',
            'attached_file' => UploadedFile::fake()->image('file.jpg', 100, 100)->size(500),
        ], $overrides);
    }

    public function test_store_fails_when_name_is_missing()
    {
        $this->actingUser();
        Storage::fake('services');

        $response = $this->post(route('services.store'), $this->validPayload([
            'name' => ''
        ]));

        $response->assertSessionHasErrors('name');
    }

    public function test_store_fails_when_name_is_too_short()
    {
        $this->actingUser();
        Storage::fake('services');

        $response = $this->post(route('services.store'), $this->validPayload([
            'name' => 'ab'
        ]));

        $response->assertSessionHasErrors('name');
    }

    public function test_store_fails_when_name_is_too_long()
    {
        $this->actingUser();
        Storage::fake('services');

        $response = $this->post(route('services.store'), $this->validPayload([
            'name' => str_repeat('a', 256)
        ]));

        $response->assertSessionHasErrors('name');
    }

    public function test_store_fails_when_description_is_missing()
    {
        $this->actingUser();
        Storage::fake('services');

        $response = $this->post(route('services.store'), $this->validPayload([
            'description' => ''
        ]));

        $response->assertSessionHasErrors('description');
    }

    public function test_store_fails_when_description_is_too_short()
    {
        $this->actingUser();
        Storage::fake('services');

        $response = $this->post(route('services.store'), $this->validPayload([
            'description' => 'ab'
        ]));

        $response->assertSessionHasErrors('description');
    }

    public function test_store_fails_when_description_is_too_long()
    {
        $this->actingUser();
        Storage::fake('services');

        $response = $this->post(route('services.store'), $this->validPayload([
            'description' => str_repeat('a', 501)
        ]));

        $response->assertSessionHasErrors('description');
    }

    public function test_store_fails_when_category_is_missing()
    {
        $this->actingUser();
        Storage::fake('services');

        $response = $this->post(route('services.store'), $this->validPayload([
            'category' => ''
        ]));

        $response->assertSessionHasErrors('category');
    }

    public function test_store_fails_when_category_is_invalid()
    {
        $this->actingUser();
        Storage::fake('services');

        $response = $this->post(route('services.store'), $this->validPayload([
            'category' => 'Otro'
        ]));

        $response->assertSessionHasErrors('category');
    }

    public function test_store_fails_when_file_is_missing()
    {
        $this->actingUser();
        Storage::fake('services');

        $payload = $this->validPayload();
        unset($payload['attached_file']);

        $response = $this->post(route('services.store'), $payload);

        $response->assertSessionHasErrors('attached_file');
    }

    public function test_store_fails_when_file_is_not_an_image()
    {
        $this->actingUser();
        Storage::fake('services');

        $response = $this->post(route('services.store'), $this->validPayload([
            'attached_file' => UploadedFile::fake()->create('file.pdf', 100)
        ]));

        $response->assertSessionHasErrors('attached_file');
    }

    public function test_store_fails_when_file_is_too_large()
    {
        $this->actingUser();
        Storage::fake('services');

        $response = $this->post(route('services.store'), $this->validPayload([
            'attached_file' => UploadedFile::fake()->image('big.jpg')->size(6000)
        ]));

        $response->assertSessionHasErrors('attached_file');
    }

    public function test_store_succeeds_with_valid_data()
    {
        $this->actingUser();
        Storage::fake('services');

        $response = $this->post(route('services.store'), $this->validPayload());

        $response->assertRedirect(route('services.index'));
        $this->assertDatabaseCount('services', 1);
    }
}
