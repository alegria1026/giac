<?php

namespace Tests\Feature\Certification;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\UploadedFile;
use App\Models\User;

class CertificationStoreTest extends TestCase
{
    use RefreshDatabase;

    private function actingUser()
    {
        return $this->actingAs(User::factory()->create());
    }

    private function validPayload($overrides = [])
    {
        return array_merge([
            'name' => 'Certificación válida',
            'attached_file' => UploadedFile::fake()->create('file.pdf', 100),
        ], $overrides);
    }

    public function test_store_fails_when_name_is_missing()
    {
        $this->actingUser();
        Storage::fake('certifications');

        $response = $this->post(route('certifications.store'), $this->validPayload([
            'name' => ''
        ]));

        $response->assertSessionHasErrors('name');
    }

    public function test_store_fails_when_name_is_too_short()
    {
        $this->actingUser();
        Storage::fake('certifications');

        $response = $this->post(route('certifications.store'), $this->validPayload([
            'name' => 'ab'
        ]));

        $response->assertSessionHasErrors('name');
    }

    public function test_store_fails_when_name_is_too_long()
    {
        $this->actingUser();
        Storage::fake('certifications');

        $response = $this->post(route('certifications.store'), $this->validPayload([
            'name' => str_repeat('a', 256)
        ]));

        $response->assertSessionHasErrors('name');
    }

    public function test_store_fails_when_file_is_missing()
    {
        $this->actingUser();
        Storage::fake('certifications');

        $payload = $this->validPayload();
        unset($payload['attached_file']);

        $response = $this->post(route('certifications.store'), $payload);

        $response->assertSessionHasErrors('attached_file');
    }

    public function test_store_fails_when_file_is_not_valid_type()
    {
        $this->actingUser();
        Storage::fake('certifications');

        $response = $this->post(route('certifications.store'), $this->validPayload([
            'attached_file' => UploadedFile::fake()->create('file.exe', 100)
        ]));

        $response->assertSessionHasErrors('attached_file');
    }

    public function test_store_fails_when_file_is_too_large()
    {
        $this->actingUser();
        Storage::fake('certifications');

        $response = $this->post(route('certifications.store'), $this->validPayload([
            'attached_file' => UploadedFile::fake()->create('file.pdf', 6000)
        ]));

        $response->assertSessionHasErrors('attached_file');
    }

    public function test_store_succeeds_with_valid_data()
    {
        $this->actingUser();
        Storage::fake('certifications');

        $response = $this->post(route('certifications.store'), $this->validPayload());

        $response->assertRedirect(route('certifications.index'));
        $this->assertDatabaseCount('certifications', 1);
    }

    public function test_store_succeeds_with_name_min_length()
    {
        $this->actingUser();
        Storage::fake('certifications');

        $response = $this->post(route('certifications.store'), $this->validPayload([
            'name' => 'abc'
        ]));

        $response->assertRedirect(route('certifications.index'));
        $this->assertDatabaseCount('certifications', 1);
    }

    public function test_store_succeeds_with_name_max_length()
    {
        $this->actingUser();
        Storage::fake('certifications');

        $response = $this->post(route('certifications.store'), $this->validPayload([
            'name' => str_repeat('a', 255)
        ]));

        $response->assertRedirect(route('certifications.index'));
        $this->assertDatabaseCount('certifications', 1);
    }

    public function test_store_succeeds_with_max_file_size()
    {
        $this->actingUser();
        Storage::fake('certifications');

        $response = $this->post(route('certifications.store'), $this->validPayload([
            'attached_file' => UploadedFile::fake()->create('file.pdf', 5120)
        ]));

        $response->assertRedirect(route('certifications.index'));
        $this->assertDatabaseCount('certifications', 1);
    }
}
