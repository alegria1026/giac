<?php

namespace App\Http\Controllers;

use App\Models\Certification;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\CertificationRequest;
use App\Http\Requests\UpdateCertificationRequest;

class CertificationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if (request()->routeIs('certifications.public')) {
            $public = Certification::orderBy('created_at', 'desc')->get()
                ->map(function ($item) {
                    $item->attached_file = Storage::disk('certifications')->url($item->attached_file);
                    return $item;
                });

            return Inertia::render('certification/index-public', [
                'certifications' => $public,
            ]);
        }

        $certifications = Certification::orderBy('created_at', 'desc')->paginate(10)
            ->through(fn ($item) => [
                ...$item->toArray(),
                'attached_file' => Storage::disk('certifications')->url($item->attached_file),
            ]);

        return Inertia::render('certification/index-auth', [
            'certifications' => $certifications,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('certification/create-certification');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CertificationRequest $request)
    {
        $validated = $request->validated();

        if ($request->hasFile('attached_file')) {
            $file = $request->file('attached_file');
            $fileName = time() . '_' . $file->getClientOriginalName();
            $path = $file->storeAs('', $fileName, 'certifications');
        }

        Certification::create([
            'user_id' => Auth::id(),
            'name' => $validated['name'],
            'attached_file' => $path ?? null,
        ]);

        return to_route('certifications.index')->with('status', 'Certificación creada correctamente.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Certification $certification)
    {
        return Inertia::render('certification/show-certification', [
            'certification' => [
                'id' => $certification->id,
                'name' => $certification->name,
                'attached_file' => $certification->attached_file
                    ? Storage::disk('certifications')->url($certification->attached_file)
                    : null,
            ],
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCertificationRequest $request, Certification $certification)
    {
        $validated = $request->validated();

        if ($request->hasFile('attached_file')) {
            if ($certification->attached_file) {
                Storage::disk('certifications')->delete($certification->attached_file);
            }

            $file = $request->file('attached_file');
            $fileName = time() . '_' . $file->getClientOriginalName();
            $path = $file->storeAs('', $fileName, 'certifications');

            $validated['attached_file'] = $path;
        }

        if (!isset($validated['attached_file'])) {
            $validated['attached_file'] = $certification->attached_file;
        }

        $certification->update($validated);

        return to_route('certifications.index')->with('status', 'Certificación actualizada correctamente.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Certification $certification)
    {
        if ($certification->attached_file) {
            Storage::disk('certifications')->delete($certification->attached_file);
        }

        $certification->delete();

        return to_route('certifications.index')->with('status', 'Certificación eliminada correctamente.');
    }
}
