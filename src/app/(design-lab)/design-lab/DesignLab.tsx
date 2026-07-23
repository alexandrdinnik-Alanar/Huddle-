"use client";

import { useState } from "react";
import styles from "./design-lab.module.css";

type ConceptId = "editorial" | "atlas" | "journal";

type Concept = {
  id: ConceptId;
  label: string;
  title: string;
  summary: string;
};

const concepts: Concept[] = [
  {
    id: "editorial",
    label: "A",
    title: "Nordic Editorial",
    summary: "Quiet confidence, editorial typography and warm documentary rhythm.",
  },
  {
    id: "atlas",
    label: "B",
    title: "Local Discovery Atlas",
    summary: "The city becomes an explorable family map with precise, tactile navigation.",
  },
  {
    id: "journal",
    label: "C",
    title: "Human Community Journal",
    summary: "A warmer, story-led direction built around belonging and human detail.",
  },
];

const activities = [
  { day: "24", month: "AUG", title: "Forest workshop", meta: "Sognsvann · 6–10 years" },
  { day: "27", month: "AUG", title: "Clay after school", meta: "Sagene · 8–12 years" },
  { day: "31", month: "AUG", title: "Family harbour walk", meta: "Bjørvika · All ages" },
];

export function DesignLab() {
  const [activeConcept, setActiveConcept] = useState<ConceptId>("editorial");

  return (
    <main className={styles.labShell}>
      <header className={styles.labHeader}>
        <div>
          <p className={styles.labKicker}>Huddle / VIS-002 / Design Lab D1</p>
          <h1>Three coded art-direction territories</h1>
        </div>
        <div className={styles.labStatus}>
          <span className={styles.statusDot} aria-hidden="true" />
          Internal concept review · fictional content
        </div>
      </header>

      <nav className={styles.conceptTabs} aria-label="Choose an art-direction concept">
        {concepts.map((concept) => (
          <button
            className={`${styles.conceptTab} ${activeConcept === concept.id ? styles.conceptTabActive : ""}`}
            key={concept.id}
            onClick={() => setActiveConcept(concept.id)}
            type="button"
            aria-pressed={activeConcept === concept.id}
          >
            <span className={styles.conceptLetter}>{concept.label}</span>
            <span>
              <strong>{concept.title}</strong>
              <small>{concept.summary}</small>
            </span>
          </button>
        ))}
      </nav>

      <section className={styles.previewStage} aria-live="polite">
        {activeConcept === "editorial" ? <EditorialConcept /> : null}
        {activeConcept === "atlas" ? <AtlasConcept /> : null}
        {activeConcept === "journal" ? <JournalConcept /> : null}
      </section>

      <section className={styles.reviewGrid} id="concept-details">
        <article>
          <span>Review lens 01</span>
          <h2>Ownability</h2>
          <p>Does the direction feel recognizably Huddle rather than like a startup template?</p>
        </article>
        <article>
          <span>Review lens 02</span>
          <h2>Family trust</h2>
          <p>Does it feel safe, mature and warm without becoming childish or institutional?</p>
        </article>
        <article>
          <span>Review lens 03</span>
          <h2>Product range</h2>
          <p>Can the language stretch from public discovery to private family and admin tools?</p>
        </article>
        <article>
          <span>Review lens 04</span>
          <h2>Performance</h2>
          <p>Can the visual quality survive real content, mobile constraints and accessibility?</p>
        </article>
      </section>
    </main>
  );
}

