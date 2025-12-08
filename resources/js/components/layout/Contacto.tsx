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
    <span className={styles.icon}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path
                fillRule="evenodd"
                d="M2.003 5.884c0-1.654 1.346-3 3-3h1.138c1.065 0 1.99.658 2.327 1.65l.498 1.494a2.25 2.25 0 01-.52 2.263L7.88 9.857a8.969 8.969 0 003.263 3.263l1.569-1.066a2.25 2.25 0 012.263-.52l1.494.498a2.381 2.381 0 011.65 2.327V17c0 1.654-1.346 3-3 3h-.75C6.35 20 0 13.65 0 6.75v-.866z"
                clipRule="evenodd"
            />
        </svg>
    </span>

                        <div>
                            <h4>Teléfono</h4>
                            <p>+52 921 234 89 34</p>
                        </div>
                    </div>


                    <div className={styles.infoItem}>
    <span className={styles.icon}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <path d="M20 4H4a2 2 0 00-2 2v1.2l10 5.6 10-5.6V6a2 2 0 00-2-2zm2 5.2l-10 5.6-10-5.6V18a2 2 0 002 2h16a2 2 0 002-2V9.2z" />
        </svg>
    </span>

                        <div>
                            <h4>Email</h4>
                            <p>example@gmail.com</p>
                        </div>
                    </div>


                    <div className={styles.infoItem}>
    <span className={styles.icon}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path d="M10 0C6.1 0 3 3.1 3 7c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
        </svg>
    </span>

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
