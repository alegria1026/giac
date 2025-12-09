<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\ProjectRequest;
use App\Http\Requests\UpdateProjectRequest;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if (request()->routeIs('projects.engineering')) {
            $engineering = Project::where('category', 'Ingeniería')
                ->orderBy('created_at', 'desc')
                ->get()
                ->map(function ($item) {
                    $item->attached_file = Storage::disk('projects')->url($item->attached_file);
                    return $item;
                });

            return Inertia::render('project/index-engineering', [
                'engineering' => $engineering,
            ]);
        }

        if (request()->routeIs('projects.construction')) {
            $construction = Project::where('category', 'Construcción')
                ->orderBy('created_at', 'desc')
                ->get()
                ->map(function ($item) {
                    $item->attached_file = Storage::disk('projects')->url($item->attached_file);
                    return $item;
                });

            return Inertia::render('project/index-construction', [
                'construction' => $construction,
            ]);
        }

        $engineering = Project::where('category', 'Ingeniería')
            ->orderBy('created_at', 'desc')
            ->paginate(10, ['*'], 'ingenieria')
            ->through(fn ($item) => [
                ...$item->toArray(),
                'attached_file' => Storage::disk('projects')->url($item->attached_file),
            ]);

        $construction = Project::where('category', 'Construcción')
            ->orderBy('created_at', 'desc')
            ->paginate(10, ['*'], 'construccion')
            ->through(fn ($item) => [
                ...$item->toArray(),
                'attached_file' => Storage::disk('projects')->url($item->attached_file),
            ]);

        return Inertia::render('project/index-auth', [
            'engineering' => $engineering,
            'construction' => $construction,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('project/create-project');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProjectRequest $request)
    {
        $validated = $request->validated();

        if ($request->hasFile('attached_file')) {
            $file = $request->file('attached_file');
            $fileName = time() . '_' . $file->getClientOriginalName();
            $path = $file->storeAs('', $fileName, 'projects');
        }

        Project::create([
            'user_id' => Auth::id(),
            'name' => $validated['name'],
            'description' => $validated['description'],
            'category' => $validated['category'],
            'attached_file' => $path ?? null,
        ]);

        return to_route('projects.index')->with('status', 'Proyecto creado correctamente.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        return Inertia::render('project/show-project', [
            'project' => [
                'id' => $project->id,
                'name' => $project->name,
                'description' => $project->description,
                'category' => $project->category,
                'attached_file' => $project->attached_file
                    ? Storage::disk('projects')->url($project->attached_file)
                    : null,
            ],
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        $validated = $request->validated();

        if ($request->hasFile('attached_file')) {
            if ($project->attached_file) {
                Storage::disk('projects')->delete($project->attached_file);
            }

            $file = $request->file('attached_file');
            $fileName = time() . '_' . $file->getClientOriginalName();
            $path = $file->storeAs('', $fileName, 'projects');

            $validated['attached_file'] = $path;
        }

        if (!isset($validated['attached_file'])) {
            $validated['attached_file'] = $project->attached_file;
        }

        $project->update($validated);

        return to_route('projects.index')->with('status', 'Proyecto actualizado correctamente.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        if ($project->attached_file) {
            Storage::disk('projects')->delete($project->attached_file);
        }

        $project->delete();

        return to_route('projects.index')->with('status', 'Proyecto eliminado correctamente.');
    }
}
