import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import styles from "./Header.module.css";
import logo from "@/assets/logogiac.svg";
import { dashboard, login, register } from "@/routes";
import { type SharedData } from "@/types";
import MenuIcon from "@/components/icons/MenuIcon";

export default function Header() {
    const { auth } = usePage<SharedData>().props;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={styles.mainHeader}>
            {/* LOGO */}
            <div className={styles.logo}>
                <Link href="/">
                    <img src={logo} alt="Giac oil & gas" className={styles.logoImg} />
                </Link>
            </div>

            {/* BOTÓN HAMBURGER (solo móvil) */}
            <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
                <MenuIcon className={styles.menuIcon} />
            </button>

            {/* NAV */}
            <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
                <Link href="/nuestra-empresa">Nosotros</Link>
                <Link href="">Ingeniería</Link>
                <Link href="">Construcción</Link>
                <Link href="">Proyectos</Link>
                <Link href="">Certificaciones</Link>
                <Link href="/oficinas">Oficinas</Link>
                <Link href="/contacto">Contacto</Link>

                {auth.user ? (
                    <Link href={dashboard()} className={styles.authBtn}>
                        Dashboard
                    </Link>
                ) : (
                    <>
                        <Link href={login()} className={styles.authBtn}>Log in</Link>
                        <Link href={register()} className={styles.authBtn}>Register</Link>
                    </>
                )}
            </nav>
        </header>
    );
}
