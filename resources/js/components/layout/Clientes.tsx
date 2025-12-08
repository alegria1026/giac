import styles from "./Clientes.module.css";

import pemex from "@/assets/Clientes/pemex.png";
import ami from "@/assets/Clientes/ami.png";
import scribe from "@/assets/Clientes/scribe.png";
import sedena from "@/assets/Clientes/sedena.png";

export default function Clientes() {
    return (
        <section id="clientes" className={styles.clientes}>
            <h2>Clientes</h2>

            <div className={styles.carousel}>
                <div className={styles.carouselTrack}>
                    <img src={pemex} alt="Cliente Pemex" />
                    <img src={ami} alt="Cliente AMI" />
                    <img src={scribe} alt="Cliente Scribe" />
                    <img src={sedena} alt="Cliente Sedena" />

                    <img src={pemex} alt="Pemex" />
                    <img src={ami} alt="AMI" />
                    <img src={scribe} alt="Scribe" />
                    <img src={sedena} alt="Sedena" />
                </div>
            </div>
        </section>
    );
}
