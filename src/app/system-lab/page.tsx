import Image from "next/image";
import type { ReactNode } from "react";
import styles from "./system-lab.module.css";

const homeReferenceUrl = "https://raw.githubusercontent.com/alexandrdinnik-Alanar/Huddle-/main/assets/screens/set-01-core/1%20Image%2026%20%D0%B8%D1%8E%D0%BD.%202026%20%D0%B3.%2C%2008_30_03%20%281%29.png";

const trustItems = [
  ["◎", "Curated", "for families"],
  ["♧", "Trusted by", "10 000+ parents"],
  ["✧", "Sustainable", "choices"],
  ["♜", "Supporting", "local communities"],
  ["▣", "Secure", "payments"],
  ["⌑", "Easy", "returns"],
  ["✿", "Quality", "checked"],
  ["♙", "Community", "support"],
] as const;

const categories = [
  ["◒", "New", "Arrivals"],
  ["♲", "Pre-owned", "Shop"],
  ["♧", "Clothing", "0–10Y"],
  ["♟", "Toys", "& Games"],
  ["▤", "Nursery", "& Gear"],
  ["◉", "Activities", "& Classes"],
  ["▦", "Events", "& Workshops"],
  ["♙", "Services", "& Experts"],
] as const;

const products = [
  { crop: [45, 560, 152, 95] as const, width: 152, height: 95, title: "Banwood Balance Bike", meta: "Cream", price: "1 999 NOK" },
  { crop: [205, 555, 155, 100] as const, width: 155, height: 100, title: "Maulin Roly Bear", meta: "Plush toy", price: "229 NOK" },
  { crop: [370, 550, 145, 105] as const, width: 145, height: 105, title: "Liewood Water Bottle", meta: "Peach / 500ml", price: "249 NOK" },
  { crop: [520, 550, 155, 105] as const, width: 155, height: 105, title: "Stokke Tripp Trapp Chair", meta: "Natural", price: "1 899 NOK" },
  { crop: [685, 550, 155, 105] as const, width: 155, height: 105, title: "Lily + Sid Striped Dress", meta: "2–3 y", price: "399 NOK" },
  { crop: [845, 550, 150, 105] as const, width: 150, height: 105, title: "Play Kitchen", meta: "Wooden", price: "1 299 NOK" },
] as const;

const stages = [
  { crop: [135, 920, 87, 90] as const, width: 87, height: 90, title: "Newborn", meta: "0–12 months" },
  { crop: [315, 920, 80, 90] as const, width: 80, height: 90, title: "Toddler", meta: "1–3 years" },
  { crop: [495, 920, 90, 90] as const, width: 90, height: 90, title: "Preschool", meta: "3–5 years" },
  { crop: [670, 920, 85, 90] as const, width: 85, height: 90, title: "School Age", meta: "6–10 years" },
  { crop: [870, 920, 125, 90] as const, width: 125, height: 90, title: "Pre-teen", meta: "10–12 years" },
] as const;

const events = [
  { crop: [45, 1050, 155, 115] as const, width: 155, height: 115, alt: "Baby Yoga, 24 May in Oslo" },
  { crop: [205, 1050, 155, 115] as const, width: 155, height: 115, alt: "Creative Workshop, 31 May in Oslo" },
  { crop: [365, 1050, 155, 115] as const, width: 155, height: 115, alt: "Nature Walk, 7 June in Oslo" },
  { crop: [525, 1050, 140, 115] as const, width: 140, height: 115, alt: "Summer Festival, 14 June in Oslo" },
] as const;

const serviceTrust = [
  ["◎", "Secure payments", "100% protected"],
  ["▣", "Local delivery", "Fast & reliable"],
  ["✿", "Easy returns", "30-day returns"],
  ["✧", "Quality checked", "Tested items only"],
  ["♙", "Community support", "We’re here for you"],
  ["ⓢ", "Sustainable choices", "Better for our planet"],
] as const;

const footerColumns = [
  ["Shop", "All Products", "New Arrivals", "Pre-owned", "Gift Cards", "Brands"],
  ["Community", "Community Feed", "Groups", "Parenting Tips", "Expert Advice"],
  ["Activities & Events", "All Activities", "Workshops", "Event Calendar", "For Schools"],
  ["Services", "Expert Services", "Consultations", "Rentals", "Photographers"],
  ["Partner Stores", "Become a Partner", "Store Login", "Seller Resources"],
  ["About Us", "Our Story", "Sustainability", "Careers", "Contact Us"],
  ["Need help?", "hello@huddle.community", "+47 125 45 678", "Oslo, Norway"],
] as const;

type Crop = readonly [x: number, y: number, width: number, height: number];

function ReferenceCrop({ crop, alt, className = "" }: { crop: Crop; alt: string; className?: string }) {
  const [x, y, width, height] = crop;
  return (
    <svg className={`${styles.referenceImage} ${className}`} viewBox={`${x} ${y} ${width} ${height}`} role="img" aria-label={alt} preserveAspectRatio="xMidYMid slice">
      <image href={homeReferenceUrl} width="1024" height="1536" />
    </svg>
  );
}

