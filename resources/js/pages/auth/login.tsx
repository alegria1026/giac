import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { store } from '@/routes/login';
import { request } from '@/routes/password';
import { Form, Head } from '@inertiajs/react';

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
    canRegister: boolean;
}

export default function Login({
                                  status,
                                  canResetPassword,
                              }: LoginProps) {
    return (
        <>
            <Head title="Iniciar sesión" />

            <div className="min-h-screen flex items-center justify-center bg-white px-8 lg:px-16 py-12">
                <div className="w-full max-w-7xl flex items-center justify-center gap-8 lg:gap-16">
                    {/* Left Side - Logo Card (only desktop) */}
                    <div className="hidden lg:flex lg:flex-1 items-center justify-center">
                        <div
                            className="bg-white rounded-3xl flex items-center justify-center w-full h-[80vh] max-w-2xl"
                            style={{
                                boxShadow: '0px 0px 8px 0px rgba(103, 103, 103, 0.2)'
                            }}
                        >
                            <img
                                src="/giac.png"
                                alt="GIAC OIL & GAS"
                                className="w-5/6 object-contain"
                            />
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="w-full lg:flex-1 flex items-center justify-center">
                        <div className="w-full max-w-md">
                            {/* Title */}
                            <div className="mb-10">
                                <h1 className="text-5xl font-bold" style={{ color: '#00326D' }}>
                                    Iniciar sesión
                                </h1>
                            </div>

                            {/* Status Message */}
                            {status && (
                                <div className="mb-6 text-sm font-medium text-green-600 bg-green-50 p-3 rounded-lg">
                                    {status}
                                </div>
                            )}

                            <Form
                                {...store.form()}
                                resetOnSuccess={['password']}
                                className="space-y-6"
                            >
                                {({ processing, errors }) => (
                                    <>
                                        {/* Email Field */}
                                        <div className="space-y-2">
                                            <Label htmlFor="email" style={{ color: '#00326D' }}>
                                                Correo electrónico
                                            </Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                name="email"
                                                required
                                                autoFocus
                                                tabIndex={1}
                                                autoComplete="email"
                                                placeholder="example@gmail.com"
                                                className="h-12 bg-white border-gray-300"
                                            />
                                            <InputError message={errors.email} />
                                        </div>

                                        {/* Password Field */}
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <Label htmlFor="password" style={{ color: '#00326D' }}>
                                                    Contraseña
                                                </Label>
                                                {canResetPassword && (
                                                    <TextLink
                                                        href={request()}
                                                        className="text-sm hover:underline"
                                                        style={{ color: '#00326D' }}
                                                        tabIndex={4}
                                                    >
                                                        ¿Olvidaste tu contraseña?
                                                    </TextLink>
                                                )}
                                            </div>
                                            <Input
                                                id="password"
                                                type="password"
                                                name="password"
                                                required
                                                tabIndex={2}
                                                autoComplete="current-password"
                                                placeholder="••••••"
                                                className="h-12 bg-white border-gray-300"
                                            />
                                            <InputError message={errors.password} />
                                        </div>

                                        {/* Remember Me */}
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                id="remember"
                                                name="remember"
                                                tabIndex={3}
                                            />
                                            <Label
                                                htmlFor="remember"
                                                className="text-sm cursor-pointer"
                                                style={{ color: '#00326D' }}
                                            >
                                                Recordarme
                                            </Label>
                                        </div>

                                        {/* Submit Button */}
                                        <Button
                                            type="submit"
                                            className="w-full h-12 text-base font-medium text-white hover:opacity-90 transition-opacity"
                                            style={{ backgroundColor: '#00326D' }}
                                            tabIndex={4}
                                            disabled={processing}
                                            data-test="login-button"
                                        >
                                            {processing && <Spinner />}
                                            Iniciar sesión
                                        </Button>
                                    </>
                                )}
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
