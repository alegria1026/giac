import React from "react";
import styles from "./Construccion.module.css";
import bgImage from "@/assets/construccion.png";
import { Link } from '@inertiajs/react';

export default function Construccion() {
    return (
        <section id="construccion" className={styles.construccion}
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className={styles.content}>
                <h2>Construcción</h2>

                <ul>
                    <li>Construcción, mantenimiento y fabricación de trenes de medición fiscal para hidrocarburos.</li>
                    <li>Construcción, mantenimiento y fabricación de trenes de medición fiscal para medición de agua.</li>
                    <li>Construcción, mantenimiento y fabricación de tanques presurizados.</li>
                    <li>Construcción, mantenimiento y reparación de Tanques de Almacenamiento.</li>
                </ul>

                <Link href="/projects/construction" className={styles.conoceMas}>
                    Ver más servicios
                </Link>
            </div>
        </section>
    );
}