function EditorialConcept() {
  return (
    <article className={`${styles.conceptCanvas} ${styles.editorialCanvas}`} aria-label="Nordic Editorial concept">
      <header className={styles.editorialNav}>
        <a className={styles.editorialWordmark} href="#concept-details">Huddle</a>
        <div className={styles.editorialLinks}>
          <a href="#editorial-discovery">Explore</a>
          <a href="#editorial-week">This week</a>
          <a href="#editorial-trust">For families</a>
        </div>
        <a className={styles.editorialAccount} href="#concept-details">My Huddle ↗</a>
      </header>

      <section className={styles.editorialHero}>
        <div className={styles.editorialIntro}>
          <p className={styles.editorialIndex}>OSLO FAMILY FIELD GUIDE / 01</p>
          <h2>A better week starts close to home.</h2>
          <p className={styles.editorialLead}>
            Thoughtful local activities, people and places — selected for real family life.
          </p>
          <div className={styles.editorialActions}>
            <a href="#editorial-discovery">Find something nearby</a>
            <span>Updated every Thursday</span>
          </div>
        </div>

        <div className={styles.editorialCollage} aria-label="Abstract family activity collage">
          <div className={styles.editorialPhotoPrimary}>
            <span>Sunday / Nordmarka</span>
            <strong>Outside is a good plan.</strong>
          </div>
          <div className={styles.editorialPhotoSecondary}>
            <span>After school</span>
          </div>
          <div className={styles.editorialNote}>
            <span>Editor’s note</span>
            <p>Choose one good thing. Leave room for the rest of the day.</p>
          </div>
          <span className={styles.editorialMark} aria-hidden="true">↘</span>
        </div>
      </section>

      <section className={styles.editorialDiscovery} id="editorial-discovery">
        <div>
          <p>What would make this week easier?</p>
          <h3>Discover by moment, not by menu.</h3>
        </div>
        <div className={styles.editorialSearch}>
          <label>
            <span>I’m looking for</span>
            <input aria-label="Activity type" defaultValue="Something creative" readOnly />
          </label>
          <label>
            <span>Near</span>
            <input aria-label="Location" defaultValue="Sagene, Oslo" readOnly />
          </label>
          <button type="button">Show 18 ideas</button>
        </div>
      </section>

      <section className={styles.editorialWeek} id="editorial-week">
        <div className={styles.sectionHeading}>
          <p>Three considered ideas</p>
          <h3>For the week ahead</h3>
        </div>
        <div className={styles.editorialCards}>
          {activities.map((activity, index) => (
            <article className={styles.editorialCard} key={activity.title}>
              <div className={`${styles.editorialCardImage} ${styles[`editorialImage${index + 1}`]}`} />
              <div className={styles.editorialCardBody}>
                <div className={styles.editorialDate}>
                  <strong>{activity.day}</strong>
                  <span>{activity.month}</span>
                </div>
                <div>
                  <h4>{activity.title}</h4>
                  <p>{activity.meta}</p>
                </div>
                <button aria-label={`Save ${activity.title}`} type="button">＋</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.editorialTrust} id="editorial-trust">
        <span className={styles.trustSeal}>H</span>
        <div>
          <p>Designed for family trust</p>
          <h3>Useful details before persuasive language.</h3>
        </div>
        <ul>
          <li>Clear organizer identity</li>
          <li>Age and accessibility details</li>
          <li>Privacy-aware family profiles</li>
        </ul>
      </section>
    </article>
  );
}

function AtlasConcept() {
  return (
    <article className={`${styles.conceptCanvas} ${styles.atlasCanvas}`} aria-label="Local Discovery Atlas concept">
      <header className={styles.atlasNav}>
        <a className={styles.atlasWordmark} href="#concept-details">HUDDLE°</a>
        <div className={styles.atlasCoordinates}>59.9139° N / 10.7522° E</div>
        <div className={styles.atlasLinks}>
          <a href="#atlas-map">Map</a>
          <a href="#atlas-list">List</a>
          <a href="#atlas-safety">Trust</a>
        </div>
        <a className={styles.atlasProfile} href="#concept-details">Family profile</a>
      </header>

      <section className={styles.atlasHero}>
        <div className={styles.atlasCopy}>
          <p className={styles.atlasSystemLabel}>LIVE FAMILY ATLAS / OSLO / V0.1</p>
          <h2>Your family’s Oslo, mapped.</h2>
          <p>Move from “what should we do?” to a clear local plan in minutes.</p>
          <div className={styles.atlasQuery}>
            <span>SEARCH MODE</span>
            <strong>Saturday · outdoors · ages 6–10</strong>
            <button type="button" aria-label="Run example search">→</button>
          </div>
        </div>

        <div className={styles.atlasMap} id="atlas-map">
          <div className={styles.atlasMapTopline}>
            <span>OSLO / FAMILY LAYER</span>
            <span>18 SIGNALS</span>
          </div>
          <svg viewBox="0 0 720 440" role="img" aria-label="Stylized map of local activity signals">
            <path className={styles.mapWater} d="M0 280C105 244 165 306 250 278C348 246 402 150 498 160C580 170 635 225 720 190V440H0Z" />
            <path className={styles.mapRoute} d="M35 175C170 98 255 205 346 154C435 103 510 62 680 105" />
            <path className={styles.mapRouteThin} d="M90 360C175 265 250 352 325 275C395 205 500 265 625 205" />
            <path className={styles.mapRouteThin} d="M170 30C205 115 176 201 255 236C333 270 405 218 495 338" />
            <circle className={styles.mapSignalPrimary} cx="346" cy="154" r="23" />
            <circle className={styles.mapSignal} cx="170" cy="115" r="12" />
            <circle className={styles.mapSignal} cx="515" cy="263" r="12" />
            <circle className={styles.mapSignal} cx="258" cy="322" r="12" />
            <circle className={styles.mapSignalMuted} cx="620" cy="112" r="9" />
          </svg>
          <div className={styles.atlasTooltip}>
            <span>04 / NORDMARKA</span>
            <strong>Forest workshop</strong>
            <small>24 Aug · 12 places · 24 min away</small>
          </div>
          <div className={styles.atlasLegend}>
            <span><i className={styles.legendLive} />Available</span>
            <span><i className={styles.legendSaved} />Saved</span>
            <span><i className={styles.legendCommunity} />Community-led</span>
          </div>
        </div>
      </section>

      <section className={styles.atlasMetrics}>
        <div><span>LOCAL RADIUS</span><strong>4.8 km</strong></div>
        <div><span>OPEN THIS WEEK</span><strong>18</strong></div>
        <div><span>LOW-COST OPTIONS</span><strong>11</strong></div>
        <div><span>WEATHER-FLEXIBLE</span><strong>07</strong></div>
      </section>

      <section className={styles.atlasList} id="atlas-list">
        <div className={styles.atlasListHeader}>
          <p>RECOMMENDED ROUTE / SATURDAY 24 AUG</p>
          <button type="button">Change filters ↗</button>
        </div>
        {activities.map((activity, index) => (
          <article className={styles.atlasRow} key={activity.title}>
            <span className={styles.atlasNumber}>0{index + 1}</span>
            <div className={`${styles.atlasThumbnail} ${styles[`atlasThumb${index + 1}`]}`} />
            <div className={styles.atlasActivityCopy}>
              <h3>{activity.title}</h3>
              <p>{activity.meta}</p>
            </div>
            <div className={styles.atlasTags}>
              <span>{index === 0 ? "OUTDOOR" : index === 1 ? "CREATIVE" : "TOGETHER"}</span>
              <span>{index === 2 ? "FREE" : "BOOKING"}</span>
            </div>
            <button className={styles.atlasArrow} type="button" aria-label={`Open ${activity.title}`}>↗</button>
          </article>
        ))}
      </section>

      <section className={styles.atlasSafety} id="atlas-safety">
        <div>
          <span>TRUST LAYER / ALWAYS ON</span>
          <h3>Every signal carries context.</h3>
        </div>
        <p>Organizer verification, age relevance, access details and reporting routes stay visible without making the experience feel clinical.</p>
        <span className={styles.atlasVerified}>VERIFIED / 03</span>
      </section>
    </article>
  );
}

function JournalConcept() {
  return (
    <article className={`${styles.conceptCanvas} ${styles.journalCanvas}`} aria-label="Human Community Journal concept">
      <header className={styles.journalNav}>
        <a className={styles.journalWordmark} href="#concept-details">Huddle</a>
        <p>Small circles make a city feel closer.</p>
        <div className={styles.journalLinks}>
          <a href="#journal-stories">Stories</a>
          <a href="#journal-today">Nearby today</a>
          <a href="#journal-safety">How trust works</a>
        </div>
        <a className={styles.journalJoin} href="#concept-details">Join your local circle</a>
      </header>

      <section className={styles.journalHero}>
        <div className={styles.journalHeading}>
          <span className={styles.journalIssue}>THE LOCAL ISSUE · NO. 01</span>
          <h2>Find the people and places that make a city feel smaller.</h2>
          <p>Huddle helps families discover what is happening nearby — and understand who is behind it.</p>
          <a href="#journal-today">Open today’s local page <span>→</span></a>
          <span className={styles.handwrittenOne}>made for real weeks</span>
        </div>

        <div className={styles.journalCollage}>
          <div className={styles.journalPortraitOne}><span>“We found our Saturday people.”</span></div>
          <div className={styles.journalPortraitTwo}><span>Oslo / 18:12</span></div>
          <div className={styles.journalPaperNote}>
            <strong>THIS WEEK’S SMALL WIN</strong>
            <p>A free activity within walking distance.</p>
          </div>
          <svg className={styles.journalScribble} viewBox="0 0 220 110" aria-hidden="true">
            <path d="M8 84C45 28 106 16 202 54" />
            <path d="M177 34L205 54L178 72" />
          </svg>
        </div>
      </section>

      <section className={styles.journalStories} id="journal-stories">
        <div className={styles.journalSectionTitle}>
          <span>PEOPLE, PLACES, POSSIBILITIES</span>
          <h3>A community guide, not a content feed.</h3>
        </div>
        <div className={styles.journalStoryGrid}>
          <article className={styles.journalStoryLarge}>
            <div className={styles.journalStoryImage} />
            <span>LOCAL STORY / SAGENE</span>
            <h4>The after-school room that stays open for the whole family.</h4>
            <p>Meet the people turning an unused workshop into a weekly creative ritual.</p>
          </article>
          <article className={styles.journalQuoteCard}>
            <span>NOTE FROM A PARENT</span>
            <blockquote>“The useful part was not more choice. It was knowing which choice would fit us.”</blockquote>
            <p>— Mari, Torshov</p>
          </article>
          <article className={styles.journalMiniCard}>
            <span>LOCAL PRACTICE</span>
            <h4>Ask before you add.</h4>
            <p>Family profiles should collect less, not more.</p>
          </article>
        </div>
      </section>

      <section className={styles.journalToday} id="journal-today">
        <div className={styles.journalTodayIntro}>
          <span>TODAY / WITHIN 30 MINUTES</span>
          <h3>Three good reasons to leave the house.</h3>
          <p>Curated around time, energy, age and distance.</p>
        </div>
        <div className={styles.journalActivityStack}>
          {activities.map((activity, index) => (
            <article className={styles.journalActivity} key={activity.title}>
              <div className={`${styles.journalActivityImage} ${styles[`journalImage${index + 1}`]}`}>
                <span>0{index + 1}</span>
              </div>
              <div>
                <span>{activity.day} {activity.month}</span>
                <h4>{activity.title}</h4>
                <p>{activity.meta}</p>
              </div>
              <button type="button">Keep this idea</button>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.journalSafety} id="journal-safety">
        <span className={styles.journalShield}>H</span>
        <div>
          <span>A QUIET PROMISE</span>
          <h3>Trust is designed into the details.</h3>
        </div>
        <p>Clear identities, understandable privacy choices, visible reporting paths and no pressure to overshare family information.</p>
        <span className={styles.handwrittenTwo}>safe can still feel human</span>
      </section>
    </article>
  );
}
