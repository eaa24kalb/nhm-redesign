import styles from "./OpeningHours.module.css";
import Hero from "../../components/Hero";
import Accordion from "../../components/Accordion";
import heroImage from "../../assets/images/indgang.jpg";

const hours = [
  ["Mandag", "Lukket"],
  ["Tirsdag", "09:00 - 16:00"],
  ["Onsdag", "09:00 - 21:00"],
  ["Torsdag", "09:00 - 16:00"],
  ["Fredag", "09:00 - 16:00"],
  ["Lørdag", "09:00 - 16:00"],
  ["Søndag", "09:00 - 16:00"],
];

export default function OpeningHours() {
  return (
    <main className={styles.openingPage}>
      <Hero
        image={heroImage}
        alt="Indgangen til Naturhistorisk Museum Aarhus"
        title={
          <>
            Åbningstider
            <br />& information
          </>
        }
        height="large"
        variant="bottom"
      />
      <section className={styles.content}>
        <section className={styles.section}>
          <h2>Åbningstider</h2>

          <div className={styles.hoursTable}>
            {hours.map(([day, time]) => (
              <div className={styles.hourRow} key={day}>
                <span>{day}</span>
                <span>{time}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Billetter</h2>

          <p>
            Du kan købe billetter både online eller i museets billetsalg. Børn
            og unge under 18 år har fri entré til museet.
          </p>

          <div className={styles.priceList}>
            <div>
              <span>Voksne (+18 år)</span>
              <span>150 kr.</span>
            </div>
            <div>
              <span>Studerende*</span>
              <span>90 kr.</span>
            </div>
            <div>
              <span>Grupper +10 personer</span>
              <span>130 kr. pr. person</span>
            </div>
          </div>

          <Accordion title="*Studerende">
            Studerende skal kunne fremvise gyldigt studiekort.
          </Accordion>

          <Accordion title="Rabatter">
            Årskort, samarbejdsaftaler og andre rabatter kan gælde ved køb i
            billetsalget.
          </Accordion>

          <Accordion title="Fri entré">
            Børn og unge under 18 år har fri entré til museet.
          </Accordion>

          <Accordion title="Besøg i forbindelse med undervisning">
            Skoler og institutioner kan booke undervisningsforløb gennem museets
            skoletjeneste.
          </Accordion>
        </section>

        <section className={styles.section}>
          <h2>Årskort</h2>

          <p>
            Med et årskort får du fri adgang til museets udstillinger i 12
            måneder fra udstedelsesdatoen.
          </p>

          <p>
            Fornyelse kan kun ske ved personligt fremmøde på museet.
          </p>

          <div className={styles.priceList}>
            <div>
              <span>Årskort SOLO (kortholder)</span>
              <span>295 kr.</span>
            </div>
            <div>
              <span>Årskort PLUS (kortholder + 1)</span>
              <span>395 kr.</span>
            </div>
            <div>
              <span>Årskort Studerende</span>
              <span>165 kr.</span>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Find vej</h2>

          <p>
            Naturhistorisk Museum Aarhus ligger flot lige ved søen i
            Universitetsparken på Wilhelm Meyers Allé 10.
          </p>

          <Accordion title="Med bil">
            Der er parkeringsmuligheder i området omkring Universitetsparken.
          </Accordion>

          <Accordion title="Med offentlig transport">
            Museet kan nås med bus til Universitetsparken og nærliggende stop.
          </Accordion>

          <Accordion title="Parkering">
            Vær opmærksom på lokale parkeringsregler i området.
          </Accordion>
        </section>

        <section className={styles.section}>
          <h2>Tilgængelighed</h2>

          <Accordion title="Kørestol og barnevogn">
            Museet kan besøges med kørestol og barnevogn.
          </Accordion>

          <Accordion title="Elevator">
            Der er adgang til elevator ved behov.
          </Accordion>

          <Accordion title="Ledsagerkort">
            Ledsagere kan få adgang efter gældende regler.
          </Accordion>

          <Accordion title="Pusleplads og handicaptoilet">
            Der findes pusleplads og handicaptoilet på museet.
          </Accordion>
        </section>

        <section className={styles.section}>
          <h2>Ofte stillede spørgsmål</h2>

          <Accordion title="Kan vi besøge shoppen og caféen uden billet?">
            Ja, både shop og café kan besøges uden billet til museet.
          </Accordion>

          <Accordion title="Har I en garderobe?">
            Ja, der er mulighed for at hænge overtøj.
          </Accordion>

          <Accordion title="Må vi have hund med?">
            Servicehunde er velkomne. Kontakt museet ved særlige behov.
          </Accordion>
        </section>
      </section>
    </main>
  );
}