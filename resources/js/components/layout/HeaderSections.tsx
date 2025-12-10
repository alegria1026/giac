import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import styles from "./HeaderSections.module.css";
import logo from "@/assets/logogiac.svg";
import { dashboard, login, register } from "@/routes";
import { type SharedData } from "@/types";
import MenuIcon from "@/components/icons/MenuIcon";

export default function HeaderSections() {
    const { auth } = usePage<SharedData>().props;
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
        <header className={styles.mainHeader}>
            {/* LOGO */}
            <div className={styles.logo}>
                <Link href="/">
                    <img src={logo} alt="Giac oil & gas" className={styles.logoImg} />
                </Link>
            </div>

            {/* MENÚ MÓVIL */}
            <button
                className={styles.menuButton}
                onClick={() => setIsOpen(!isOpen)}
            >
                <MenuIcon className={styles.menuIcon} />
            </button>

            {/* NAV */}
            <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
                <Link href="/nosotros" className={styles.navLink}>
                    Nosotros
                </Link>

                <Link href="/engineering" className={styles.navLink}>
                    Ingeniería
                </Link>

                <Link href="/construction" className={styles.navLink}>
                    Construcción
                </Link>

                <Link href="/certifications/public" className={styles.navLink}>
                    Certificaciones
                </Link>

                <Link href="/#contacto" className={styles.navLink}>
                    Contacto
                </Link>

                {/* AUTH */}
                {auth.user ? (
                    <Link href={dashboard()} className={styles.authBtn}>
                        Dashboard
                    </Link>
                ) : (
                    <Link href={login()} className={`${styles.authBtn} ${styles.loginBtn}`}>
                        Log in
                    </Link>
                )}
            </nav>
        </header>
    );
}
