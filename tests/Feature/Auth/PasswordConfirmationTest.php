<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class PasswordConfirmationTest extends TestCase
{
    use RefreshDatabase;


    public function test_password_confirmation_requires_authentication()
    {
        $response = $this->get(route('password.confirm'));

        $response->assertRedirect(route('login'));
    }
}
