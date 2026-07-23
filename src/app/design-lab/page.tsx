import Link from "next/link";
import styles from "./design-lab.module.css";

type Activity = {
  eyebrow: string;
  title: string;
  meta: string;
  accent: string;
};

const activities: Activity[] = [
  {
    eyebrow: "I dag · Grünerløkka",
    title: "Keramikkverksted for små hender",
    meta: "4–8 år · 16:30 · 6 plasser igjen",
    accent: "Leire, farge og rolig mestring",
  },
  {
    eyebrow: "Lørdag · Tøyen",
    title: "Familielørdag i Botanisk hage",
    meta: "Alle aldre · Gratis · Utendørs",
    accent: "Oppdag naturen sammen",
  },
  {
    eyebrow: "Søndag · Sagene",
    title: "Miniorkester: prøv et instrument",
    meta: "6–10 år · 12:00 · Fra 120 kr",
    accent: "En myk introduksjon til musikk",
  },
];

function ActivityCards({ variant }: { variant: "editorial" | "atlas" | "journal" }) {
  return (
    <div className={styles.cardGrid}>
      {activities.map((activity, index) => (
        <article className={`${styles.activityCard} ${styles[variant]}`} key={activity.title}>
          <div className={styles.cardVisual} aria-hidden="true">
            <span>{String(index + 1).padStart(2, "0")}</span>
          </div>
          <div className={styles.cardBody}>
            <p className={styles.cardEyebrow}>{activity.eyebrow}</p>
            <h3>{activity.title}</h3>
            <p>{activity.meta}</p>
            <strong>{activity.accent}</strong>
          </div>
        </article>
      ))}
    </div>
  );
}

function SearchBar({ label }: { label: string }) {
  return (
    <div className={styles.searchBar} role="search" aria-label={label}>
      <span className={styles.searchIcon} aria-hidden="true">⌕</span>
      <span>Hva vil familien gjøre?</span>
      <button type="button">Oslo · denne helgen</button>
    </div>
  );
}

