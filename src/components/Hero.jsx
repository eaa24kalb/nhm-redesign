import { useState } from "react";
import styles from "./Hero.module.css";

export default function Hero({
  image,
  video,
  alt = "",
  title,
  subtitle,
  breadcrumb,
  children,
  height = "large",
  variant = "bottom",
}) {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section
      className={`${styles.hero} ${styles[height]} ${styles[variant]}`}
    >
      {video ? (
        <>
          <video src={video} autoPlay loop playsInline muted={isMuted} />

          <button
            className={styles.soundBtn}
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? "🔇" : "🔊"}
          </button>
        </>
      ) : (
        <img src={image} alt={alt} />
      )}

      <div className={styles.overlay}></div>

      <div className={styles.content}>
        {breadcrumb && <p className={styles.breadcrumb}>{breadcrumb}</p>}
        {title && <h1>{title}</h1>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}