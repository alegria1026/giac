import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import styles from "./HeaderSections.module.css";
import logo from "@/assets/logogiac.svg";
import MenuIcon from "@/components/icons/MenuIcon";

export default function HeaderSections() {
    const [isOpen, setIsOpen] = useState(false);

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
                <Link href="/us" className={styles.navLink}>
                    Nosotros
                </Link>

                <Link href="/engineering" className={styles.navLink}>
                    Ingeniería
                </Link>


                <Link href="/construction" className={styles.navLink}>
                    Construcción
                </Link>

                <Link href="/projects/engineering" className={styles.navLink}>
                    Proyectos
                </Link>

                <Link href="/certifications/public" className={styles.navLink}>
                    Certificaciones
                </Link>

                <Link href="/#contacto" className={styles.navLink}>
                    Contacto
                </Link>

            </nav>
        </header>
    );
}
