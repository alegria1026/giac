<?php

namespace Tests\Feature\Service;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use App\Models\User;
use App\Models\Service;

class ServiceUpdateTest extends TestCase
{
    use RefreshDatabase;

    private function actingUser()
    {
        return $this->actingAs(User::factory()->create());
    }

    private function createService()
    {
        return Service::create([
            'user_id' => User::factory()->create()->id,
            'name' => 'Original',
            'description' => 'Texto original',
            'category' => 'Ingeniería',
            'attached_file' => 'original.jpg',
        ]);
    }

    private function validPayload($overrides = [])
    {
        return array_merge([
            'name' => 'Servicio actualizado',
            'description' => 'Nueva descripción',
            'category' => 'Construcción',
            'attached_file' => UploadedFile::fake()->image('new.jpg')->size(500),
        ], $overrides);
    }

    public function test_update_fails_when_name_is_missing()
    {
        $this->actingUser();
        Storage::fake('services');
        $service = $this->createService();

        $response = $this->patch(route('services.update', $service), $this->validPayload([
            'name' => ''
        ]));

        $response->assertSessionHasErrors('name');
    }

    public function test_update_fails_when_name_is_too_short()
    {
        $this->actingUser();
        Storage::fake('services');
        $service = $this->createService();

        $response = $this->patch(route('services.update', $service), $this->validPayload([
            'name' => 'ab'
        ]));

        $response->assertSessionHasErrors('name');
    }

    public function test_update_fails_when_name_is_too_long()
    {
        $this->actingUser();
        Storage::fake('services');
        $service = $this->createService();

        $response = $this->patch(route('services.update', $service), $this->validPayload([
            'name' => str_repeat('a', 256)
        ]));

        $response->assertSessionHasErrors('name');
    }

    public function test_update_fails_when_description_is_missing()
    {
        $this->actingUser();
        Storage::fake('services');
        $service = $this->createService();

        $response = $this->patch(route('services.update', $service), $this->validPayload([
            'description' => ''
        ]));

        $response->assertSessionHasErrors('description');
    }

    public function test_update_fails_when_description_is_too_short()
    {
        $this->actingUser();
        Storage::fake('services');
        $service = $this->createService();

        $response = $this->patch(route('services.update', $service), $this->validPayload([
            'description' => 'ab'
        ]));

        $response->assertSessionHasErrors('description');
    }

    public function test_update_fails_when_description_is_too_long()
    {
        $this->actingUser();
        Storage::fake('services');
        $service = $this->createService();

        $response = $this->patch(route('services.update', $service), $this->validPayload([
            'description' => str_repeat('a', 501)
        ]));

        $response->assertSessionHasErrors('description');
    }

    public function test_update_fails_when_category_is_missing()
    {
        $this->actingUser();
        Storage::fake('services');
        $service = $this->createService();

        $response = $this->patch(route('services.update', $service), $this->validPayload([
            'category' => ''
        ]));

        $response->assertSessionHasErrors('category');
    }

    public function test_update_fails_when_category_is_invalid()
    {
        $this->actingUser();
        Storage::fake('services');
        $service = $this->createService();

        $response = $this->patch(route('services.update', $service), $this->validPayload([
            'category' => 'Otro'
        ]));

        $response->assertSessionHasErrors('category');
    }

    public function test_update_fails_when_file_is_missing()
    {
        $this->actingUser();
        Storage::fake('services');
        $service = $this->createService();

        $payload = $this->validPayload();
        unset($payload['attached_file']);

        $response = $this->patch(route('services.update', $service), $payload);

        $response->assertSessionHasErrors('attached_file');
    }

    public function test_update_fails_when_file_is_not_an_image()
    {
        $this->actingUser();
        Storage::fake('services');
        $service = $this->createService();

        $response = $this->patch(route('services.update', $service), $this->validPayload([
            'attached_file' => UploadedFile::fake()->create('archivo.pdf', 100),
        ]));

        $response->assertSessionHasErrors('attached_file');
    }

    public function test_update_fails_when_file_is_too_large()
    {
        $this->actingUser();
        Storage::fake('services');
        $service = $this->createService();

        $response = $this->patch(route('services.update', $service), $this->validPayload([
            'attached_file' => UploadedFile::fake()->image('big.jpg')->size(6000)
        ]));

        $response->assertSessionHasErrors('attached_file');
    }

    public function test_update_succeeds_with_valid_data()
    {
        $this->actingUser();
        Storage::fake('services');
        $service = $this->createService();
        Storage::disk('services')->put('original.jpg', 'contenido');

        $newFile = UploadedFile::fake()->image('updated.jpg')->size(500);

        $response = $this->patch(route('services.update', $service), [
            'name' => 'Actualizado',
            'description' => 'Descripción nueva',
            'category' => 'Ingeniería',
            'attached_file' => $newFile,
        ]);

        $response->assertRedirect(route('services.index'));

        $this->assertDatabaseHas('services', [
            'id' => $service->id,
            'name' => 'Actualizado',
        ]);

        $storedPath = Service::first()->attached_file;

        Storage::disk('services')->assertMissing('original.jpg');
        Storage::disk('services')->assertExists($storedPath);
    }
}
