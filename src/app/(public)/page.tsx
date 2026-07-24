import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.css";

export const metadata: Metadata = {
  title: "Huddle — Family life, stronger together",
  description:
    "Plan family days, discover local activities, join trusted communities and find services near you.",
};

const activityCards = [
  {
    title: "Art & Imagination",
    note: "Creative classes for every age",
    count: "12 activities",
    image:
      "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=1400&q=88",
    className: "activityLead",
  },
  {
    title: "Outdoor Adventures",
    note: "Explore, play, grow",
    count: "18 activities",
    image:
      "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1200&q=88",
    className: "activityWide",
  },
  {
    title: "Movement & Sport",
    note: "Let’s get moving",
    count: "14 activities",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=88",
    className: "activitySmall",
  },
  {
    title: "Music & Dance",
    note: "Feel the rhythm",
    count: "11 activities",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=88",
    className: "activitySmall",
  },
] as const;

const communityCards = [
  {
    title: "Coffee & Connection",
    meta: "Oslo · 40 members",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=88",
  },
  {
    title: "Dads Outdoors",
    meta: "Oslo · 36 members",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=88",
  },
  {
    title: "Mindful Mamas",
    meta: "Oslo · 27 members",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=88",
  },
  {
    title: "Family Book Club",
    meta: "Oslo · 22 members",
    image:
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1000&q=88",
  },
] as const;

const serviceCards = [
  {
    title: "Childcare & Preschool",
    image:
      "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=1100&q=88",
    className: "serviceTall",
  },
  {
    title: "Wellbeing & Therapy",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1100&q=88",
    className: "serviceTall",
  },
  {
    title: "Tutoring & Learning",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=88",
    className: "serviceCompact",
  },
  {
    title: "Party & Event Planning",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1000&q=88",
    className: "serviceCompact",
  },
] as const;

const products = [
  {
    title: "Wooden Balance Bike",
    price: "1 499 NOK",
    image:
      "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=900&q=88",
  },
  {
    title: "Kids Daypack",
    price: "499 NOK",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=88",
  },
  {
    title: "Wooden Blocks Set",
    price: "349 NOK",
    image:
      "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=900&q=88",
  },
  {
    title: "Insulated Bottle",
    price: "299 NOK",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=88",
  },
] as const;

function photoStyle(url: string, overlay = true): CSSProperties {
  return {
    backgroundImage: overlay
      ? `linear-gradient(180deg, rgba(98, 85, 77, 0.02), rgba(98, 85, 77, 0.54)), url("${url}")`
      : `url("${url}")`,
  };
}

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

function PillLink({
  href,
  children,
  tone = "copper",
}: {
  href: string;
  children: ReactNode;
  tone?: "copper" | "light" | "olive";
}) {
  return (
    <Link className={`${styles.pillLink} ${styles[`pill${tone}`]}`} href={href}>
      <span>{children}</span>
      <Arrow />
    </Link>
  );
}

