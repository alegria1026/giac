import React from 'react';
import styles from './Ingenieria.module.css';
import imgFondo from '@/assets/ing.png';
import { Link } from '@inertiajs/react';
import videoHeader from '@/assets/ingenieria.mp4';


export default function Ingenieria() {
    return (

        <section id="ingenieria" className={styles.ingenieriaHero}>
            <video
                autoPlay
                muted
                loop
                playsInline
                className={styles.ingenieriaVideo}
            >
                <source src={videoHeader} type="video/mp4" />
            </video>

            <div className={styles.ingenieriaContent}>
                <h2>Ingeniería</h2>

                <p>Ingeniería conceptual, básica y a detalle de:</p>

                <ul>
                    <li>Sistemas de medición de transferencia de custodia</li>
                    <li>Tanques de almacenamiento</li>
                    <li>Análisis estructural y de flexibilidad</li>
                </ul>

                <Link href="/engineering" className={styles.conoceMas}>
                    Ver más servicios
                </Link>
            </div>
        </section>

    );
}
