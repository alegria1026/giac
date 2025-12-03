import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import styles from './Header.module.css';
import logo from '@/assets/logogiac.svg';
import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';

export default function Header() {
    const { auth } = usePage<SharedData>().props;

    return (
        <header className={styles.mainHeader}>
            {/* LOGO */}
            <div className={styles.logo}>
                <Link href="/">
                    <img src={logo} alt="Giac oil & gas" className={styles.logoImg} />
                </Link>
            </div>

            {/* NAV */}
            <nav className={styles.nav}>
                <Link href="">Nosotros</Link>
                <Link href="">Ingeniería</Link>
                <Link href="">Construcción</Link>
                <Link href="">Proyectos</Link>
                <Link href="">Certificaciones</Link>
                <Link href="">Oficinas</Link>
                <Link href="">Contacto</Link>

                {/* 🔥 Botones Login / Register / Dashboard */}
                {auth.user ? (
                    <Link href={dashboard()} className={styles.authBtn}>
                        Dashboard
                    </Link>
                ) : (
                    <>
                        <Link href={login()} className={styles.authBtn}>
                            Log in
                        </Link>

                        <Link href={register()} className={styles.authBtn}>
                            Register
                        </Link>
                    </>
                )}
            </nav>
        </header>
    );
}
