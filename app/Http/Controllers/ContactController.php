<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(ContactRequest $request)
    {
        $data = $request->validated();

        try {
            $mensaje = "NUEVA SOLICITUD DE COTIZACIÓN\n\n" .
                "Nombre: {$data['nombre']}\n" .
                "Empresa: " . ($data['empresa'] ?? 'No especificada') . "\n" .
                "Email: {$data['email']}\n\n" .
                "Descripción del proyecto:\n{$data['descripcion']}";

            Mail::raw($mensaje, function ($message) use ($data) {
                $message->to('yahirhumberto04@gmail.com')
                    ->subject('Nuevo mensaje de contacto - ' . $data['nombre']);
            });

            return back();
        } catch (\Exception $e) {
            return back()->withErrors(['email' => 'Error al enviar el mensaje: ' . $e->getMessage()]);
        }
    }
}
