<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateServiceRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'min:3', 'max:255'],
            'description' => ['required', 'string', 'min:3', 'max:500'],
            'category' => ['required', 'in:Ingeniería,Construcción'],
            'attached_file' => ['required', 'image', 'max:5120'],
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'El nombre del servicio es obligatorio.',
            'name.string' => 'El nombre del servicio debe ser un texto.',
            'name.min' => 'El nombre debe tener al menos 3 caracteres.',
            'name.max' => 'El nombre no puede tener más de 255 caracteres.',

            'description.required' => 'La descripción es obligatoria.',
            'description.string' => 'La descripción debe ser un texto.',
            'description.min' => 'La descripción debe tener al menos 3 caracteres.',
            'description.max' => 'La descripción no puede tener más de 500 caracteres.',

            'category.required' => 'La categoría es obligatoria.',
            'category.in' => 'La categoría seleccionada no es válida. Debe ser Ingeniería o Construcción.',

            'attached_file.required' => 'El archivo adjunto es obligatorio.',
            'attached_file.image' => 'El archivo debe ser una imagen (JPG, PNG, etc).',
            'attached_file.max' => 'La imagen no puede pesar más de 5 MB (5120 KB).',
        ];
    }
}
