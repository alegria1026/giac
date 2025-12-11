<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProjectRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255', 'min:3'],
            'description' => ['required', 'string', 'max:500', 'min:3'],
            'category' => ['required', 'in:Ingeniería,Construcción'],
            'attached_file' => ['required', 'file', 'mimes:jpg,jpeg,png', 'max:5120'], // 5MB
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'El nombre del proyecto es obligatorio.',
            'name.string' => 'El nombre debe ser un texto válido.',
            'name.max' => 'El nombre no puede tener más de 255 caracteres.',
            'name.min' => 'El nombre debe tener al menos 3 caracteres.',

            'description.required' => 'La descripción es obligatoria.',
            'description.string' => 'La descripción debe ser texto.',
            'description.max' => 'La descripción no puede tener más de 500 caracteres.',
            'description.min' => 'La descripción debe tener al menos 3 caracteres.',

            'category.required' => 'La categoría es obligatoria.',
            'category.in' => 'Selecciona una categoría válida (Ingeniería o Construcción).',

            'attached_file.required' => 'La imagen es obligatoria.',
            'attached_file.file' => 'Debes subir un archivo válido.',
            'attached_file.mimes' => 'La imagen debe ser JPG o PNG.',
            'attached_file.max' => 'La imagen no puede pesar más de 5 MB.',
        ];
    }
}
