import { useState } from "react";
import styles from "./Header.module.css";
import NavOverlay from "./NavOverlay";
import logoWhite from "../assets/images/logo-white.svg";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <a href="/" className={styles.logoLink}>
          <img src={logoWhite} alt="Naturhistorisk Museum Aarhus" />
        </a>

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