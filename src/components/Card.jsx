import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card({ image, title, text, label, to }) {
  return (
    <Link to={to} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt="" className={styles.image} />
        {label && <span className={styles.label}>{label}</span>}
      </div>

      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </Link>
  );
}