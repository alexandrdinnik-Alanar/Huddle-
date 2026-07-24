import Image from "next/image";
import styles from "./system-lab.module.css";

const palette = [
  { name: "Warm canvas", value: "#F6F0E8", role: "Locked background", tone: "cream" },
  { name: "Elevated surface", value: "#FFFFFF", role: "Locked surface", tone: "white" },
  { name: "Copper identity", value: "#BC7A45", role: "Observed visual candidate", tone: "copper" },
  { name: "Copper action", value: "#9E5A2C", role: "Observed action candidate", tone: "action" },
  { name: "Calm olive", value: "#6E7459", role: "Observed supportive candidate", tone: "olive" },
  { name: "Graphite text", value: "#3A342C", role: "Observed strong text", tone: "graphite" },
  { name: "Soft border", value: "#EFE4D4", role: "Observed divider candidate", tone: "border" },
  { name: "Dark shell", value: "≈ #2D3D26", role: "Observed / unresolved", tone: "dark" },
] as const;

const statuses = [
  { label: "Published", kind: "success" },
  { label: "Needs review", kind: "warning" },
  { label: "Draft", kind: "neutral" },
  { label: "Action required", kind: "danger" },
] as const;

const navItems = ["Overview", "Activities", "Marketplace", "Messages", "Family"];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className={styles.sectionHeading}>
      <p>{eyebrow}</p>
      <div>
        <h2>{title}</h2>
        <span>{description}</span>
      </div>
    </div>
  );
}

function IconMark({ label }: { label: string }) {
  return (
    <span className={styles.iconMark} aria-hidden="true">
      {label.slice(0, 1)}
    </span>
  );
}

