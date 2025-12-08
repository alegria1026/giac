import React from 'react';
import styles from './Ingenieria.module.css';
import imgFondo from '@/assets/ing.png';
import { Link } from '@inertiajs/react';


export default function Ingenieria() {
    return (

        <section id="ingenieria"
            className={styles.ingenieria}
            style={{ backgroundImage: `url(${imgFondo})` }}
        >
            <div className={styles.content}>
                <h2>Ingeniería</h2>

                <p>Ingeniería conceptual, básica y a detalle de:</p>

                <ul>

                     <ul>
                         <li> Sistemas de medición de transferencia de custodia</li>
                         <li> Tanques de almacenamiento</li>
                         <li>Análisis estructural y de flexibilidad</li>
                     </ul>
                </ul>

                <Link href="/projects/engineering" className={styles.conoceMas}>
                    Ver más servicios
                </Link>


            </div>
        </section>
    );
}
