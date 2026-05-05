import { useState } from "react";
import styles from "./EventDetail.module.css";
import Hero from "../../components/Hero";
import natVideo from "../../assets/images/NatPåMuseet.mov";

export default function EventDetail() {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <main className={styles.eventDetail}>
      <Hero
        video={natVideo}
        breadcrumb="Kalender > Påskeferie > Særlige oplevelser"
        title={
          <>
            Nat på Museet
            <br />i påskeferien
          </>
        }
        subtitle="Onsdag d. 1/4, fra kl. 15:30-20:00"
        height="large"
      />

      <section className={styles.content}>
        <h2>Traditionen tro holder vi Nat på Museet i påskeferien 🦉</h2>

        <p className={styles.lead}>
          Vær med når vi finder lanterner og lommelygter frem, og går på
          opdagelse hos de sovende dyr i ‘Den Globale Baghave’. I nattens mulm
          og mørke skal vi lære mere om dyrene, hvem de er, hvordan de lever og
          hvad de spiser
        </p>

        <p>
          Det bliver sjovt og spændende - og måske en smule uhyggeligt 👀
          <br />
          <br />
          <em>Derfor opfordrer vi til, at børn under 12 år kommer i følgeskab med en voksen.</em>
          <br />
          <br />
          Der skal bookes billet til alle fremmødte både børn og voksne.
        </p>

        <p>
          Der kan bookes billet til følgende tider:
          <br />
          15.30 - 16.00
          <br />
          16.30 - 17.00
          <br />
          17.30 - 18.00
          <br />
          18.30 - 19.00
          <br />
          19.30 - 20.00
        </p>

        <p>
          <strong>BEMÆRK:</strong> Denne billet er eksklusiv entré til museet.
          Børn og unge under 18 år har fri entré til resten af museet. Voksne
          skal tilkøbe entrébillet ved ankomst.
        </p>

        <p>
          Tjek hele påskeferie-programmet her:
          <br />
          <a href="#">https://fb.me/e/6s3KDPtVk</a>
        </p>

        <hr />

{/* info list */}
        <div className={styles.infoList}>
          <div>
            <h3>Start</h3>
            <p>Onsdag d. 1/4, fra kl. 15:30-20:00</p>
          </div>

          <div>
            <h3>Sted</h3>
            <p>
              Den Globale Baghave,
              <br />
              Naturhistorisk Museum i Aarhus,
              <br />
              Wilhelm Meyers Allé 10 (Universitetsparken)
              <br />
              8000 Aarhus C
            </p>
          </div>

          <div>
            <h3>Pris</h3>
            <p>DDK 50,00</p>
          </div>

          <div>
            <h3>Arrangør</h3>
            <p>Naturhistorisk Museum Aarhus</p>
          </div>
        </div>

{/* knapper */}
        <button
          className={`${styles.calendarBtn} outlineBtn`}
          onClick={() => setShowCalendar(true)}
        >
          Føj til kalender
        </button>

        <button className={`${styles.ticketBtn} filledBtn`}>Køb Billet</button>
      </section>

      {/* MODAL */}
      {showCalendar && (
        <div
          className={styles.modalOverlay}
          onClick={() => setShowCalendar(false)}
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Føj til kalender</h3>

            <a href="#" className={styles.calendarOption}>
              Google Kalender
            </a>
            <a href="#" className={styles.calendarOption}>
              Apple Kalender
            </a>
            <a href="#" className={styles.calendarOption}>
              Outlook
            </a>

            <button
              className={styles.closeBtn}
              onClick={() => setShowCalendar(false)}
            >
              Luk
            </button>
          </div>
        </div>
      )}
    </main>
  );
}