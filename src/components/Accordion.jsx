import { useState } from "react";
import styles from "./Accordion.module.css";

export default function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordion}>
      <button onClick={() => setIsOpen(!isOpen)} className={styles.trigger}>
        <span>{title}</span>
        <span>{isOpen ? "−" : "⌄"}</span>
      </button>

      {isOpen && <div className={styles.content}>{children}</div>}
    </div>
  );
}