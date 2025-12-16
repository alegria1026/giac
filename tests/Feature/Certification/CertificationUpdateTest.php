<?php

namespace Tests\Feature\Certification;

use App\Models\User;
use App\Models\Certification;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class CertificationUpdateTest extends TestCase
{
    use RefreshDatabase;

    private function actingUser()
    {
        return User::factory()->create();
    }

    private function createCertification($user)
    {
        return Certification::create([
            'user_id' => $user->id,
            'name' => 'Certificación original',
            'attached_file' => 'original.pdf',
        ]);
    }

    private function validPayload($overrides = [])
    {
        return array_merge([
            'name' => 'Nueva certificación',
            'attached_file' => UploadedFile::fake()->create('nuevo.pdf', 100, 'application/pdf'),
        ], $overrides);
    }

    public function test_update_fails_when_name_is_missing()
    {
        Storage::fake('certifications');
        $user = $this->actingUser();
        $certification = $this->createCertification($user);

        $response = $this->actingAs($user)->patch(route('certifications.update', $certification), $this->validPayload(['name' => '']));
        $response->assertSessionHasErrors('name');
    }

    public function test_update_fails_when_name_is_too_short()
    {
        Storage::fake('certifications');
        $user = $this->actingUser();
        $certification = $this->createCertification($user);

        $response = $this->actingAs($user)->patch(route('certifications.update', $certification), $this->validPayload(['name' => 'ab']));
        $response->assertSessionHasErrors('name');
    }

    public function test_update_fails_when_name_is_too_long()
    {
        Storage::fake('certifications');
        $user = $this->actingUser();
        $certification = $this->createCertification($user);

        $response = $this->actingAs($user)->patch(route('certifications.update', $certification), $this->validPayload(['name' => str_repeat('a', 256)]));
        $response->assertSessionHasErrors('name');
    }

    public function test_update_fails_when_attached_file_is_invalid_type()
    {
        Storage::fake('certifications');
        $user = $this->actingUser();
        $certification = $this->createCertification($user);

        $file = UploadedFile::fake()->create('archivo.exe', 100, 'application/x-msdownload');

        $response = $this->actingAs($user)->patch(route('certifications.update', $certification), $this->validPayload(['attached_file' => $file]));
        $response->assertSessionHasErrors('attached_file');
    }

    public function test_update_fails_when_attached_file_is_too_large()
    {
        Storage::fake('certifications');
        $user = $this->actingUser();
        $certification = $this->createCertification($user);

        $file = UploadedFile::fake()->create('grande.pdf', 6000, 'application/pdf');

        $response = $this->actingAs($user)->patch(route('certifications.update', $certification), $this->validPayload(['attached_file' => $file]));
        $response->assertSessionHasErrors('attached_file');
    }

    public function test_update_succeeds_with_valid_data_and_file()
    {
        Storage::fake('certifications');
        $user = $this->actingUser();
        $certification = $this->createCertification($user);

        $file = UploadedFile::fake()->create('valido.pdf', 300, 'application/pdf');

        $response = $this->actingAs($user)->patch(route('certifications.update', $certification), $this->validPayload(['attached_file' => $file]));

        $response->assertRedirect(route('certifications.index'));
        $this->assertDatabaseHas('certifications', [
            'id' => $certification->id,
            'name' => 'Nueva certificación',
        ]);
    }

    public function test_update_succeeds_without_changing_file()
    {
        Storage::fake('certifications');
        $user = $this->actingUser();
        $certification = $this->createCertification($user);

        $response = $this->actingAs($user)->patch(route('certifications.update', $certification), [
            'name' => 'Cert sin nuevo archivo',
        ]);

        $response->assertRedirect(route('certifications.index'));
        $this->assertDatabaseHas('certifications', [
            'id' => $certification->id,
            'name' => 'Cert sin nuevo archivo',
            'attached_file' => 'original.pdf',
        ]);
    }
}
