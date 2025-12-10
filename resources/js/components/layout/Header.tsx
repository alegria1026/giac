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

                <Link href="/projects/engineering" className={styles.navLink}>
                    Proyectos
                </Link>

                <button onClick={() => scrollToSection("ingenieria")} className={styles.navLink}>
                    Ingeniería
                </button>

                <Link href="/projects/engineering" className={styles.navLink}>
                    Proyectos
                </Link>

                <button onClick={() => scrollToSection("construccion")} className={styles.navLink}>
                    Construcción
                </button>

                <button onClick={() => scrollToSection("certificaciones")} className={styles.navLink}>
                    Certificaciones
                </button>

                <button onClick={() => scrollToSection("clientes")} className={styles.navLink}>
                    Clientes
                </button>

                <button onClick={() => scrollToSection("contacto")} className={styles.navLink}>
                    Contacto
                </button>


                {/*  {auth.user ? (
                    <Link href={dashboard()} className={styles.authBtn}>
                        Dashboard
                    </Link>
                ) : (
                    <>
                         <Link
                            href={login()}
                            className={`${styles.authBtn} ${styles.loginBtn}`}
                        >
                            Log in
                        </Link>

                        <Link href={register()} className={styles.authBtn}>
                            Register
                        </Link>
                    </>
                )}*/}

            </nav>
        </header>
    );
}
