<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Notification;

class ContactStoreTest extends TestCase
{
    use RefreshDatabase;

    private function validData($overrides = [])
    {
        return array_merge([
            'nombre' => 'Juan Pérez',
            'empresa' => 'Mi Empresa',
            'email' => 'correo@valido.com',
            'descripcion' => 'Descripción válida del proyecto.',
        ], $overrides);
    }

    public function test_store_fails_when_nombre_is_missing()
    {
        $response = $this->post(route('contact.store'), $this->validData([
            'nombre' => '',
        ]));

        $response->assertSessionHasErrors('nombre');
    }

    public function test_store_fails_when_nombre_is_too_short()
    {
        $response = $this->post(route('contact.store'), $this->validData([
            'nombre' => 'ab',
        ]));

        $response->assertSessionHasErrors('nombre');
    }

    public function test_store_fails_when_nombre_is_too_long()
    {
        $response = $this->post(route('contact.store'), $this->validData([
            'nombre' => str_repeat('a', 256),
        ]));

        $response->assertSessionHasErrors('nombre');
    }

    public function test_store_fails_when_empresa_is_too_long()
    {
        $response = $this->post(route('contact.store'), $this->validData([
            'empresa' => str_repeat('b', 256),
        ]));

        $response->assertSessionHasErrors('empresa');
    }

    public function test_store_fails_when_email_is_missing()
    {
        $response = $this->post(route('contact.store'), $this->validData([
            'email' => '',
        ]));

        $response->assertSessionHasErrors('email');
    }

    public function test_store_fails_when_email_is_invalid()
    {
        $response = $this->post(route('contact.store'), $this->validData([
            'email' => 'correo-invalido',
        ]));

        $response->assertSessionHasErrors('email');
    }

    public function test_store_fails_when_descripcion_is_missing()
    {
        $response = $this->post(route('contact.store'), $this->validData([
            'descripcion' => '',
        ]));

        $response->assertSessionHasErrors('descripcion');
    }

    public function test_store_fails_when_descripcion_is_too_short()
    {
        $response = $this->post(route('contact.store'), $this->validData([
            'descripcion' => 'ab',
        ]));

        $response->assertSessionHasErrors('descripcion');
    }

    public function test_store_fails_when_descripcion_is_too_long()
    {
        $response = $this->post(route('contact.store'), $this->validData([
            'descripcion' => str_repeat('c', 2001),
        ]));

        $response->assertSessionHasErrors('descripcion');
    }

    public function test_store_succeeds_with_valid_data()
    {
        Mail::fake();

        $response = $this->post(route('contact.store'), $this->validData());

        $response->assertStatus(302);
        $response->assertSessionDoesntHaveErrors();
    }


    public function test_store_succeeds_with_empresa_nullable()
    {
        Mail::fake();

        $response = $this->post(route('contact.store'), $this->validData([
            'empresa' => null,
        ]));

        $response->assertStatus(302);
        $response->assertSessionDoesntHaveErrors();
    }
}
