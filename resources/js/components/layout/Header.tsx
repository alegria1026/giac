import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import styles from "./Header.module.css";
import logo from "@/assets/logogiac.svg";
import MenuIcon from "@/components/icons/MenuIcon";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
        <header className={styles.mainHeader}>
            <div className={styles.logo}>
                <Link href="/">
                    <img src={logo} alt="Giac oil & gas" className={styles.logoImg} />
                </Link>
            </div>

            <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
                <MenuIcon className={styles.menuIcon} />
            </button>

            <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
                <button onClick={() => scrollToSection("hero")} className={styles.navLink}>
                    Nosotros
                </button>

                <button onClick={() => scrollToSection("ingenieria")} className={styles.navLink}>
                    Ingeniería
                </button>

                <button onClick={() => scrollToSection("construccion")} className={styles.navLink}>
                    Construcción
                </button>

                <Link href="/projects/engineering" className={styles.navLink}>
                    Proyectos
                </Link>

                <button onClick={() => scrollToSection("certificaciones")} className={styles.navLink}>
                    Certificaciones
                </button>

                <button onClick={() => scrollToSection("clientes")} className={styles.navLink}>
                    Clientes
                </button>

                <button onClick={() => scrollToSection("contacto")} className={styles.navLink}>
                    Contacto
                </button>

            </nav>
        </header>
    );
}
