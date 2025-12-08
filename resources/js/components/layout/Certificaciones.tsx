import styles from "./Certificaciones.module.css";
import SELLO_9001 from "@/assets/SELLO_9001.png";
import SELLO_14001 from "@/assets/SELLO_14001.png";
import SELLO_45001 from "@/assets/SELLO_45001.png";
export default function Certifications() {
    return (
        <section className={styles.certifications}>
            <h2>Sistema de gestión integral certificado</h2>

            <p>
                Cuenta con un sistema de gestión integral certificado
                (ISO 9001:2015, ISO 45001:2018, e ISO 14001:2015).
            </p>

            <div className={styles.logos}>
                <img src={SELLO_9001} height="195" width="180" alt="ISO 1" />
                <img src={SELLO_14001} height="185" width="170" alt="ISO 2" />
                <img src={SELLO_45001} height="185" width="170" alt="ISO 3" />
            </div>

            <button className={styles.conoceMas}>Ver más certificaciones</button>
        </section>
    );
}
