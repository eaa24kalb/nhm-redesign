import { useState } from "react";
import styles from "./Header.module.css";
import NavOverlay from "./NavOverlay";
import logoWhite from "../assets/images/logo-white.svg";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <Link to="/" className={styles.logoLink}>
  <img src={logoWhite} alt="Naturhistorisk Museum Aarhus" />
</Link>

        <button
          className={styles.menuBtn}
          onClick={() => setOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <NavOverlay open={open} setOpen={setOpen} />
    </>
  );
}