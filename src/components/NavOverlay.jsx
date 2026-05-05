import { Link } from "react-router-dom";
import styles from "./NavOverlay.module.css";
import logo from "../assets/images/logo-white.svg";

export default function NavOverlay({ open, setOpen }) {
  return (
    <div className={`${styles.overlay} ${open ? styles.show : ""}`}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <img src={logo} alt="Naturhistorisk Museum Aarhus" />

          <button
            onClick={() => setOpen(false)}
            className={styles.close}
            aria-label="Luk menu"
          >
            ×
          </button>
        </div>

        <nav className={styles.nav}>
          <Link to="/aabningstider" onClick={() => setOpen(false)}>Besøg os</Link>
          <Link to="/kalender" onClick={() => setOpen(false)}>Kalender</Link>
          <Link to="/" onClick={() => setOpen(false)}>Skole & institution</Link>
          <Link to="/" onClick={() => setOpen(false)}>Forskning</Link>
          <Link to="/" onClick={() => setOpen(false)}>Nyt museum</Link>
          <Link to="/" onClick={() => setOpen(false)}>Om museet</Link>
          <Link to="/" onClick={() => setOpen(false)}>Webshop</Link>
        </nav>

        <Link
          to="/aabningstider"
          onClick={() => setOpen(false)}
          className={`${styles.cta} filledBtn`}
        >
          Køb billet
        </Link>

        <div className={styles.bottom}>
          <div className={styles.socials}>
            <i className="fa-brands fa-square-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>

          <div className={styles.tools}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <span>DK</span>
          </div>
        </div>
      </div>
    </div>
  );
}