import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.css";

export const metadata: Metadata = {
  title: "Huddle — Everything your family needs",
  description:
    "Discover activities, community, trusted services and useful family essentials in one connected local platform.",
};

type IconName =
  | "search"
  | "user"
  | "heart"
  | "bag"
  | "calendar"
  | "users"
  | "shield"
  | "leaf"
  | "truck"
  | "spark"
  | "service"
  | "shop"
  | "menu";

const activityCards = [
  {
    title: "Creative Workshop",
    note: "Craft, colour and play",
    count: "31 May · 12:00",
    image:
      "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=1200&q=88",
    className: "activityLead",
    badge: "31 MAY",
  },
  {
    title: "Nature Walk",
    note: "For the whole family",
    count: "7 Jun · 10:00",
    image:
      "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1200&q=88",
    className: "activityWide",
    badge: "07 JUN",
  },
  {
    title: "Family Yoga",
    note: "Move, breathe, connect",
    count: "14 Jun · 10:00",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=88",
    className: "activitySmall",
    badge: "14 JUN",
  },
  {
    title: "Summer Gathering",
    note: "Food, music and local families",
    count: "21 Jun · 16:00",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1000&q=88",
    className: "activitySmall",
    badge: "21 JUN",
  },
] as const;

const communityCards = [
  {
    title: "New Parents in Oslo",
    meta: "1.2k members · meetup Saturday",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=88",
  },
  {
    title: "Weekend Explorers",
    meta: "842 members · outdoor ideas",
    image:
      "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1000&q=88",
  },
  {
    title: "Mindful Mamas",
    meta: "623 members · weekly circle",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=88",
  },
] as const;

const serviceCards = [
  {
    title: "Childcare & Preschool",
    detail: "Verified local providers",
    image:
      "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=1100&q=88",
    className: "serviceLead",
  },
  {
    title: "Family Wellbeing",
    detail: "Therapists and specialists",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=88",
    className: "serviceWide",
  },
  {
    title: "Learning Support",
    detail: "Tutors and educators",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=88",
    className: "serviceSmall",
  },
  {
    title: "Family Photography",
    detail: "Trusted local creatives",
    image:
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=900&q=88",
    className: "serviceSmall",
  },
] as const;

const products = [
  {
    title: "Wooden Balance Bike",
    price: "1 499 NOK",
    label: "Pre-loved",
    image:
      "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=900&q=88",
  },
  {
    title: "Soft Teddy Bear",
    price: "229 NOK",
    label: "Pre-loved",
    image:
      "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=900&q=88",
  },
  {
    title: "Kids Daypack",
    price: "499 NOK",
    label: "New",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=88",
  },
  {
    title: "Wooden Blocks Set",
    price: "349 NOK",
    label: "New",
    image:
      "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=900&q=88",
  },
  {
    title: "Insulated Bottle",
    price: "299 NOK",
    label: "New",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=88",
  },
  {
    title: "Kids Room Shelf",
    price: "899 NOK",
    label: "Pre-loved",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=88",
  },
] as const;

const stages = [
  {
    title: "Newborn",
    age: "0–12 months",
    image:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=900&q=88",
  },
  {
    title: "Toddler",
    age: "1–3 years",
    image:
      "https://images.unsplash.com/photo-1560785496-3c9d27877182?auto=format&fit=crop&w=900&q=88",
  },
  {
    title: "Preschool",
    age: "3–5 years",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=88",
  },
  {
    title: "School age",
    age: "6–10 years",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=88",
  },
  {
    title: "Pre-teen",
    age: "10–12 years",
    image:
      "https://images.unsplash.com/photo-1544776193-352d25ca82cd?auto=format&fit=crop&w=900&q=88",
  },
] as const;

