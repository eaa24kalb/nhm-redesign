import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Card from "../../components/Card";

import heroHome from "../../assets/images/hero-home.jpg";
import paaske from "../../assets/images/paaske.jpg";
import afterglow from "../../assets/images/afterglow.jpg";
import vr from "../../assets/images/VR.jpg";
import watercolor from "../../assets/images/watercolor.jpg";
import ulv from "../../assets/images/ulv.jpg";
import readingclub from "../../assets/images/readingclub.jpg";
import hugorm from "../../assets/images/hugorm.jpg";
import cafe from "../../assets/images/cafe.jpg";
import butik from "../../assets/images/butik.jpg";
import have from "../../assets/images/have.jpg";


const experienceCards = [
  {
    image: paaske,
    label: "Aktuelt",
    title: "Påskeferie - Tag familien med til Grønland 🐋",
    text: "Vi skruer mod nord og lærer om de spændende og hårdføre arktiske dyr.",
  },
  {
    image: vr,
    label: "Nyhed!",
    title: "Ny triceratops i VR 🦖🦖",
    text: "Stå ansigt til ansigt med en triceratops i museets VR-oplevelse.",
  },
  {
    image: cafe,
    title: "Museumscaféen",
    text: "Tag en pause med kaffe, frokost eller studiearbejde i rolige omgivelser.",
  },
  {
    image: butik,
    title: "Museumsbutikken",
    text: "Find bøger, naturfund, legetøj og gaver med naturen som inspiration.",
  },
  {
    image: have,
    title: "Museumshaven",
    text: "Et grønt åndehul midt i Universitetsparken.",
  },
];

const events = [
  {
    image: watercolor,
    date: "Onsdag, 8. april 2026",
    time: "kl. 19:00-21:00",
    label: "Workshop",
    title: "Natural watercolor workshop - Mal fremtiden sammen",
    text: "Kom med til en kreativ workshop i vores hyggelige museumscafé.",
  },
  {
    image: ulv,
    date: "Onsdag, 15. april 2026",
    time: "kl. 19:00-21:00",
    label: "Oplæg",
    title: "Tæt på ulven – oplæg v. leder af den nationale ulveovervågning",
    text: "Hvad ved vi om den danske ulv? Hør meget mere om arten og arbejdet med overvågning.",
  },
  {
    image: readingclub,
    date: "Onsdag, 22. april 2026",
    time: "kl. 19:00-21:00",
    label: "Særlige oplevelser",
    title: "Social Reading Club med live jazz",
    text: "Læs til sprøde jazztoner, når Social Reading Club afholder læsearrangement.",
  },
  {
    image: hugorm,
    date: "Onsdag, 29. april 2026",
    time: "kl. 19:00-20:30",
    label: "Oplæg",
    title: "Hugormenes Hemmelige Verden",
    text: "Magnus tager os med på rejsen gennem slangernes evolution.",
  },
];

export default function Home() {
  return (
   <main className={styles.home}>

    {/* Hero */}
  <section className={styles.hero}>
    <img src={heroHome} alt="Barn på Naturhistorisk Museum Aarhus" />

    <div className={styles.heroContent}>
      <i>Oplev naturens fortællinger</i>

      <span className={styles.openToday}>
        <span className={styles.pulseDot}></span>
        Åben i dag: 9:00 - 16:00
      </span>

      <Link to="/aabningstider" className={`${styles.heroBtn} filledBtn`}>
        Køb billet i dag
      </Link>
    </div>
  </section>

      {/* Oplev museet */}
      <section className={styles.section}>
        <h2>Oplev museet</h2>

        <div className={styles.horizontalScroll}>
          {experienceCards.map((card) => (
            <Card
              key={card.title}
              image={card.image}
              label={card.label}
              title={card.title}
              text={card.text}
              to="/kalender"
            />
          ))}
        </div>
      </section>

      {/* Nyhed */}
      <section className={styles.newsSection}>
        <p className={styles.kicker}>Kommer snart</p>

        <article className={styles.newsCard}>
          <span className={styles.badge}>Nyhed!</span>

          <img src={afterglow} alt="" />

          <h2>Afterglow</h2>

          <p>
            Kom med til åbningen af særudstillingen, hvor kunsten møder naturen.
          </p>

          <Link to="/kalender" className={`${styles.outlineBtn} outlineBtn`}>
            Læs mere
          </Link>
        </article>
      </section>

      {/* Kalender */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Kalender</h2>

          <Link to="/kalender" className={`${styles.smallBtn} outlineBtn`}>
            Se alle
          </Link>
        </div>

        <div className={styles.eventList}>
          {events.map((event) => (
            <Link
              to="/events/nat-paa-museet"
              className={styles.eventCard}
              key={event.title}
            >
              <p className={styles.date}>{event.date}</p>
              <p className={styles.time}>{event.time}</p>

              <img src={event.image} alt="" />

              <span className={styles.label}>{event.label}</span>

              <h3>{event.title}</h3>
              <p>{event.text}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}