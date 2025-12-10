import React from "react";
import styles from "./Construccion.module.css";
import { Link } from "@inertiajs/react";
import videoConstruccion from "@/assets/construccion.mp4";

export default function Construccion() {
    return (
        <section id="construccion" className={styles.construccionHero}>
            <video
                autoPlay
                muted
                loop
                playsInline
                className={styles.bgVideo}
            >
                <source src={videoConstruccion} type="video/mp4" />
            </video>

            <div className={styles.construccionContent}>
                <h2>Construcción</h2>

                <ul>
                    <li>Construcción, mantenimiento y fabricación de trenes de medición fiscal para hidrocarburos.</li>
                    <li>Construcción, mantenimiento y fabricación de trenes de medición fiscal para medición de agua.</li>
                    <li>Construcción, mantenimiento y fabricación de tanques presurizados.</li>
                    <li>Construcción, mantenimiento y reparación de tanques de almacenamiento.</li>
                </ul>

                <Link href="/construction" className={styles.conoceMas}>
                    Ver más servicios
                </Link>
            </div>
        </section>
    );
}