function PhotoCard({
  title,
  note,
  count,
  image,
  className,
}: (typeof activityCards)[number]) {
  return (
    <article className={`${styles.photoCard} ${styles[className]}`} style={photoStyle(image)}>
      <div>
        <h3>{title}</h3>
        <p>{note}</p>
        <span>{count}</span>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <main className={styles.page}>
      <div className={styles.utilityBar}>
        <span>Built for real families. Trusted by 10,000+ parents.</span>
        <span>The Huddle App</span>
      </div>

      <header className={styles.header}>
        <Link className={styles.brand} href="/" aria-label="Huddle home">
          <Image
            src="/brand/huddle-family-logo.png"
            alt="Huddle"
            width={2048}
            height={782}
            priority
          />
        </Link>
        <nav className={styles.primaryNav} aria-label="Primary navigation">
          <Link href="/activities">Discover</Link>
          <Link href="/app/calendar">Plan your day</Link>
          <Link href="/community">Community</Link>
          <Link href="/services">Services</Link>
          <Link href="/marketplace">Marketplace</Link>
        </nav>
        <div className={styles.headerActions}>
          <Link className={styles.searchAction} href="/search" aria-label="Search Huddle">
            Search
          </Link>
          <Link className={styles.iconAction} href="/login" aria-label="Sign in">
            ◎
          </Link>
          <Link className={styles.iconAction} href="/app/saved" aria-label="Saved items">
            ♡
          </Link>
        </div>
      </header>

      <section className={styles.hero}>
        <div
          className={styles.heroPhoto}
          style={photoStyle(
            "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=2200&q=92",
            false,
          )}
        />
        <div className={styles.heroWash} />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Real family life, thoughtfully connected</p>
          <h1>
            Real family life.
            <em>Stronger together.</em>
          </h1>
          <p className={styles.heroLead}>
            Activities, events, community and trusted services that help your family grow, learn and
            thrive.
          </p>
          <div className={styles.heroActions}>
            <PillLink href="/app/calendar">Plan your day</PillLink>
            <PillLink href="/activities" tone="light">
              Explore near you
            </PillLink>
          </div>
        </div>

        <article className={styles.heroPlan}>
          <div className={styles.cardKicker}>Today’s plan</div>
          <ol>
            <li>
              <time>10:00</time>
              <span>
                <strong>Baby Yoga</strong>
                <small>Oslo · 0–12 months</small>
              </span>
            </li>
            <li>
              <time>13:00</time>
              <span>
                <strong>Creative Workshop</strong>
                <small>Oslo · 3–6 years</small>
              </span>
            </li>
            <li>
              <time>16:00</time>
              <span>
                <strong>Nature Walk</strong>
                <small>Frognerparken</small>
              </span>
            </li>
          </ol>
          <Link href="/app/calendar">
            View full day <Arrow />
          </Link>
        </article>

        <article className={styles.localPick}>
          <div
            className={styles.localPhoto}
            style={photoStyle(
              "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=88",
              false,
            )}
          />
          <div>
            <span>Local pick</span>
            <strong>Spring Family Market</strong>
            <small>This Saturday · Aker Brygge</small>
          </div>
        </article>

        <div className={styles.heroCurve} />
      </section>

      <section className={styles.trustRibbon} aria-label="Huddle values">
        <article>
          <span>◇</span>
          <div>
            <strong>Safe & trusted</strong>
            <small>Verified people and providers</small>
          </div>
        </article>
        <article>
          <span>◎</span>
          <div>
            <strong>Community first</strong>
            <small>Real connections close to home</small>
          </div>
        </article>
        <article className={styles.trustFeatured}>
          <span>♧</span>
          <div>
            <strong>Good for families</strong>
            <small>Balanced choices for body, mind & planet</small>
          </div>
        </article>
        <article>
          <span>▢</span>
          <div>
            <strong>Secure & private</strong>
            <small>Your family data stays protected</small>
          </div>
        </article>
        <article>
          <span>◌</span>
          <div>
            <strong>Here to help</strong>
            <small>Support from real people</small>
          </div>
        </article>
      </section>

      <section className={styles.activitiesSection}>
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>Discover</p>
          <h2>Activities that inspire together</h2>
          <p>
            From first steps to new passions. Find classes, workshops, events and outdoor adventures
            your family will love.
          </p>
          <PillLink href="/activities">Explore all activities</PillLink>
          <article className={styles.supportCard}>
            <div
              style={photoStyle(
                "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=600&q=88",
                false,
              )}
            />
            <p>
              <strong>Not sure where to start?</strong>
              <span>Answer a few questions and we’ll suggest ideas.</span>
              <Link href="/onboarding">
                Get started <Arrow />
              </Link>
            </p>
          </article>
        </div>
        <div className={styles.activitiesMosaic}>
          {activityCards.map((card) => (
            <PhotoCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      <section className={styles.communitySection}>
        <div className={styles.communityIntro}>
          <p className={styles.eyebrowLight}>Community</p>
          <h2>Community around you</h2>
          <p>Find your people. Join local parent groups, meetups and circles built around shared interests.</p>
          <PillLink href="/community" tone="light">
            Explore community
          </PillLink>
        </div>
        <div className={styles.communityMosaic}>
          {communityCards.map((card, index) => (
            <article
              className={index === 0 ? styles.communityHeroCard : styles.communityCard}
              key={card.title}
              style={photoStyle(card.image)}
            >
              <div>
                <strong>{card.title}</strong>
                <span>{card.meta}</span>
              </div>
            </article>
          ))}
        </div>
        <aside className={styles.communityQuote}>
          <Image src="/brand/icons/icon-192.png" alt="" width={192} height={192} />
          <h3>
            Small circles.
            <br />
            Big impact.
          </h3>
          <p>Stronger families start with real connections.</p>
          <Link href="/community">
            View all groups <Arrow />
          </Link>
        </aside>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.servicesIntro}>
          <p className={styles.eyebrow}>Trusted services</p>
          <h2>Support you can count on</h2>
          <p>Local, vetted and family-approved. From everyday help to life’s big moments.</p>
          <Link href="/services">
            Browse all services <Arrow />
          </Link>
        </div>
        <div className={styles.servicesMosaic}>
          {serviceCards.map((card) => (
            <article
              className={`${styles.serviceCard} ${styles[card.className]}`}
              key={card.title}
              style={photoStyle(card.image)}
            >
              <h3>{card.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.marketplaceSection}>
        <div className={styles.marketplaceIntro}>
          <p className={styles.eyebrow}>Useful finds</p>
          <h2>Curated family essentials</h2>
          <p>Thoughtfully chosen picks for everyday life and little adventures.</p>
          <Link href="/marketplace">
            Shop marketplace <Arrow />
          </Link>
        </div>
        <div className={styles.productGrid}>
          {products.map((product) => (
            <article className={styles.productCard} key={product.title}>
              <div style={photoStyle(product.image, false)} />
              <button type="button" aria-label={`Save ${product.title}`}>
                ♡
              </button>
              <h3>{product.title}</h3>
              <p>{product.price}</p>
            </article>
          ))}
          <aside className={styles.categoryCard}>
            <span>Shop by category</span>
            <Link href="/marketplace?category=toys">Toys & Games</Link>
            <Link href="/marketplace?category=gear">Gear & On the Go</Link>
            <Link href="/marketplace?category=home">Home & Safety</Link>
            <Link href="/marketplace?category=books">Books & Learning</Link>
            <Link href="/marketplace">
              View all <Arrow />
            </Link>
          </aside>
        </div>
      </section>

      <section className={styles.appBanner}>
        <div className={styles.phoneMock} aria-label="Huddle app preview">
          <div className={styles.phoneTop} />
          <div className={styles.phoneScreen}>
            <small>Good morning, Emma</small>
            <strong>Today’s plan</strong>
            <span>10:00 · Baby Yoga</span>
            <span>13:00 · Creative Workshop</span>
            <span>16:00 · Nature Walk</span>
          </div>
        </div>
        <div className={styles.appCopy}>
          <p className={styles.eyebrowLight}>The Huddle app</p>
          <h2>Your family hub, in your pocket</h2>
          <ul>
            <li>Plan your day with ease</li>
            <li>Discover and save favourites</li>
            <li>Stay connected with your community</li>
            <li>Get reminders that matter</li>
          </ul>
          <div className={styles.storeButtons}>
            <Link href="/app">Download on the App Store</Link>
            <Link href="/app">Get it on Google Play</Link>
          </div>
        </div>
        <div
          className={styles.appPhoto}
          style={photoStyle(
            "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1200&q=88",
            false,
          )}
        />
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <Image src="/brand/huddle-family-logo.png" alt="Huddle" width={2048} height={782} />
          <p>Everything your family needs, all in one trusted community.</p>
          <div className={styles.socialLinks}>
            <a href="https://www.instagram.com/" rel="noreferrer">Instagram</a>
            <a href="https://www.facebook.com/" rel="noreferrer">Facebook</a>
            <a href="https://www.tiktok.com/" rel="noreferrer">TikTok</a>
          </div>
        </div>
        <div>
          <strong>Discover</strong>
          <Link href="/activities">Activities</Link>
          <Link href="/events">Events</Link>
          <Link href="/community">Workshops</Link>
          <Link href="/search">Near me</Link>
        </div>
        <div>
          <strong>Plan your day</strong>
          <Link href="/app/calendar">Day Planner</Link>
          <Link href="/app/calendar">Family Calendar</Link>
          <Link href="/app/saved">Saved Favourites</Link>
          <Link href="/app">Recommendations</Link>
        </div>
        <div>
          <strong>Community</strong>
          <Link href="/community">Local Groups</Link>
          <Link href="/community">Meetups</Link>
          <Link href="/community">Discussions</Link>
          <Link href="/safety">Community Guidelines</Link>
        </div>
        <div>
          <strong>Services</strong>
          <Link href="/services">Childcare</Link>
          <Link href="/services">Education</Link>
          <Link href="/services">Health & Wellness</Link>
          <Link href="/services">Support at Home</Link>
        </div>
        <div>
          <strong>About Huddle</strong>
          <Link href="/about">Our Story</Link>
          <Link href="/sustainability">Sustainability</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className={styles.footerBottom}>
          <span>© Huddle AS. All rights reserved.</span>
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/cookies">Cookies</Link>
        </div>
      </footer>
    </main>
  );
}
