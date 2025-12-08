import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>GIAC  <span className={styles.register}>&reg;</span> 2025</p>
        </footer>
    );
}