function ArrowButton({ href, children, variant = "primary", small = false }: { href: string; children: ReactNode; variant?: "primary" | "secondary" | "outlineLight"; small?: boolean }) {
  return (
    <a className={`${styles.button} ${styles[variant]} ${small ? styles.smallButton : ""}`} href={href}>
      {children} <span aria-hidden="true">→</span>
    </a>
  );
}

function TrustStrip({ compact = false }: { compact?: boolean }) {
  const items = compact ? serviceTrust : trustItems;
  return (
    <section className={`${compact ? styles.serviceTrust : styles.trustStrip} ${styles.contentWidth}`} aria-label={compact ? "Service guarantees" : "Huddle benefits"}>
      {items.map(([icon, title, description]) => (
        <div key={title}>
          <b aria-hidden="true">{icon}</b>
          <span><strong>{title}</strong><small>{description}</small></span>
        </div>
      ))}
    </section>
  );
}

export default function SystemLabPage() {
  return (
    <main className={styles.homeLab}>
      <div className={styles.labNote}>
        <strong>VIS-002 · Homepage Reconstruction Lab</strong>
        <span>Reference-derived · non-production · temporary image crops</span>
      </div>

      <div className={styles.utilityBar}>
        <span>▣ &nbsp; Free local delivery on orders over 899 NOK</span>
        <span>✦ &nbsp; Sustainable choices for your family &amp; our planet</span>
        <span className={styles.utilityApp}>Download the Huddle app &nbsp; ● &nbsp; ◈</span>
      </div>

      <header className={styles.siteHeader}>
        <Image src="/brand/huddle-family-logo.png" alt="Huddle Family" width={154} height={62} className={styles.logo} priority />
        <nav className={styles.desktopNav} aria-label="Primary navigation">
          <a href="#marketplace">Shop⌄</a><a href="#community">Community⌄</a><a href="#activities">Activities</a><a href="#activities">Events</a><a href="#services">Services</a><a href="#partner">Partner Stores</a><a href="#footer">About Us</a>
        </nav>
        <div className={styles.headerActions}>
          <label className={styles.search}><span>Search for products, brands...</span><b aria-hidden="true">⌕</b><input aria-label="Search Huddle" /></label>
          <span className={styles.locale}>EN / NO</span>
          <button type="button" aria-label="Account">♙</button><button type="button" aria-label="Wishlist">♡</button><button type="button" aria-label="Cart">⌑</button>
        </div>
        <button className={styles.mobileMenu} type="button" aria-label="Open navigation">☰</button>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroPattern} aria-hidden="true" />
        <div className={styles.heroCopy}>
          <h1>Everything your<br />family needs,<br /><em>in one trusted community.</em></h1>
          <p>Shop new &amp; pre-owned, join activities, discover events and connect with local experts and stores.</p>
          <div className={styles.heroButtons}>
            <ArrowButton href="#marketplace">Shop Marketplace</ArrowButton>
            <ArrowButton href="#community" variant="secondary">Join the Community</ArrowButton>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <ReferenceCrop className={styles.heroFamily} crop={[470, 90, 235, 295]} alt="Family together at home" />
          <article className={styles.floatingProduct}>
            <span className={styles.tag}>Pre-owned</span><span className={styles.heart} aria-hidden="true">♡</span>
            <ReferenceCrop crop={[735, 162, 81, 74]} alt="Soft bunny toy" />
            <h3>Konges Sløjd Bunny</h3><p>Soft toy</p><strong>249 NOK</strong><small>● Excellent condition</small>
            <div className={styles.avatars}><i /><i /><i /><b>+12</b></div>
          </article>
          <article className={styles.recommendation}>
            <div><span>Good morning,<br /><b>Emma! ☀</b></span><i>◉</i></div>
            <small>Recommended for you</small>
            <div className={styles.miniProducts}>
              <span><ReferenceCrop crop={[370, 550, 145, 105]} alt="Wooden rainbow" /><b>Wooden Rainbow</b></span>
              <span><ReferenceCrop crop={[685, 550, 155, 105]} alt="Linen baby dress" /><b>Linen Baby Dress</b></span>
            </div>
            <small>Near you <b>See all →</b></small>
            <ReferenceCrop className={styles.recBottom} crop={[790, 1265, 205, 80]} alt="Local recommendations" />
          </article>
        </div>
      </section>

      <TrustStrip />

      <section className={`${styles.categoryRail} ${styles.contentWidth}`} aria-label="Categories">
        {categories.map(([icon, title, description], index) => (
          <a href={index < 5 ? "#marketplace" : index < 7 ? "#activities" : "#services"} key={title}>
            <b aria-hidden="true">{icon}</b><span>{title}<small>{description}</small></span>
          </a>
        ))}
      </section>

      <section className={`${styles.section} ${styles.contentWidth}`} id="marketplace">
        <div className={styles.sectionTitle}><h2>Featured in Marketplace</h2><a href="#marketplace">View all products →</a></div>
        <div className={styles.productGrid}>
          {products.map((product) => (
            <article className={styles.productCard} key={product.title}>
              <div className={styles.productMedia}><ReferenceCrop crop={product.crop} alt={product.title} /></div>
              <h3>{product.title}</h3><p>{product.meta}</p><strong>{product.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.promoGrid} ${styles.contentWidth}`} id="community">
        <article className={styles.communityPromo}>
          <div><small>More than a marketplace</small><h2>A community that<br />supports your journey</h2><p>Connect with other parents, join meaningful activities, and find experts who get it.</p><ArrowButton href="#community" variant="outlineLight" small>Explore Community</ArrowButton></div>
          <ReferenceCrop crop={[255, 725, 250, 160]} alt="Families together" />
        </article>
        <article className={styles.appPromo}>
          <div><small>Save time. Shop smart.</small><h2>Everything your family<br />needs, in one place</h2><p>New or pre-owned, activities or services. Hassle-free and curated with care.</p><ArrowButton href="#footer" small>Discover the App</ArrowButton></div>
          <ReferenceCrop crop={[735, 720, 260, 165]} alt="Huddle app and nursery items" />
        </article>
      </section>

      <section className={`${styles.section} ${styles.contentWidth}`}>
        <div className={styles.sectionTitle}><h2>Curated by every stage</h2></div>
        <div className={styles.stageGrid}>
          {stages.map((stage) => (
            <article key={stage.title}><div><h3>{stage.title}</h3><p>{stage.meta}</p><button type="button" aria-label={`Explore ${stage.title}`}>→</button></div><ReferenceCrop crop={stage.crop} alt={stage.title} /></article>
          ))}
        </div>
      </section>

      <section className={`${styles.eventsPartner} ${styles.contentWidth}`} id="activities">
        <div className={styles.eventsBlock}>
          <div className={`${styles.sectionTitle} ${styles.compactTitle}`}><h2>Activities &amp; Events</h2><a href="#activities">See all events →</a></div>
          <div className={styles.eventGrid}>{events.map((event) => <article key={event.alt}><ReferenceCrop crop={event.crop} alt={event.alt} /></article>)}</div>
        </div>
        <article className={styles.partnerCard} id="partner">
          <div><small>Are you a store or brand?</small><h2>Sell with Huddle</h2><p>Connect your inventory, reach thousands of families, and grow your impact.</p><ul><li>Easy integration</li><li>Lower fees</li><li>Local support</li></ul><ArrowButton href="#partner" small>Become a Partner</ArrowButton></div>
          <ReferenceCrop crop={[810, 1025, 185, 160]} alt="Seller preparing a parcel" />
        </article>
      </section>

      <div id="services"><TrustStrip compact /></div>

      <section className={`${styles.closingGrid} ${styles.contentWidth}`}>
        <article className={styles.newsletter}><div><h2>Get tips, updates &amp;<br />exclusive offers</h2><label><input aria-label="Your email address" placeholder="Your email address" /><button type="button">Subscribe</button></label><small>No spam. Unsubscribe anytime.</small></div><ReferenceCrop crop={[180, 1250, 145, 110]} alt="Envelope" /></article>
        <article className={styles.appDownload}><div><small>The Huddle App</small><h2>Shop, connect &amp; stay<br />on the go</h2><div><b> App Store</b><b>▶ Google Play</b></div></div><ReferenceCrop crop={[510, 1248, 130, 112]} alt="Huddle app" /></article>
        <article className={styles.social}><div><small>Follow us @huddle.community</small><h2>Real families.<br />Real moments.</h2><p>◎ &nbsp; ● &nbsp; ♪ &nbsp; ◉</p></div><ReferenceCrop crop={[790, 1265, 205, 80]} alt="Community moments" /></article>
      </section>

      <footer className={`${styles.footer} ${styles.contentWidth}`} id="footer">
        <div className={styles.footerBrand}><Image src="/brand/huddle-family-logo.png" alt="Huddle Family" width={154} height={62} /><p>Everything your family needs,<br />all in one trusted community.</p><b>◎ &nbsp; ● &nbsp; ♪ &nbsp; ◉</b></div>
        {footerColumns.map(([title, ...links]) => <div key={title}><h3>{title}</h3>{links.map((link) => <a href="#footer" key={link}>{link}</a>)}</div>)}
        <div className={styles.footerLegal}><span>© Huddle AS. All rights reserved.</span><span>Terms &amp; Conditions</span><span>Privacy Policy</span><span>Shipping &amp; Delivery</span><span>Returns</span><span>Cookie Settings</span></div>
      </footer>
    </main>
  );
}
