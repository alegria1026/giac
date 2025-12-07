import styles from "./Certificaciones.module.css";
import atc from "@/assets/atc.png";

export default function Certifications() {
    return (
        <section className={styles.certifications}>
            <h2>Sistema de gestión integral certificado</h2>

            <p>
                Cuenta con un sistema de gestión integral certificado
                (ISO 9001:2015, ISO 45001:2018, e ISO 14001:2015).
            </p>

            <div className={styles.logos}>
                <img src={atc} height="185" width="170" alt="ISO 1" />
                <img src={atc} height="185" width="170" alt="ISO 2" />
                <img src={atc} height="185" width="170" alt="ISO 3" />
            </div>

            <button className={styles.conoceMas}>Ver más certificaciones</button>
        </section>
    );
}
