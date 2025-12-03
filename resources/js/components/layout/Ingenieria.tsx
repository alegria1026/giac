import React from 'react';
import styles from './Ingenieria.module.css';
import imgFondo from '@/assets/ing.png';

export default function Ingenieria() {
    return (
        <section
            className={styles.ingenieria}
            style={{ backgroundImage: `url(${imgFondo})` }}
        >
            <h2>Ingeniería</h2>

            <ul>
                <li>Ingeniería conceptual y básica.</li>
                <li>Levantamiento físico mediante equipo laser scanner FARO 3D.</li>
            </ul>

            <button className={styles.conoceMas}>Ver más servicios</button>
        </section>
    );
}
