<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateServiceRequest;
use Illuminate\Http\Request;
use App\Models\Service;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use App\Http\Requests\ServiceRequest;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if (request()->routeIs('services.ingenieria')) {
            $ingenieria = Service::where('status', 'Ingeniería')
                ->orderBy('created_at', 'desc')
                ->paginate(12, ['*'], 'ingenieria')
                ->through(fn ($item) => [
                    ...$item->toArray(),
                    'attached_file' => Storage::disk('services')->url($item->attached_file),
                ]);

            return Inertia::render('service/index-ingenieria', [
                'ingenieria' => $ingenieria,
            ]);
        }

        if (request()->routeIs('services.construccion')) {
            $construccion = Service::where('status', 'Construcción')
                ->orderBy('created_at', 'desc')
                ->paginate(12, ['*'], 'construccion')
                ->through(fn ($item) => [
                    ...$item->toArray(),
                    'attached_file' => Storage::disk('services')->url($item->attached_file),
                ]);

            return Inertia::render('service/index-construccion', [
                'construccion' => $construccion,
            ]);
        }

        $ingenieria = Service::where('status', 'Ingeniería')
            ->orderBy('created_at', 'desc')
            ->paginate(10, ['*'], 'ingenieria')
            ->through(fn ($item) => [
                ...$item->toArray(),
                'attached_file' => Storage::disk('services')->url($item->attached_file),
            ]);

        $construccion = Service::where('status', 'Construcción')
            ->orderBy('created_at', 'desc')
            ->paginate(10, ['*'], 'construccion')
            ->through(fn ($item) => [
                ...$item->toArray(),
                'attached_file' => Storage::disk('services')->url($item->attached_file),
            ]);

        return Inertia::render('service/index-auth', [
            'ingenieria' => $ingenieria,
            'construccion' => $construccion,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('service/create-service');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ServiceRequest $request)
    {
        $validated = $request->validated();

        if ($request->hasFile('attached_file')) {
            $file = $request->file('attached_file');
            $fileName = time() . '_' . $file->getClientOriginalName();
            $path = $file->storeAs('', $fileName, 'services');
        }

        Service::create([
            'user_id' => Auth::id(),
            'name' => $validated['name'],
            'description' => $validated['description'],
            'status' => $validated['status'],
            'attached_file' => $path ?? null,
        ]);

        return to_route('services.index')->with('status', 'Servicio creado correctamente.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $service = Service::findOrFail($id);

        return Inertia::render('service/show-service', [
            'service' => [
                'id' => $service->id,
                'name' => $service->name,
                'description' => $service->description,
                'status' => $service->status,
                'attached_file' => $service->attached_file
                    ? Storage::disk('services')->url($service->attached_file)
                    : null,
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateServiceRequest $request, Service $service)
    {
        $validated = $request->validated();

        if ($request->hasFile('attached_file')) {
            if ($service->attached_file) {
                Storage::disk('services')->delete($service->attached_file);
            }

            $file = $request->file('attached_file');
            $fileName = time() . '_' . $file->getClientOriginalName();
            $path = $file->storeAs('', $fileName, 'services');

            $validated['attached_file'] = $path;
        }

        if (!isset($validated['attached_file'])) {
            $validated['attached_file'] = $service->attached_file;
        }

        $service->update($validated);

        return to_route('services.index')->with('status', 'Servicio actualizado correctamente.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Service $service)
    {
        if ($service->attached_file) {
            Storage::disk('services')->delete($service->attached_file);
        }

        $service->delete();

        return to_route('services.index')->with('status', 'Servicio eliminado correctamente.');
    }
}