const categoryItems = [
  { icon: "spark" as const, title: "Today", note: "Ideas near you" },
  { icon: "calendar" as const, title: "Activities", note: "Classes & events" },
  { icon: "users" as const, title: "Community", note: "Groups & meetups" },
  { icon: "service" as const, title: "Services", note: "Trusted experts" },
  { icon: "shop" as const, title: "Marketplace", note: "New & pre-loved" },
  { icon: "leaf" as const, title: "Outdoors", note: "Family adventures" },
  { icon: "shield" as const, title: "Support", note: "Safe & verified" },
  { icon: "bag" as const, title: "For partners", note: "Grow with Huddle" },
] as const;

const trustItems = [
  { icon: "shield" as const, title: "Curated with care", note: "Quality and safety first" },
  { icon: "users" as const, title: "Trusted by families", note: "10,000+ parents" },
  { icon: "leaf" as const, title: "Sustainable choices", note: "Better for families and planet" },
  { icon: "spark" as const, title: "Supporting local", note: "Communities and businesses" },
  { icon: "shield" as const, title: "Secure payments", note: "Protected from start to finish" },
  { icon: "truck" as const, title: "Easy local pickup", note: "Simple and convenient" },
  { icon: "service" as const, title: "Quality checked", note: "Verified people and listings" },
  { icon: "users" as const, title: "Human support", note: "Real help when you need it" },
] as const;

function photoStyle(url: string, overlay = true): CSSProperties {
  return {
    backgroundImage: overlay
      ? `linear-gradient(180deg, rgba(98, 85, 77, 0.02), rgba(98, 85, 77, 0.62)), url("${url}")`
      : `url("${url}")`,
  };
}

