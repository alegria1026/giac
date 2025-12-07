import styles from "./Clientes.module.css";

import pemex from "@/assets/clientes/pemex.png";
import ami from "@/assets/clientes/ami.png";
import scribe from "@/assets/clientes/scribe.png";
import sedena from "@/assets/clientes/sedena.png";

export default function Clientes() {
    return (
        <section className={styles.clientes}>
            <h2>Clientes</h2>

            <div className={styles.carousel}>
                <div className={styles.carouselTrack}>
                    <img src={pemex} alt="Cliente Pemex" />
                    <img src={ami} alt="Cliente AMI" />
                    <img src={scribe} alt="Cliente Scribe" />
                    <img src={sedena} alt="Cliente Sedena" />
                </div>
            </div>
        </section>
    );
}
