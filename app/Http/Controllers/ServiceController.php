<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Service;
use Illuminate\Support\Facades\Auth;
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
                ->paginate(12, ['*'], 'ingenieria');

            return Inertia::render('service/index-ingenieria', [
                'ingenieria' => $ingenieria,
            ]);
        }

        if (request()->routeIs('services.construccion')) {
            $construccion = Service::where('status', 'Construcción')
                ->orderBy('created_at', 'desc')
                ->paginate(12, ['*'], 'construccion');

            return Inertia::render('service/index-construccion', [
                'construccion' => $construccion,
            ]);
        }

        $ingenieria = Service::where('status', 'Ingeniería')
            ->orderBy('created_at', 'desc')
            ->paginate(10, ['*'], 'ingenieria');

        $construccion = Service::where('status', 'Construcción')
            ->orderBy('created_at', 'desc')
            ->paginate(10, ['*'], 'construccion');

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
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
