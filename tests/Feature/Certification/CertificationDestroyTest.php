<?php

namespace Tests\Feature\Certification;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Storage;
use App\Models\User;
use App\Models\Certification;

class CertificationDestroyTest extends TestCase
{
    use RefreshDatabase;

    private function actingUser()
    {
        return $this->actingAs(User::factory()->create());
    }

    private function createCertification($withFile = true)
    {
        return Certification::create([
            'user_id' => User::factory()->create()->id,
            'name' => 'Certificación a eliminar',
            'attached_file' => $withFile ? 'to-delete.pdf' : 'fake.pdf',
        ]);
    }

    public function test_destroy_deletes_certification_and_file_if_exists()
    {
        $this->actingUser();
        Storage::fake('certifications');

        Storage::disk('certifications')->put('to-delete.pdf', 'contenido');
        $certification = $this->createCertification();

        $this->assertDatabaseHas('certifications', ['id' => $certification->id]);
        Storage::disk('certifications')->assertExists('to-delete.pdf');

        $response = $this->delete(route('certifications.destroy', $certification));

        $response->assertRedirect(route('certifications.index'));
        $this->assertDatabaseMissing('certifications', ['id' => $certification->id]);
        Storage::disk('certifications')->assertMissing('to-delete.pdf');
    }

    public function test_destroy_deletes_certification_even_without_file()
    {
        $this->actingUser();
        Storage::fake('certifications');

        $certification = $this->createCertification(withFile: false); // usa "fake.pdf"

        $this->assertDatabaseHas('certifications', ['id' => $certification->id]);

        $response = $this->delete(route('certifications.destroy', $certification));

        $response->assertRedirect(route('certifications.index'));
        $this->assertDatabaseMissing('certifications', ['id' => $certification->id]);
    }
}