export default function SystemLabPage() {
  return (
    <main className={styles.lab}>
      <header className={styles.labStatus}>
        <div>
          <span className={styles.statusDot} aria-hidden="true" />
          <strong>VIS-002 System Lab</strong>
          <span>Source-derived · non-production</span>
        </div>
        <p>315 prototype records · 234 deduplicated HTML groups · 100-screen delta</p>
      </header>

      <section className={styles.hero}>
        <nav className={styles.publicNav} aria-label="System Lab public navigation example">
          <Image
            src="/brand/huddle-family-logo.png"
            alt="Huddle Family"
            width={154}
            height={62}
            className={styles.logo}
            priority
          />
          <div className={styles.publicLinks}>
            <a href="#foundation">Discover</a>
            <a href="#components">Community</a>
            <a href="#shells">For organizers</a>
          </div>
          <div className={styles.navActions}>
            <button className={styles.iconButton} type="button" aria-label="Search">
              ⌕
            </button>
            <button className={styles.ghostButton} type="button">
              Sign in
            </button>
            <button className={styles.primaryButton} type="button">
              Join Huddle
            </button>
          </div>
        </nav>

        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Existing Huddle platform system</p>
            <h1>One visual language for the complete family platform.</h1>
            <p>
              This lab reconstructs the recurring design rules already present across public discovery,
              family accounts, marketplace, organizer tools, municipality, services and administration.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#foundation">
                Review foundation
              </a>
              <a className={styles.textLink} href="#shells">
                Compare platform shells →
              </a>
            </div>
            <dl className={styles.evidenceStats}>
              <div>
                <dt>232</dt>
                <dd>Hanken Grotesk files</dd>
              </div>
              <div>
                <dt>229</dt>
                <dd>Newsreader imports</dd>
              </div>
              <div>
                <dt>148</dt>
                <dd>AppHeader references</dd>
              </div>
            </dl>
          </div>

          <aside className={styles.governanceCard}>
            <div className={styles.governanceTop}>
              <span>Decision DSD-001</span>
              <strong>Open</strong>
            </div>
            <h2>Dark shell evidence</h2>
            <p>
              Dark olive navigation appears repeatedly in the supplemental screens, while the locked brand
              document currently restricts deep-green surfaces.
            </p>
            <div className={styles.shellComparison}>
              <div className={styles.lockedSample}>
                <span>Locked light system</span>
              </div>
              <div className={styles.observedSample}>
                <span>Observed dark shell</span>
              </div>
            </div>
            <small>Both are shown for governance review. Neither is silently discarded.</small>
          </aside>
        </div>
      </section>

      <section className={styles.section} id="foundation">
        <SectionHeading
          eyebrow="01 · Foundation"
          title="Source-derived tokens, reduced to usable roles."
          description="Repeated values are grouped into candidate roles instead of copied as hundreds of unrelated CSS declarations."
        />

        <div className={styles.paletteGrid}>
          {palette.map((item) => (
            <article className={styles.swatchCard} key={item.name}>
              <div className={`${styles.swatch} ${styles[item.tone]}`} />
              <div>
                <strong>{item.name}</strong>
                <code>{item.value}</code>
                <span>{item.role}</span>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.foundationGrid}>
          <article className={styles.typeSpecimen}>
            <p className={styles.cardLabel}>Typography candidate</p>
            <h3>Families live better when the tools feel calm.</h3>
            <p>
              Hanken Grotesk carries compact product information. Newsreader gives public stories and section
              headings a warm editorial voice without turning the platform into a magazine.
            </p>
            <div className={styles.typeRows}>
              <span><b>Display</b> Newsreader · 48 / 52</span>
              <span><b>Section</b> Newsreader · 30 / 34</span>
              <span><b>Interface</b> Hanken Grotesk · 14 / 20</span>
              <span><b>Metadata</b> Hanken Grotesk · 12 / 16</span>
            </div>
          </article>

          <article className={styles.scaleCard}>
            <p className={styles.cardLabel}>Geometry and elevation</p>
            <div className={styles.radiusRow}>
              <span className={styles.radiusSm}>8</span>
              <span className={styles.radiusMd}>12</span>
              <span className={styles.radiusLg}>16</span>
              <span className={styles.radiusXl}>24</span>
              <span className={styles.radiusPill}>Pill</span>
            </div>
            <div className={styles.shadowRow}>
              <div>Low</div>
              <div>Medium</div>
              <div>Action</div>
            </div>
            <p className={styles.scaleNote}>
              The source uses many intermediate steps. The production scale should stay compact and semantic.
            </p>
          </article>
        </div>
      </section>

      <section className={`${styles.section} ${styles.softSection}`} id="components">
        <SectionHeading
          eyebrow="02 · Shared components"
          title="The same family of controls across every product area."
          description="These examples reproduce recurring shapes, density and hierarchy while replacing prototype pseudo-markup with semantic controls."
        />

        <div className={styles.componentGrid}>
          <article className={styles.componentPanel}>
            <p className={styles.cardLabel}>Actions</p>
            <div className={styles.buttonStack}>
              <button className={styles.primaryButton} type="button">Primary action</button>
              <button className={styles.secondaryButton} type="button">Secondary action</button>
              <button className={styles.outlineButton} type="button">Outline action</button>
              <button className={styles.dangerButton} type="button">Destructive action</button>
              <button className={styles.primaryButton} type="button" disabled>Disabled action</button>
            </div>
          </article>

          <article className={styles.componentPanel}>
            <p className={styles.cardLabel}>Fields and search</p>
            <label className={styles.field}>
              <span>Search activities</span>
              <div className={styles.inputShell}>
                <span aria-hidden="true">⌕</span>
                <input type="search" placeholder="Try swimming, music or outdoors" />
              </div>
              <small>Use location, age and date filters to narrow the results.</small>
            </label>
            <label className={styles.field}>
              <span>Neighbourhood</span>
              <select defaultValue="grunerlokka">
                <option value="grunerlokka">Grünerløkka</option>
                <option value="sagene">Sagene</option>
                <option value="toyen">Tøyen</option>
              </select>
            </label>
          </article>

          <article className={styles.componentPanel}>
            <p className={styles.cardLabel}>Status language</p>
            <div className={styles.statusGrid}>
              {statuses.map((status) => (
                <span className={`${styles.statusChip} ${styles[status.kind]}`} key={status.label}>
                  {status.label}
                </span>
              ))}
            </div>
            <div className={styles.notice}>
              <strong>Privacy by default</strong>
              <p>Family details stay limited until both sides choose to connect.</p>
            </div>
          </article>
        </div>

        <div className={styles.cardExamples}>
          <article className={styles.activityCard}>
            <div className={styles.activityMedia}>
              <span>Saturday · Tøyen</span>
              <button type="button" aria-label="Save family garden workshop">♡</button>
            </div>
            <div className={styles.activityBody}>
              <p>4–8 years · Free</p>
              <h3>Family garden workshop</h3>
              <span>Botanical Garden · 11:00</span>
              <div>
                <strong>12 places left</strong>
                <a href="#shells">View details →</a>
              </div>
            </div>
          </article>

          <article className={styles.listingCard}>
            <div className={styles.listingMedia}><span>Pre-loved</span></div>
            <div className={styles.listingBody}>
              <p>Grünerløkka · Excellent condition</p>
              <h3>Stokke Tripp Trapp chair</h3>
              <div><strong>1 200 NOK</strong><span>Pickup nearby</span></div>
            </div>
          </article>

          <article className={styles.familyCard}>
            <div className={styles.avatarCluster}>
              <span>M</span><span>S</span><span>+2</span>
            </div>
            <p>Family match · 1.4 km away</p>
            <h3>Maja &amp; Sondre</h3>
            <span>Outdoor play · Music · Ages 3–6</span>
            <button className={styles.outlineButton} type="button">View privacy-safe profile</button>
          </article>
        </div>
      </section>

      <section className={styles.section} id="shells">
        <SectionHeading
          eyebrow="03 · Platform shells"
          title="One system, adapted to public, family and operational work."
          description="The structure changes with the job, while typography, surfaces, controls and status language remain related."
        />

        <div className={styles.shellGrid}>
          <article className={styles.appShell}>
            <header className={styles.appTopbar}>
              <Image src="/brand/huddle-family-logo.png" alt="Huddle Family" width={112} height={45} />
              <div><span>Oslo</span><button type="button">Emma ▾</button></div>
            </header>
            <div className={styles.appBody}>
              <aside>
                {navItems.map((item, index) => (
                  <button className={index === 0 ? styles.activeNav : undefined} type="button" key={item}>
                    <IconMark label={item} />
                    {item}
                  </button>
                ))}
              </aside>
              <div className={styles.dashboardContent}>
                <p className={styles.cardLabel}>Family overview</p>
                <h3>Good afternoon, Emma.</h3>
                <div className={styles.metricGrid}>
                  <div><strong>3</strong><span>Saved plans</span></div>
                  <div><strong>2</strong><span>Upcoming events</span></div>
                  <div><strong>4</strong><span>New messages</span></div>
                </div>
                <div className={styles.timelineRow}>
                  <span>18:00</span>
                  <div><strong>Mini orchestra</strong><small>Sagene community house</small></div>
                  <span className={`${styles.statusChip} ${styles.success}`}>Confirmed</span>
                </div>
              </div>
            </div>
            <nav className={styles.mobileDock} aria-label="Mobile app navigation example">
              {navItems.slice(0, 4).map((item, index) => (
                <button className={index === 0 ? styles.mobileActive : undefined} type="button" key={item}>
                  <IconMark label={item} /><span>{item}</span>
                </button>
              ))}
            </nav>
          </article>

          <article className={styles.adminShell}>
            <aside className={styles.adminSidebar}>
              <div className={styles.adminBrand}>Huddle <span>Admin</span></div>
              <button className={styles.adminActive} type="button">Overview</button>
              <button type="button">Moderation</button>
              <button type="button">Organizations</button>
              <button type="button">Privacy</button>
              <button type="button">Audit log</button>
            </aside>
            <div className={styles.adminContent}>
              <header><div><p>Trust &amp; safety</p><h3>Moderation queue</h3></div><button className={styles.outlineButton} type="button">Export</button></header>
              <div className={styles.tableHeader}><span>Case</span><span>Area</span><span>Risk</span><span>Status</span></div>
              {[
                ["REP-1842", "Marketplace", "Medium", "Needs review"],
                ["ORG-051", "Organizer", "Low", "Pending"],
                ["PRV-229", "Privacy", "High", "Action required"],
              ].map((row) => (
                <div className={styles.tableRow} key={row[0]}>
                  <strong>{row[0]}</strong><span>{row[1]}</span><span>{row[2]}</span><span>{row[3]}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <footer className={styles.labFooter}>
        <div>
          <strong>System Lab · not production UI</strong>
          <span>Built from the reconciled Huddle corpus. Approval and Figma governance are still required.</span>
        </div>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
