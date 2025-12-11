<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\CertificationController;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('/us', function () {
    return Inertia::render('us');
})->name('us');

Route::get('/engineering', [ServiceController::class, 'index'])->name('services.engineering');
Route::get('/construction', [ServiceController::class, 'index'])->name('services.construction');

Route::get('/projects/engineering', [ProjectController::class, 'index'])->name('projects.engineering');
Route::get('/projects/construction', [ProjectController::class, 'index'])->name('projects.construction');

Route::get('/certifications/public', [CertificationController::class, 'index'])->name('certifications.public');

Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('/services', [ServiceController::class, 'index'])->name('services.index');
    Route::get('/services/create', [ServiceController::class, 'create'])->name('services.create');
    Route::post('/services', [ServiceController::class, 'store'])->name('services.store');
    Route::get('/services/{service}', [ServiceController::class, 'show'])->name('services.show');
    Route::patch('/services/{service}', [ServiceController::class, 'update'])->name('services.update');
    Route::delete('/services/{service}', [ServiceController::class, 'destroy'])->name('services.destroy');

    Route::get('/projects', [ProjectController::class, 'index'])->name('projects.index');
    Route::get('/projects/create', [ProjectController::class, 'create'])->name('projects.create');
    Route::post('/projects', [ProjectController::class, 'store'])->name('projects.store');
    Route::get('/projects/{project}', [ProjectController::class, 'show'])->name('projects.show');
    Route::patch('/projects/{project}', [ProjectController::class, 'update'])->name('projects.update');
    Route::delete('/projects/{project}', [ProjectController::class, 'destroy'])->name('projects.destroy');

    Route::get('/certifications', [CertificationController::class, 'index'])->name('certifications.index');
    Route::get('/certifications/create', [CertificationController::class, 'create'])->name('certifications.create');
    Route::post('/certifications', [CertificationController::class, 'store'])->name('certifications.store');//aqui mandaremos la creacion de certifications
    Route::get('/certifications/{certification}', [CertificationController::class, 'show'])->name('certifications.show');
    Route::patch('/certifications/{certification}', [CertificationController::class, 'update'])->name('certifications.update');//ruta para actulizar
    Route::delete('/certifications/{certification}', [CertificationController::class, 'destroy'])->name('certifications.destroy');
});

require __DIR__.'/settings.php';
