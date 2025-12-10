import React from 'react';
import { Link } from '@inertiajs/react';
import styles from './Hero.module.css';
import videoHeader from '@/assets/header.mp4';

export default function Hero() {
    return (
        <section id="hero" className={styles.hero}>   {/* 👈 AQUÍ */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className={styles.bgVideo}
            >
                <source src={videoHeader} type="video/mp4" />
            </video>

            <div className={styles.heroContent}>
                <h1>Building the future</h1>

                <p>
                    GIAC OIL & GAS empresa Mexicana, socialmente responsable.
                    Realiza proyectos de ingeniería en gasoductos para el servicio
                    de Gas Natural e incursiona en proyectos integrales para el
                    sector energético, proponiendo soluciones innovadoras para
                    la medición, regulación, análisis y control de fludos.
                </p>

                <Link href="/projects/engineering" className={styles.conoceMas}>
                    Conocer más
                </Link>
            </div>
        </section>
    );
}
