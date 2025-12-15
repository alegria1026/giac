<?php

namespace Tests\Feature\Service;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Storage;
use App\Models\User;
use App\Models\Service;

class ServiceDestroyTest extends TestCase
{
    use RefreshDatabase;

    private function actingUser()
    {
        return $this->actingAs(User::factory()->create());
    }

    private function createService($withFile = true)
    {
        return Service::create([
            'user_id' => User::factory()->create()->id,
            'name' => 'Servicio a eliminar',
            'description' => 'Este será eliminado',
            'category' => 'Ingeniería',
            'attached_file' => $withFile ? 'to-delete.jpg' : 'fake.jpg', // <- cambio aquí
        ]);
    }

    public function test_destroy_deletes_service_and_file_if_exists()
    {
        $this->actingUser();
        Storage::fake('services');

        Storage::disk('services')->put('to-delete.jpg', 'contenido');
        $service = $this->createService();

        $this->assertDatabaseHas('services', ['id' => $service->id]);
        Storage::disk('services')->assertExists('to-delete.jpg');

        $response = $this->delete(route('services.destroy', $service));

        $response->assertRedirect(route('services.index'));
        $this->assertDatabaseMissing('services', ['id' => $service->id]);
        Storage::disk('services')->assertMissing('to-delete.jpg');
    }

    public function test_destroy_deletes_service_even_without_file()
    {
        $this->actingUser();
        Storage::fake('services');

        $service = $this->createService(withFile: false); // usa "fake.jpg"

        $this->assertDatabaseHas('services', ['id' => $service->id]);

        $response = $this->delete(route('services.destroy', $service));

        $response->assertRedirect(route('services.index'));
        $this->assertDatabaseMissing('services', ['id' => $service->id]);
    }
}