export default function DesignLabPage() {
  return (
    <main className={styles.lab}>
      <header className={styles.labHeader}>
        <div>
          <p>Huddle Design Lab · VIS-002 · Sprint D1</p>
          <h1>Tre retninger. Én tydelig Huddle-identitet.</h1>
        </div>
        <nav aria-label="Concept navigation">
          <a href="#concept-a">A — Editorial</a>
          <a href="#concept-b">B — Atlas</a>
          <a href="#concept-c">C — Journal</a>
        </nav>
      </header>

      <section className={`${styles.concept} ${styles.conceptA}`} id="concept-a">
        <div className={styles.conceptLabel}>
          <span>A</span>
          <p>Nordic Editorial</p>
        </div>
        <nav className={styles.siteNav} aria-label="Nordic Editorial preview navigation">
          <Link href="/design-lab">Huddle</Link>
          <div>
            <a href="#a-activities">Aktiviteter</a>
            <a href="#a-safety">Trygghet</a>
            <button type="button">For familier</button>
          </div>
        </nav>
        <div className={styles.editorialHero}>
          <div className={styles.editorialCopy}>
            <p className={styles.kicker}>Oslo, nærmere familien</p>
            <h2>Mer tid sammen.<br />Mindre tid på leting.</h2>
            <p className={styles.lead}>Huddle samler byens små opplevelser i ett rolig, tillitsfullt sted — kuratert for virkelige familiedager.</p>
            <SearchBar label="Søk etter aktiviteter" />
          </div>
          <div className={styles.editorialPoster} aria-label="Art direction placeholder">
            <div className={styles.posterShapeOne} />
            <div className={styles.posterShapeTwo} />
            <p>Oslo<br />med barn</p>
            <small>Utgave 01 · 2026</small>
          </div>
        </div>
        <div className={styles.sectionHeading} id="a-activities">
          <p>Denne uken</p>
          <h3>Små planer som kan bli store minner.</h3>
        </div>
        <ActivityCards variant="editorial" />
        <aside className={styles.safetyStrip} id="a-safety">
          <span>Trygghet er ikke et filter. Det er grunnlaget.</span>
          <p>Klare arrangørprofiler, aldersinformasjon og personvern som standard.</p>
        </aside>
      </section>

      <section className={`${styles.concept} ${styles.conceptB}`} id="concept-b">
        <div className={styles.conceptLabel}>
          <span>B</span>
          <p>Local Discovery Atlas</p>
        </div>
        <nav className={styles.siteNav} aria-label="Local Discovery Atlas preview navigation">
          <Link href="/design-lab">HUDDLE / OSLO</Link>
          <div>
            <a href="#b-map">Kart</a>
            <a href="#b-list">Liste</a>
            <button type="button">Min familie</button>
          </div>
        </nav>
        <div className={styles.atlasHero}>
          <div className={styles.atlasIntro}>
            <p className={styles.kicker}>Lokal familieguide · 59.91° N</p>
            <h2>Hva skjer<br />rundt dere?</h2>
            <SearchBar label="Utforsk Oslo" />
            <div className={styles.atlasStats}>
              <span><strong>126</strong> aktiviteter</span>
              <span><strong>34</strong> gratis i dag</span>
              <span><strong>12</strong> bydeler</span>
            </div>
          </div>
          <div className={styles.mapPanel} id="b-map" aria-label="Stylized Oslo activity map">
            <div className={styles.mapRoute} />
            <span className={styles.markerOne}>01</span>
            <span className={styles.markerTwo}>02</span>
            <span className={styles.markerThree}>03</span>
            <span className={styles.districtOne}>Sagene</span>
            <span className={styles.districtTwo}>Tøyen</span>
            <span className={styles.districtThree}>Grünerløkka</span>
          </div>
        </div>
        <div className={styles.atlasToolbar} id="b-list">
          <span>Viser 18 forslag for lørdag</span>
          <div><button type="button">Alder 4–8</button><button type="button">Gratis</button><button type="button">Nær meg</button></div>
        </div>
        <ActivityCards variant="atlas" />
      </section>

      <section className={`${styles.concept} ${styles.conceptC}`} id="concept-c">
        <div className={styles.conceptLabel}>
          <span>C</span>
          <p>Human Community Journal</p>
        </div>
        <nav className={styles.siteNav} aria-label="Human Community Journal preview navigation">
          <Link href="/design-lab">Huddle</Link>
          <div>
            <a href="#c-stories">Historier</a>
            <a href="#c-activities">Finn noe å gjøre</a>
            <button type="button">Bli med</button>
          </div>
        </nav>
        <div className={styles.journalHero}>
          <div className={styles.journalNote}>
            <span>En liten idé fra en stor by</span>
            <p>Familier trenger ikke flere apper. De trenger et sted som faktisk gjør hverdagen lettere.</p>
          </div>
          <div className={styles.journalCopy}>
            <p className={styles.kicker}>Et varmere lokalsamfunn, én plan av gangen</p>
            <h2>Finn folk, steder og øyeblikk som passer familien deres.</h2>
            <p className={styles.lead}>Fra spontane ettermiddager til planer for hele helgen — Huddle gjør lokale muligheter synlige, forståelige og trygge.</p>
            <SearchBar label="Finn lokale opplevelser" />
          </div>
          <div className={styles.journalPortrait} aria-hidden="true">
            <span>fellesskap</span>
          </div>
        </div>
        <blockquote className={styles.familyQuote} id="c-stories">
          “Vi fant et verksted fem minutter hjemmefra — og møtte en familie vi fortsatt treffer hver uke.”
          <cite>— Ingrid, mamma på Torshov</cite>
        </blockquote>
        <div id="c-activities"><ActivityCards variant="journal" /></div>
      </section>

      <footer className={styles.labFooter}>
        <div>
          <p>Dette er en designlab, ikke production UI.</p>
          <span>Ingen retning er godkjent før visuell gjennomgang.</span>
        </div>
        <a href="#top">Til toppen ↑</a>
      </footer>
    </main>
  );
}