function LineIcon({ name }: { name: IconName }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const paths: Record<IconName, ReactNode> = {
    search: <><circle cx="11" cy="11" r="6" {...common} /><path d="m16 16 4 4" {...common} /></>,
    user: <><circle cx="12" cy="8" r="3.5" {...common} /><path d="M5.5 20c.8-4.1 3-6 6.5-6s5.7 1.9 6.5 6" {...common} /></>,
    heart: <path d="M20 8.7C20 14 12 19 12 19S4 14 4 8.7C4 5.8 6.1 4 8.5 4c1.5 0 2.8.8 3.5 2 .7-1.2 2-2 3.5-2C17.9 4 20 5.8 20 8.7Z" {...common} />,
    bag: <><path d="M6 8h12l1 12H5L6 8Z" {...common} /><path d="M9 8V6a3 3 0 0 1 6 0v2" {...common} /></>,
    calendar: <><rect x="4" y="5.5" width="16" height="14" rx="2" {...common} /><path d="M8 3.5v4M16 3.5v4M4 10h16" {...common} /></>,
    users: <><circle cx="9" cy="9" r="3" {...common} /><circle cx="17" cy="10" r="2.4" {...common} /><path d="M3.5 20c.5-4 2.4-6 5.5-6s5 2 5.5 6M14.5 15c2.9-.4 5 .9 6 4" {...common} /></>,
    shield: <path d="M12 3 19 6v5c0 4.4-2.7 7.7-7 10-4.3-2.3-7-5.6-7-10V6l7-3Z" {...common} />,
    leaf: <><path d="M19.5 4.5C13 4.4 7 7 5.5 13.5c4.7 1.3 10.9-.5 14-9Z" {...common} /><path d="M5 20c1.7-5.5 5.8-9.1 12-12" {...common} /></>,
    truck: <><path d="M3 6h11v10H3V6Z" {...common} /><path d="M14 10h4l3 3v3h-7v-6Z" {...common} /><circle cx="7" cy="18" r="2" {...common} /><circle cx="18" cy="18" r="2" {...common} /></>,
    spark: <path d="M12 3c.8 4.6 3.4 7.2 8 8-4.6.8-7.2 3.4-8 8-.8-4.6-3.4-7.2-8-8 4.6-.8 7.2-3.4 8-8Z" {...common} />,
    service: <><circle cx="12" cy="12" r="8" {...common} /><path d="M12 8v8M8 12h8" {...common} /></>,
    shop: <><path d="M4 9h16l-2-5H6L4 9Z" {...common} /><path d="M6 9v11h12V9M9 20v-6h6v6" {...common} /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" {...common} /></>,
  };

  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
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
  badge,
}: (typeof activityCards)[number]) {
  return (
    <article className={`${styles.photoCard} ${styles[className]}`} style={photoStyle(image)}>
      <span className={styles.dateBadge}>{badge}</span>
      <div>
        <h3>{title}</h3>
        <p>{note}</p>
        <small>{count}</small>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <main className={styles.page}>
      <div className={styles.utilityBar}>
        <span><LineIcon name="truck" /> Free local delivery on selected orders</span>
        <span><LineIcon name="leaf" /> Sustainable choices for family life</span>
        <Link href="/app">Download the Huddle app <Arrow /></Link>
      </div>

      <header className={styles.header}>
        <Link className={styles.brand} href="/" aria-label="Huddle home">
          <Image
            src="/brand/logotype/Huddle_logotype_copper_transparent_APPROVED.png"
            alt="Huddle"
            width={1025}
            height={316}
            priority
          />
        </Link>

        <nav className={styles.primaryNav} aria-label="Primary navigation">
          <Link href="/activities">Activities</Link>
          <Link href="/events">Events</Link>
          <Link href="/community">Community</Link>
          <Link href="/services">Services</Link>
          <Link href="/marketplace">Marketplace</Link>
          <Link href="/partners">For partners</Link>
        </nav>

        <div className={styles.headerTools}>
          <Link className={styles.searchBox} href="/search">
            <span>Search Huddle...</span><LineIcon name="search" />
          </Link>
          <span className={styles.language}>EN / NO</span>
          <Link className={styles.iconButton} href="/login" aria-label="Sign in"><LineIcon name="user" /></Link>
          <Link className={styles.iconButton} href="/app/saved" aria-label="Saved items"><LineIcon name="heart" /></Link>
          <Link className={styles.iconButton} href="/marketplace/cart" aria-label="Shopping bag"><LineIcon name="bag" /></Link>
        </div>

        <details className={styles.mobileMenu}>
          <summary aria-label="Open navigation"><LineIcon name="menu" /></summary>
          <nav aria-label="Mobile navigation">
            <Link href="/activities">Activities</Link>
            <Link href="/events">Events</Link>
            <Link href="/community">Community</Link>
            <Link href="/services">Services</Link>
            <Link href="/marketplace">Marketplace</Link>
            <Link href="/partners">For partners</Link>
          </nav>
        </details>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroIntro}>
          <Image className={styles.heroMark} src="/brand/icons/icon-512.png" alt="" width={512} height={512} />
          <p className={styles.eyebrow}>One trusted place for family life</p>
          <h1>
            Everything your family needs,
            <em>closer together.</em>
          </h1>
          <p className={styles.heroLead}>
            Discover activities, meet local families, find trusted support and keep everyday plans in one calm, connected space.
          </p>
          <div className={styles.heroActions}>
            <PillLink href="/activities" tone="olive">Explore activities</PillLink>
            <PillLink href="/community" tone="light">Join the community</PillLink>
          </div>
          <div className={styles.heroProof}>
            <div className={styles.avatarStack} aria-hidden="true"><span /><span /><span /><span /></div>
            <p><strong>10,000+ families</strong><small>already building stronger local connections</small></p>
          </div>
        </div>

        <div
          className={styles.heroPhoto}
          style={photoStyle(
            "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1800&q=92",
            false,
          )}
          role="img"
          aria-label="Family spending time together"
        />

        <div className={styles.heroSide}>
          <article className={styles.personalCard}>
            <div className={styles.personalHead}>
              <div><span>Good morning,</span><strong>Emma</strong></div>
              <Image src="/brand/icons/icon-192.png" alt="" width={192} height={192} />
            </div>
            <p>Recommended for your family</p>
            <div className={styles.recommendationRow}>
              <article><div style={photoStyle(products[3].image, false)} /><span>Creative play</span><small>Today · Oslo</small></article>
              <article><div style={photoStyle(products[1].image, false)} /><span>Pre-loved pick</span><small>1.2 km away</small></article>
            </div>
            <Link href="/search">See everything near you <Arrow /></Link>
          </article>

          <article className={styles.heroProduct}>
            <div className={styles.heroProductImage} style={photoStyle(products[0].image, false)} />
            <span className={styles.productBadge}>Pre-loved</span>
            <button type="button" aria-label="Save Wooden Balance Bike"><LineIcon name="heart" /></button>
            <div><strong>Wooden Balance Bike</strong><small>Excellent condition · 1.4 km</small><b>1 499 NOK</b></div>
          </article>
        </div>
      </section>

      <section className={styles.trustRibbon} aria-label="Why families choose Huddle">
        {trustItems.map((item) => (
          <article key={item.title}>
            <span><LineIcon name={item.icon} /></span>
            <div><strong>{item.title}</strong><small>{item.note}</small></div>
          </article>
        ))}
      </section>

      <nav className={styles.categoryRail} aria-label="Explore Huddle">
        {categoryItems.map((item) => (
          <Link href={item.title === "Marketplace" ? "/marketplace" : item.title === "Community" ? "/community" : item.title === "Services" ? "/services" : "/activities"} key={item.title}>
            <span><LineIcon name={item.icon} /></span>
            <div><strong>{item.title}</strong><small>{item.note}</small></div>
          </Link>
        ))}
      </nav>

      <section className={styles.activitiesSection}>
        <div className={styles.sectionHeading}>
          <div><p className={styles.eyebrow}>Activities & events</p><h2>Activities that inspire together</h2></div>
          <p>Simple ways to make today meaningful — from creative classes to local adventures.</p>
          <PillLink href="/activities" tone="light">See all activities</PillLink>
        </div>
        <div className={styles.activitiesMosaic}>
          {activityCards.map((card) => <PhotoCard key={card.title} {...card} />)}
          <aside className={styles.familyPlanCard}>
            <span className={styles.iconDisc}><LineIcon name="calendar" /></span>
            <p className={styles.eyebrow}>Your family day</p>
            <h3>Three ideas, one easy plan.</h3>
            <ol><li><time>10:00</time><span>Creative workshop</span></li><li><time>13:30</time><span>Lunch near the park</span></li><li><time>16:00</time><span>Community meetup</span></li></ol>
            <Link href="/app/calendar">Open family planner <Arrow /></Link>
          </aside>
        </div>
      </section>

      <section className={styles.communitySection}>
        <div className={styles.communityIntro}>
          <p className={styles.eyebrowLight}>More than a platform</p>
          <h2>Community around you</h2>
          <p>Meet people who understand your stage of family life. Join local circles, exchange practical support and make real connections.</p>
          <div className={styles.communityStats}><span><strong>400+</strong><small>local groups</small></span><span><strong>25k+</strong><small>active families</small></span><span><strong>98%</strong><small>would recommend</small></span></div>
          <PillLink href="/community" tone="light">Explore community</PillLink>
        </div>
        <div className={styles.communityMosaic}>
          {communityCards.map((card, index) => (
            <article className={index === 0 ? styles.communityHeroCard : styles.communityCard} key={card.title} style={photoStyle(card.image)}>
              <div><strong>{card.title}</strong><span>{card.meta}</span></div>
            </article>
          ))}
        </div>
        <aside className={styles.communityQuote}>
          <Image src="/brand/icons/icon-192.png" alt="" width={192} height={192} />
          <h3>Find your people.</h3>
          <p>Local support becomes easier when families can discover each other safely.</p>
          <Link href="/community">View all groups <Arrow /></Link>
        </aside>
      </section>

      <section className={styles.stageSection}>
        <div className={styles.stageHeading}><div><p className={styles.eyebrow}>Personalised by stage</p><h2>Guided by every stage of childhood</h2></div><p>Choose a stage to discover relevant activities, services, groups and practical ideas.</p></div>
        <div className={styles.stageGrid}>
          {stages.map((stage) => (
            <Link href="/onboarding" className={styles.stageCard} key={stage.title}>
              <div><strong>{stage.title}</strong><span>{stage.age}</span></div>
              <div style={photoStyle(stage.image, false)} />
              <span className={styles.stageArrow}><Arrow /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.sectionHeading}>
          <div><p className={styles.eyebrow}>Trusted services</p><h2>Support you can count on</h2></div>
          <p>Vetted local experts for everyday needs and important family moments.</p>
          <PillLink href="/services" tone="light">Browse all services</PillLink>
        </div>
        <div className={styles.servicesLayout}>
          <div className={styles.servicesMosaic}>
            {serviceCards.map((card) => (
              <article className={`${styles.serviceCard} ${styles[card.className]}`} key={card.title} style={photoStyle(card.image)}>
                <div><strong>{card.title}</strong><span>{card.detail}</span></div>
              </article>
            ))}
          </div>
          <aside className={styles.providerCard}>
            <div className={styles.providerPhoto} style={photoStyle("https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=88", false)} />
            <p className={styles.eyebrow}>Verified expert</p>
            <h3>Anna Larsen</h3>
            <span>Family therapist · Frogner</span>
            <div className={styles.rating}>★★★★★ <small>4.9 · 86 reviews</small></div>
            <Link href="/services">View availability <Arrow /></Link>
          </aside>
        </div>
      </section>

      <section className={styles.marketplaceSection}>
        <div className={styles.marketplaceHeading}>
          <div><p className={styles.eyebrow}>Useful family finds</p><h2>Curated family essentials</h2></div>
          <p>Marketplace is one part of Huddle: useful new and pre-loved items selected for real family life.</p>
          <Link href="/marketplace">Shop marketplace <Arrow /></Link>
        </div>
        <div className={styles.productGrid}>
          {products.map((product) => (
            <article className={styles.productCard} key={product.title}>
              <div className={styles.productImage} style={photoStyle(product.image, false)} />
              <span className={styles.productBadge}>{product.label}</span>
              <button type="button" aria-label={`Save ${product.title}`}><LineIcon name="heart" /></button>
              <h3>{product.title}</h3>
              <p>{product.price}</p>
            </article>
          ))}
        </div>
        <div className={styles.marketplaceCategories}>
          {['Pre-loved','Clothing','Toys & Games','Nursery & Gear','Books & Learning','Outdoor & Sports','Kids room','Maternity'].map((category) => <Link href="/marketplace" key={category}>{category}<Arrow /></Link>)}
        </div>
      </section>

      <section className={styles.partnerImpactSection}>
        <article className={styles.partnerCard}>
          <div><p className={styles.eyebrowLight}>For local businesses</p><h2>Grow with Huddle</h2><p>Reach families through trusted services, meaningful events and useful local offers.</p><PillLink href="/partners" tone="light">Become a partner</PillLink></div>
          <div className={styles.partnerPhoto} style={photoStyle("https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=88", false)} />
        </article>
        <article className={styles.impactCard}>
          <Image src="/brand/icons/icon-512.png" alt="" width={512} height={512} />
          <p className={styles.eyebrow}>Local impact</p>
          <h2>Small choices add up.</h2>
          <div><span><strong>10k+</strong><small>families reached</small></span><span><strong>18k</strong><small>items reused</small></span><span><strong>400+</strong><small>local groups</small></span></div>
        </article>
      </section>

      <section className={styles.assuranceStrip} aria-label="Service assurances">
        <span><LineIcon name="shield" /><strong>Secure payments</strong><small>Protected transactions</small></span>
        <span><LineIcon name="truck" /><strong>Local pickup</strong><small>Simple and convenient</small></span>
        <span><LineIcon name="heart" /><strong>Family approved</strong><small>Real ratings and reviews</small></span>
        <span><LineIcon name="service" /><strong>Human support</strong><small>Help from real people</small></span>
        <span><LineIcon name="leaf" /><strong>Sustainable choices</strong><small>Better for our planet</small></span>
      </section>

      <section className={styles.utilityGrid}>
        <article className={styles.newsletterCard}><div><p className={styles.eyebrow}>Stay in the loop</p><h3>Ideas, updates and useful local finds.</h3><form><label htmlFor="home-email">Email address</label><input id="home-email" type="email" placeholder="Your email address" /><button type="submit">Subscribe</button></form></div><div className={styles.envelopeArt}><span>HUDDLE</span></div></article>
        <article className={styles.appCard}><div className={styles.phoneMock}><span /><div><small>Good morning, Emma</small><strong>Today in Huddle</strong><p>10:00 Creative workshop</p><p>13:30 Lunch near the park</p><p>16:00 Community meetup</p></div></div><div><p className={styles.eyebrowLight}>The Huddle app</p><h3>Your family hub, wherever the day takes you.</h3><div className={styles.storeButtons}><Link href="/app">App Store</Link><Link href="/app">Google Play</Link></div></div></article>
        <article className={styles.socialCard}><div><p className={styles.eyebrow}>Real families</p><h3>Small moments. Shared inspiration.</h3><p>Follow local stories, practical ideas and community highlights.</p><div className={styles.socialLinks}><a href="https://www.instagram.com/">Instagram</a><a href="https://www.facebook.com/">Facebook</a><a href="https://www.tiktok.com/">TikTok</a></div></div><div className={styles.socialPhotos}><span style={photoStyle(communityCards[0].image, false)} /><span style={photoStyle(activityCards[1].image, false)} /><span style={photoStyle(stages[0].image, false)} /></div></article>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <Image src="/brand/huddle-family-logo.png" alt="Huddle Family" width={2048} height={782} />
          <p>Everything your family needs, in one trusted community.</p>
          <div className={styles.socialLinks}><a href="https://www.instagram.com/">Instagram</a><a href="https://www.facebook.com/">Facebook</a><a href="https://www.tiktok.com/">TikTok</a></div>
        </div>
        <div><strong>Discover</strong><Link href="/activities">Activities</Link><Link href="/events">Events</Link><Link href="/community">Community</Link><Link href="/search">Near me</Link></div>
        <div><strong>Family hub</strong><Link href="/app/calendar">Day planner</Link><Link href="/app/saved">Saved favourites</Link><Link href="/app">Recommendations</Link><Link href="/onboarding">Personalise</Link></div>
        <div><strong>Services</strong><Link href="/services">Childcare</Link><Link href="/services">Education</Link><Link href="/services">Wellbeing</Link><Link href="/services">Home support</Link></div>
        <div><strong>Marketplace</strong><Link href="/marketplace">All products</Link><Link href="/marketplace">Pre-loved</Link><Link href="/marketplace">Sell an item</Link><Link href="/marketplace">Gift cards</Link></div>
        <div><strong>About Huddle</strong><Link href="/about">Our story</Link><Link href="/sustainability">Sustainability</Link><Link href="/partners">For partners</Link><Link href="/contact">Contact</Link></div>
        <div className={styles.footerBottom}><span>© Huddle AS. All rights reserved.</span><Link href="/terms">Terms</Link><Link href="/privacy">Privacy</Link><Link href="/cookies">Cookies</Link><span>Oslo, Norway</span></div>
      </footer>
    </main>
  );
}
