import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import logoWhite from "../assets/images/logo-white.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to="/" className={styles.logoLink}>
        <img src={logoWhite} alt="Naturhistorisk Museum Aarhus" />
      </Link>

      <nav className={styles.links}>
        <div>
          <Link to="/aabningstider">Om museet</Link>
          <Link to="/kalender">Nyheder</Link>
          <Link to="/kalender">Viden & forskning</Link>
          <Link to="/aabningstider">Skole & institution</Link>
        </div>

        <div>
          <Link to="/">Nyt museum</Link>
          <Link to="/">Bæredygtighed</Link>
          <Link to="/">Webshop</Link>
          <Link to="/">Job</Link>
        </div>
      </nav>

      <div className={styles.contact}>
        <p>
          Tlf: 86 12 97 77<br />
          Telefontid er tirs-fre kl. 13:00-15:00
        </p>

        <a href="mailto:nm@nathist.dk">nm@nathist.dk</a>
      </div>

      <div className={styles.address}>
        <p>
          Naturhistorisk Museum Aarhus<br />
          Wilhelm Meyers Allé 10<br />
          8000 Aarhus C
        </p>

        <p className={styles.socials}>● ○</p>
      </div>
    </footer>
  );
}