<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCertificationRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'min:3', 'max:255'],
            'attached_file' => ['sometimes', 'required', 'file', 'mimes:jpg,jpeg,png,pdf', 'max:5120'],
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'El nombre de la certificación es obligatorio.',
            'name.string' => 'El nombre debe ser un texto válido.',
            'name.min' => 'El nombre debe tener al menos 3 caracteres.',
            'name.max' => 'El nombre no puede tener más de 255 caracteres.',

            'attached_file.required' => 'El archivo es obligatorio.',
            'attached_file.file' => 'Debes subir un archivo válido.',
            'attached_file.mimes' => 'El archivo debe ser JPG, PNG o PDF.',
            'attached_file.max' => 'El archivo no puede superar los 5 MB.',
        ];
    }
}
