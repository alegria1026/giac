import styles from "./Us.module.css";
import mision from "@/assets/iconos/mision.svg";
import vision from "@/assets/iconos/vision.svg";
import valores from "@/assets/iconos/valores.svg";
import objetivo from "@/assets/iconos/objetivo.svg";
import HeaderSections from '@/components/layout/HeaderSections';

export default function Us() {
    return (
        <section className={styles.empresa} id="nosotros">
            < HeaderSections/>
            {/* TÍTULO */}
            <h2>Sobre Nuestra Empresa</h2>

            {/* TEXTO INTRO */}
            <p className={styles.intro}>
                GIAC OIL & GAS es una empresa Mexicana, socialmente responsable,
                inicio operaciones en el año 2018, desarrollando proyectos de ingeniería
                en gasoductos para el servicio de Gas Natural, e incursionamos en
                proyectos integrales para el sector energético, proponiendo soluciones
                innovadoras para la medición, regulación y análisis de fluidos.
                Estamos comprometidos con brindar experiencia, infraestructura y
                tecnología para el desarrollo de nuestros proyectos y servicios.
            </p>

            {/* TARJETAS */}
            <div className={styles.cards}>

                <div className={styles.card}>
                    <img src={mision} alt="Misión" className={styles.iconImg} />
                    <h3>Misión</h3>
                    <p>
                        Ser un grupo de profesionales visionarios y creativos,
                        enfocados en la satisfacción de nuestros clientes mediante
                        soluciones técnicas innovadoras, seguras y sustentables,
                        colaborando en el desarrollo económico, social, humano y ambiental.
                    </p>
                </div>

                <div className={styles.card}>
                    <img src={vision} alt="Visión" className={styles.iconImg} />
                    <h3>Visión</h3>
                    <p>
                        Consolidarnos como una empresa especializada, líder en el
                        mercado energético nacional, que impulse el desarrollo mediante
                        la participación de un capital humano de alto valor.
                    </p>
                </div>

                <div className={styles.card}>
                    <img src={valores} alt="Valores" className={styles.iconImg} />
                    <h3>Valores</h3>
                    <p>
                        Integridad, compromiso, responsabilidad, eficiencia,
                        transparencia, innovación y mejora continua. Estos valores
                        rigen nuestra conducta profesional y definen nuestras decisiones.
                    </p>
                </div>

                <div className={styles.card}>
                    <img src={objetivo} alt="Objetivo" className={styles.iconImg} />
                    <h3>Objetivo</h3>
                    <p>
                        Desarrollar proyectos de ingeniería y energía con los más
                        altos estándares de calidad y seguridad, ofreciendo
                        soluciones integrales que contribuyan al crecimiento
                        sostenible de nuestros clientes y del país.
                    </p>
                </div>
            </div>
        </section>
    );
}
