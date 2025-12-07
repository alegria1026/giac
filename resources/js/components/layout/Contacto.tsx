import styles from "./Contacto.module.css";
// import mapa from "@/assets/mapa.png";

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

                    <div className={styles.mapaWrapper}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1194.264737685133!2d-94.42269497727973!3d18.138378689166355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85e9825f14692c19%3A0xb7ed1abdd73736dd!2sFrancisco%20Villa%20101%2C%20Esfuerzos%20de%20los%20Hermanos%20del%20Trabajo%2C%2096470%20Coatzacoalcos%2C%20Ver.!5e0!3m2!1ses-419!2smx!4v1765141280581!5m2!1ses-419!2smx"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            className={styles.mapa}
                        />
                    </div>

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
