<?php

namespace Tests\Feature\Project;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\UploadedFile;
use App\Models\User;
use App\Models\Project;

class ProjectDestroyTest extends TestCase
{
    use RefreshDatabase;

    private function actingUser()
    {
        return $this->actingAs(User::factory()->create());
    }

    private function createProject()
    {
        Storage::fake('projects');

        $file = UploadedFile::fake()->image('to_delete.jpg')->size(500);
        $path = $file->storeAs('', 'to_delete.jpg', 'projects');

        return Project::create([
            'user_id' => auth()->id(),
            'name' => 'Proyecto a eliminar',
            'description' => 'Este proyecto será eliminado',
            'category' => 'Ingeniería',
            'attached_file' => $path,
        ]);
    }

    public function test_destroy_deletes_project_and_file()
    {
        $this->actingUser();
        Storage::fake('projects');

        $project = $this->createProject();

        Storage::disk('projects')->assertExists($project->attached_file);

        $response = $this->delete(route('projects.destroy', $project));

        $response->assertRedirect(route('projects.index'));
        $this->assertModelMissing($project);
        Storage::disk('projects')->assertMissing($project->attached_file);
    }
}
