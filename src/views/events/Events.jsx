import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Events.module.css";

import calendarHero from "../../assets/images/cafe.jpg";
import paaske from "../../assets/images/paaske.jpg";
import watercolor from "../../assets/images/watercolor.jpg";
import ulv from "../../assets/images/ulv.jpg";
import readingclub from "../../assets/images/readingclub.jpg";
import hugorm from "../../assets/images/hugorm.jpg";
import nat from "../../assets/images/natpåmuseet.jpg";
import samlinger from "../../assets/images/samlinger.jpg";
import fossil from "../../assets/images/fossil.jpg";

const events = [
  {
    image: samlinger,
    date: "Mandag, 30. marts 2026",
    time: "kl. 11:30 - 13:30",
    categories: ["Påske", "Oplæg"],
    title: "Museets Magiske Samlinger",
    text: "Kom med bag kulisserne, når vi åbner op for museets skjulte samlinger.",
  },
  {
    image: fossil,
    date: "Tirsdag, 31. marts 2026",
    time: "kl. 11:00 - 11:30",
    categories: ["Påske", "Oplæg"],
    title: "Fossilers Fede Fodspor",
    text: "Verdens naturhistorie ligger gemt lige under vores fødder.",
  },
  {
    image: nat,
    date: "Onsdag, 1. april 2026",
    time: "fra kl. 16:30-22:00",
    categories: ["Påske", "Særlige oplevelser"],
    title: "Nat på museet i påskeferien",
    text: "Vær med, når vi finder lanterner frem og går på opdagelse hos de sovende dyr.",
  },
  {
    image: watercolor,
    date: "Onsdag, 8. april 2026",
    time: "kl. 19:00-21:00",
    categories: ["Workshop"],
    title: "Natural watercolor workshop - Mal fremtiden sammen",
    text: "Kom med til en kreativ og anderledes workshop i vores hyggelige museumscafé.",
  },
  {
    image: ulv,
    date: "Onsdag, 15. april 2026",
    time: "kl. 19:00-21:00",
    categories: ["Oplæg"],
    title: "Tæt på ulven – oplæg v. leder af den nationale ulveovervågning, Kent Olsen",
    text: "Hvad ved vi om den danske ulv? Hør mere om arten og arbejdet med overvågning.",
  },
  {
    image: readingclub,
    date: "Onsdag, 22. april 2026",
    time: "kl. 19:00-21:00",
    categories: ["Særlige oplevelser"],
    title: "Social Reading Club med live jazz",
    text: "Læs til sprøde jazztoner, når Social Reading Club afholder læsearrangement.",
  },
  {
    image: hugorm,
    date: "Onsdag, 29. april 2026",
    time: "kl. 19:00-20:30",
    categories: ["Oplæg"],
    title: "Hugormenes Hemmelige Verden",
    text: "Magnus tager os med på rejsen gennem slangernes evolution.",
  },
];

const filters = ["Alle", "Oplæg", "Særlige oplevelser", "Workshop", "Påske"];

export default function Events() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("Alle");

  const filteredEvents = events.filter((event) => {
    const matchesCategory =
      selectedFilter === "Alle" || event.categories.includes(selectedFilter);

    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.categories.join(" ").toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const showEasterFeature =
    (selectedFilter === "Alle" || selectedFilter === "Påske") &&
    searchTerm.trim() === "";

  return (
    <main className={styles.eventsPage}>
      <section className={styles.hero}>
        <img src={calendarHero} alt="Arrangement på Naturhistorisk Museum" />
        <div className={styles.heroContent}>
          <h1>Kalender</h1>
        </div>
      </section>

      <section className={styles.filterSection}>
        <button
          className={styles.filterToggle}
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          aria-expanded={isFilterOpen}
        >
          <span>Filter</span>
          <span>{isFilterOpen ? "−" : "+"}</span>
        </button>

        {isFilterOpen && (
          <div className={styles.filterPanel}>
            <label className={styles.searchLabel} htmlFor="event-search">
              Søg
            </label>

            <input
              id="event-search"
              className={styles.searchInput}
              type="text"
              placeholder="Søg efter arrangement"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <p className={styles.filterLabel}>Type</p>

            <div className={styles.filterGrid}>
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={`${styles.filterBtn} ${
                    selectedFilter === filter ? styles.active : ""
                  }`}
                  onClick={() => setSelectedFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        )}

        <p className={styles.resultText}>
          Viser <strong>{filteredEvents.length}</strong> arrangementer
          {selectedFilter !== "Alle" && (
            <>
              {" "}
              under <strong>{selectedFilter}</strong>
            </>
          )}
        </p>
      </section>

      {showEasterFeature && (
        <section className={styles.easterSection}>
          <h2>Påske på museet</h2>

          <Link to="/events/nat-paa-museet" className={styles.easterCard}>
            <img src={paaske} alt="" />
            <p>Oplev aktiviteter for hele familien</p>
          </Link>
        </section>
      )}

      <section className={styles.eventsList}>
        <h2>Kommende arrangementer</h2>

        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <Link
              to="/events/nat-paa-museet"
              className={styles.eventCard}
              key={event.title}
            >
              <p className={styles.date}>{event.date}</p>
              <p className={styles.time}>{event.time}</p>

              <img src={event.image} alt="" />

              <div className={styles.labels}>
                {event.categories.map((category) => (
                  <span key={category}>{category}</span>
                ))}
              </div>

              <h3>{event.title}</h3>
              <p className={styles.text}>{event.text}</p>
            </Link>
          ))
        ) : (
          <p className={styles.emptyState}>
            Der blev ikke fundet nogen arrangementer.
          </p>
        )}
      </section>
    </main>
  );
}