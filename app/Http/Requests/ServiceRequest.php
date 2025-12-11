<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ServiceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'min:3', 'max:255'],
            'description' => ['required', 'string', 'min:3', 'max:500'],
            'category' => ['required', 'in:Ingeniería,Construcción'],
            'attached_file' => ['required', 'image', 'max:5120'],
        ];
    }

    /**
     * Get custom error messages for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'name.required' => 'El nombre del servicio es obligatorio.',
            'name.string' => 'El nombre del servicio debe ser un texto.',
            'name.min' => 'El nombre del servicio debe tener al menos 3 caracteres.',
            'name.max' => 'El nombre del servicio no puede tener más de 255 caracteres.',

            'description.required' => 'La descripción es obligatoria.',
            'description.string' => 'La descripción debe ser un texto.',
            'description.min' => 'La descripción debe tener al menos 3 caracteres.',
            'description.max' => 'La descripción no puede tener más de 500 caracteres.',

            'category.required' => 'La categoría es obligatoria.',
            'category.in' => 'La categoría seleccionada no es válida. Debe ser Ingeniería o Construcción.',

            'attached_file.required' => 'El archivo adjunto es obligatorio.',
            'attached_file.image' => 'El archivo adjunto debe ser una imagen.',
            'attached_file.max' => 'El archivo adjunto no puede pesar más de 5 MB (5120 KB).',
        ];
    }
}
