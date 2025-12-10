//import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

import Header from '@/components/layout/Header';
import Hero from '@/components/layout/Hero';
import Ingenieria from '@/components/layout/Ingenieria';
import Construccion from '@/components/layout/Construccion';
import Certifications from '@/components/layout/Certificaciones';
import Clientes from '@/components/layout/Clientes';
import Contacto from '@/components/layout/Contacto';
import Footer from '@/components/layout/Footer';

export default function Welcome({
                                    canRegister = true,
                                }: {
    canRegister?: boolean;
}) {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="GIAC">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>

            <Header />

            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">


                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full max-w-[335px] flex-col lg:max-w-4xl">

                        <Hero />
                        <Ingenieria />
                        <Construccion />
                        <Certifications />
                        <Clientes />
                        <Contacto />
                        <Footer />

                    </main>
                </div>
            </div>
        </>
    );
}
