import styles from "./Contacto.module.css";
import mapa from "@/assets/mapa.png";

export default function Contacto() {
    return (
        <section className={styles.contacto}>
            <div className={styles.contactoHeader}>
                <h2>Háblanos de tu proyecto</h2>
                <p>Estamos listos para ayudarte con tu próximo desafío</p>
            </div>

            <div className={styles.contactoGrid}>
                {/* INFO */}
                <div className={styles.info}>

                    <div className={styles.infoItem}>
                        <span className={styles.icon}>📞</span>
                        <div>
                            <h4>Teléfono</h4>
                            <p>+52 921 234 89 34</p>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <span className={styles.icon}>✉️</span>
                        <div>
                            <h4>Email</h4>
                            <p>example@gmail.com</p>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <span className={styles.icon}>📍</span>
                        <div>
                            <h4>Ubicación</h4>
                            <p>
                                Francisco Villa #101<br />
                                Col. Luis Echeverría<br />
                                C.P. 96440<br />
                                Coatzacoalcos, Veracruz
                            </p>
                        </div>
                    </div>

                    <img src={mapa} className={styles.mapa} alt="Mapa" />
                </div>

                {/* FORMULARIO */}
                <form className={styles.formulario}>
                    <h3>Solicitar cotización</h3>
                    <p className={styles.formDesc}>
                        Cuéntanos de tu proyecto y te contactaremos pronto
                    </p>

                    <div className={styles.formRow}>
                        <label>Nombre</label>
                        <input type="text" placeholder="Tu nombre" />

                        <label>Empresa</label>
                        <input type="text" placeholder="Nombre de la empresa" />
                    </div>

                    <label>Email</label>
                    <input type="email" placeholder="Correo electrónico" />

                    <label>Descripción</label>
                    <textarea placeholder="Describe tu proyecto..." />

                    <button type="submit" className={styles.btnEnviar}>
                        Enviar solicitud
                    </button>
                </form>
            </div>
        </section>
    );
}
