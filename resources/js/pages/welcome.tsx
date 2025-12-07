import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

// importar HEADER nuevo
import Header from '@/components/layout/Header';

// importar secciones de Home
import Hero from '@/components/layout/Hero';
import Ingenieria from '@/components/layout/Ingenieria';
import Construccion from '@/components/layout/Construccion';
import Certificaciones from '@/components/layout/Certificaciones';
// import Clientes from '@/components/layout/Clientes';
// import Contacto from '@/components/layout/Contacto';

export default function Welcome({
                                    canRegister = true,
                                }: {
    canRegister?: boolean;
}) {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>

            {/* 🔥 HEADER INTEGRADO CORRECTAMENTE */}
            <Header />

            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">


                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full max-w-[335px] flex-col lg:max-w-4xl">

                        {/* 🔥 Sección HERO */}
                        <Hero />
                        <Ingenieria />
                        <Construccion />
                        <Certificaciones />

                        {/* 🔥 Secciones futuras (activarlas cuando las conviertas) */}
                        {/*



                        <Clientes />
                        <Contacto />
                        */}

                    </main>
                </div>

                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
