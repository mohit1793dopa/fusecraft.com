import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack";
import {
  ContainerScroll as HeroContainerScroll,
  ContainerSticky as HeroContainerSticky,
  ContainerAnimated,
  ContainerInset,
  HeroImage,
} from "@/components/ui/animated-video-on-scroll";
import { InfiniteRibbon } from "@/components/ui/infinite-ribbon";
import { WorkshopImageCarousel } from "@/components/workshop/WorkshopImageCarousel";
import { TopFadeGrid } from "@/components/ui/top-fade-grid";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Compass, Ruler, Crosshair, Handshake, Hammer, Archive } from "lucide-react";
import { brand } from "@/data/site";

export const metadata: Metadata = {
  title: "Workshop",
  description:
    "Inside the Fusecrafts manufacturing workshop in Nagpur — where carpentry, fabrication, upholstery, and painting/polishing fuse under one roof.",
};

interface WorkshopCategory {
  title: string;
  subtitle: string;
  description: string[];
  image: string;
  imageAlt: string;
  details: string;
}

const workshopCategories: WorkshopCategory[] = [
  {
    title: "Carpentry/Woodwork",
    subtitle: "Solid Hardwoods, Traditional Joinery & Architectural Milling",
    description: [
      "Where Fusecrafts began. Seasoned hardwoods hand-planed to sub-millimeter tolerances, traditional mortise and tenon joinery, and structural framing engineered for natural timber movement and seasonal acclimatization. We mill, joint, and hand-finish monolithic dining tables, fluted wall paneling, oversized pivot doors, and solid partition systems.",
      "Every timber component is selected by grain orientation and kiln moisture content before entering production. Our master carpenters combine hand-chisel shaping and Japanese pull saws with precision spindle moulders, ensuring invisible glue lines, seamless mitres, and mechanical joints built to endure generations of physical use.",
    ],
    image: "/images/workshop/carpentry.png",
    imageAlt: "Master carpenter hand-planing timber in Fusecrafts workshop",
    details: "Sub-millimeter hand-finished joinery tolerances",
  },
  {
    title: "Fabrication/Metalwork",
    subtitle: "TIG/MIG Welding, Structural Steel, Brass Inlays & Concealed Hinges",
    description: [
      "Bringing engineering precision and structural rigor to architectural forms. From welding monolithic mild steel portal frames and sculptural jaali screens to brazing refined brass profiles and machining heavy-duty concealed pivot hinge assemblies. Every joint is ground flush, stress-tested, and inspected for absolute structural integrity.",
      "Operating with calibrated sheet metal brakes, cold-cut saws, and precision TIG welding stations, the metal bay resolves the high-load thresholds of bespoke architectural works. We seamlessly incorporate dissimilar metals with tight expansion clearances, delivering concealed structural anchors, cantilevered table bases, and hairline shadow gaps.",
    ],
    image: "/images/workshop/metalwork.png",
    imageAlt: "Metalwork and frame welding fabrication in Fusecrafts workshop",
    details: "Tolerances down to 0.5mm across all structural metals",
  },
  {
    title: "Upholstery",
    subtitle: "Heavy-Duty Stitching, Natural Leathers & Multi-Density Foams",
    description: [
      "The craft of human comfort and tailored form. Combining precision seam sewing, full-grain leathers, and high-performance textiles with layered multi-density foam cores and durable webbing. Our upholstery artisans turn raw timber and metal skeletons into ergonomic banquettes, refined lounge seating, and architectural acoustic wall panels.",
      "Every piece is built from the inside out — starting with reinforced hardwood internal corner blocking and high-tensile elastic webbing, followed by calibrated high-resilience foam layering to prevent sagging over time. Each panel is pattern-matched by hand, hand-stretched, and blind-stapled to ensure crisp corner tucks and wrinkle-free silhouettes under heavy commercial turnover.",
    ],
    image: "/images/workshop/upholstery-craft.png",
    imageAlt: "Artisan tailoring and stapling upholstery fabric in Fusecrafts workshop",
    details: "Crafted for decades of tactile comfort and enduring shape",
  },
  {
    title: "Painting/Polishing",
    subtitle: "Controlled Spray Finishing, Hand-Rubbed Oils, Lacquers & Patinas",
    description: [
      "The dedicated finishing bay where material depth, tactile warmth, and long-term protective performance are perfected. Operating controlled spray environments for multi-coat polyurethane, architectural matte lacquers, hand-rubbed hardwax oils, and chemical metal patinas. Every surface undergoes multi-stage sanding and calibrated application to withstand daily commercial use while highlighting natural grain.",
      "Our finishing specialists hand-blend stain recipes and natural oil formulas in-house, achieving consistent color tonality across diverse timber batches. From velvety open-pore wood finishes that preserve tactile grain to multi-layered hand-burnished brass patinas, each surface is cured under controlled ventilation for exceptional scratch resistance and enduring architectural richness.",
    ],
    image: "/images/workshop/painting-polishing.png",
    imageAlt: "Artisan spray finishing and polishing architectural surfaces in Fusecrafts workshop",
    details: "Climate-controlled multi-stage finishing & patinas",
  },
];

export default function WorkshopPage() {
  return (
    <main className="bg-sand">
      {/* 1. Scroll-Driven Hero Section with Expanding Workshop Craft Image */}
      <section className="relative w-full bg-sand">
        <HeroContainerScroll className="h-[280vh] md:h-[320vh]">
          <HeroContainerSticky className="sticky left-0 top-0 h-screen h-svh w-full overflow-hidden bg-sand flex flex-col justify-between items-center">
            {/* Top Fade Grid Background in Fusecrafts warm architectural style */}
            <TopFadeGrid className="z-0" />

            {/* Absolute Inset Full-Viewport Image: Rounded box frame centered precisely on helmet brand logo */}
            <ContainerInset
              className="absolute inset-0 z-0 h-full w-full pointer-events-none"
              topInsetRange={[39, 0]}
              bottomInsetRange={[27, 0]}
              leftInsetRange={[35, 0]}
              rightInsetRange={[35, 0]}
              mobileLeftInsetRange={[7, 0]}
              mobileRightInsetRange={[7, 0]}
              roundednessRange={[36, 0]}
              progressRange={[0.06, 0.78]}
            >
              <HeroImage
                src="/images/workshop/workshop-hero-final.png"
                alt="Master metalworker welding in Fusecrafts workshop with brand helmet"
                priority
                scaleRange={[1.05, 1]}
                translateYRange={["0%", "0%"]}
                progressRange={[0.06, 0.78]}
                imageClassName="object-cover object-center"
              />
            </ContainerInset>

            {/* 1. Top Header Content: Above center capsule with generous navbar clearance */}
            <ContainerAnimated
              inputRange={[0, 0.06, 0.35]}
              outputRange={[0, 0, -45]}
              opacityRange={[1, 1, 0]}
              className="relative z-10 mx-auto max-w-[840px] px-6 pt-24 sm:pt-28 md:pt-32 text-center pointer-events-auto"
            >
              <p className="eyebrow text-mocha mb-2 sm:mb-2.5">Manufacturing & Workshop</p>
              <h1 className="font-display text-2xl sm:text-3xl md:text-[2.1rem] lg:text-[2.4rem] leading-[1.14] tracking-tight text-ink font-medium">
                Where architectural drawings{" "}
                <span className="italic text-chestnut font-normal">
                  become physical matter.
                </span>
              </h1>
            </ContainerAnimated>

            {/* 2. Bottom Content: Subtext in 2 crisp lines + subtle quote, positioned comfortably below capsule */}
            <ContainerAnimated
              inputRange={[0, 0.06, 0.32]}
              outputRange={[0, 0, 35]}
              opacityRange={[1, 1, 0]}
              className="relative z-10 mx-auto max-w-[840px] px-6 pb-7 sm:pb-9 md:pb-11 text-center pointer-events-auto space-y-2.5"
            >
              <p className="mx-auto max-w-[740px] text-xs sm:text-sm md:text-[0.92rem] text-mocha/80 leading-relaxed font-normal">
                <span className="sm:block">Four specialized craft disciplines co-located under one roof in Nagpur.</span>{" "}
                <span className="sm:block">Resolving complex multi-material junctions, clearances, and tolerances live on the workshop floor.</span>
              </p>
              <p className="font-display text-[11px] sm:text-xs text-mocha/60 italic leading-snug">
                &ldquo;Four disciplines, one drawing — carpentry, fabrication, upholstery, and painting & polishing co-located under one roof.&rdquo;
              </p>
            </ContainerAnimated>
          </HeroContainerSticky>
        </HeroContainerScroll>
      </section>

      {/* Infinite Ribbon Running Strips Overlapping Hero */}
      <section className="relative z-30 w-full overflow-hidden -mt-20 sm:-mt-24 md:-mt-28 lg:-mt-32 pointer-events-none py-10 md:py-14">
        <div className="relative flex items-center justify-center w-full">
          <InfiniteRibbon
            className="absolute -top-4 sm:-top-5 md:-top-6 w-[130vw] min-w-[130vw] py-3.5 md:py-4 text-xs md:text-sm font-medium tracking-[0.2em] uppercase border-y shadow-[0_20px_50px_rgba(20,28,18,0.45)] font-display"
            duration={70}
            rotation={2.5}
            style={{
              backgroundColor: "#1c2518",
              color: "#FAF5EE",
              borderColor: "#3d4f35",
            }}
          >
            <span className="inline-flex items-center gap-4">
              <span>Fusion is the discipline</span>
              <span className="text-[#d4a373] font-serif text-sm">&bull;</span>
              <span>Combination is the craft</span>
              <span className="text-[#d4a373] font-serif text-sm">&bull;</span>
              <span>Detail is where fusion proves itself</span>
              <span className="text-[#d4a373] font-serif text-sm">&bull;</span>
            </span>
          </InfiniteRibbon>

          <InfiniteRibbon
            className="w-[130vw] min-w-[130vw] py-3.5 md:py-4 text-xs md:text-sm font-medium tracking-[0.2em] uppercase border-y shadow-[0_20px_50px_rgba(60,25,15,0.45)] font-display"
            duration={70}
            reverse={true}
            rotation={-2.5}
            style={{
              backgroundColor: "#6c351f",
              color: "#FFFDF8",
              borderColor: "#8e4a2e",
            }}
          >
            <span className="inline-flex items-center gap-4">
              <span>Four Disciplines &bull; One Drawing</span>
              <span className="text-[#f4d8be] font-serif text-sm">&bull;</span>
              <span>Carpentry &bull; Metalwork &bull; Upholstery &bull; Painting & Polishing</span>
              <span className="text-[#f4d8be] font-serif text-sm">&bull;</span>
              <span>Nagpur Fabrication Studio &bull; Est. {brand.est}</span>
              <span className="text-[#f4d8be] font-serif text-sm">&bull;</span>
            </span>
          </InfiniteRibbon>
        </div>
      </section>

      {/* 2. Write-up Section — Placed after hero, center-aligned with refined font size */}
      <section id="integrated-manufacturing" className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[920px] text-center">
          <Reveal>
            <p className="eyebrow text-mocha">Integrated Manufacturing</p>
            <h2 className="font-display font-medium mt-2 text-2xl sm:text-3xl md:text-[32px] text-ink tracking-tight">
              All under one roof in Nagpur.
            </h2>

            <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed text-mocha font-normal">
              <p>
                Fusecrafts operates an integrated design and manufacturing workshop
                in Nagpur, established in {brand.est}. We started with carpentry,
                then brought metalwork, woodturning, upholstery, and finishing
                under one roof. The more trades we brought in-house, the more we
                could make, and the more control we had over how it turned out.
              </p>
              <p className="text-sm md:text-base text-mocha/80">
                Four specialized craft bays working to the exact same drawing:
                combining materials in a single piece so it does its job better
                than any one material could on its own.
              </p>
            </div>

            {/* Centered Stats Strip */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-16 pt-8 border-t border-line/70">
              <div>
                <span className="block font-display text-2xl md:text-3xl font-medium text-chestnut">
                  {brand.est}
                </span>
                <span className="text-[11px] md:text-xs uppercase tracking-wider text-mocha/70">
                  Established
                </span>
              </div>
              <div className="h-8 w-[1px] bg-line hidden sm:block" />
              <div>
                <span className="block font-display text-2xl md:text-3xl font-medium text-chestnut">
                  4 Bays
                </span>
                <span className="text-[11px] md:text-xs uppercase tracking-wider text-mocha/70">
                  Craft Disciplines
                </span>
              </div>
              <div className="h-8 w-[1px] bg-line hidden sm:block" />
              <div>
                <span className="block font-display text-2xl md:text-3xl font-medium text-chestnut">
                  100%
                </span>
                <span className="text-[11px] md:text-xs uppercase tracking-wider text-mocha/70">
                  In-House Control
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Four Main Categories with Stacking Sticky Cards */}
      <section className="border-t border-line bg-sand px-5 sm:px-8 md:px-12 lg:px-16 py-20 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto mb-14 md:mb-16 max-w-2xl text-center">
            <Reveal>
              <p className="eyebrow text-mocha">Four Pillars of Making</p>
              <h2 className="font-display font-medium mt-2 text-2xl sm:text-3xl md:text-4xl text-ink tracking-tight">
                Integrated workshop disciplines.
              </h2>
              <p className="type-body mt-4 text-sm sm:text-base md:text-lg">
                Each craft category represents an in-house bay equipped with
                specialized tools and master craftsmen who work to the same
                drawing under one roof.
              </p>
            </Reveal>
          </div>

          <ContainerScroll className="space-y-10 pb-16 md:space-y-14">
            {workshopCategories.map((cat, idx) => (
              <CardSticky
                key={cat.title}
                index={idx}
                baseTop={100}
                incrementY={22}
                className="mx-auto w-full max-w-[1040px] rounded-3xl border border-line bg-cream p-7 sm:p-9 md:p-12 shadow-[0_16px_48px_rgba(29,30,18,0.1)] transition-all duration-300 hover:border-mocha/40 hover:shadow-2xl"
              >
                <article className="grid gap-8 lg:grid-cols-[320px_1fr] lg:items-center lg:gap-12">
                  {/* Visual Media with Artwork Image */}
                  <div className="relative flex items-center justify-center">
                    <div className="relative aspect-[3/4] w-full max-w-[320px] overflow-hidden rounded-2xl border border-line bg-sand/40 p-2.5 shadow-sm transition-transform duration-500 hover:scale-[1.02]">
                      <div className="relative h-full w-full overflow-hidden rounded-xl">
                        <Image
                          src={cat.image}
                          alt={cat.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 320px"
                          className="object-contain"
                        />
                      </div>
                      <div className="absolute bottom-3 right-3 rounded bg-moss/85 px-3 py-1 text-[11px] font-medium tracking-wide text-sand backdrop-blur-sm">
                        {cat.details}
                      </div>
                    </div>
                  </div>

                  {/* Textual Specs */}
                  <div>
                    <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-chestnut">
                      BAY 0{idx + 1}
                    </span>
                    <h3 className="font-display mt-2 text-2xl sm:text-3xl md:text-[30px] lg:text-[32px] font-medium leading-tight text-ink tracking-tight">
                      {cat.title}
                    </h3>
                    <p className="mt-1.5 text-sm sm:text-[15px] font-medium text-mocha/80">
                      {cat.subtitle}
                    </p>

                    <div className="type-body mt-4 space-y-3 text-sm sm:text-[14.5px] md:text-base leading-relaxed text-mocha">
                      {cat.description.map((para, pIdx) => (
                        <p key={pIdx}>{para}</p>
                      ))}
                    </div>
                  </div>
                </article>
              </CardSticky>
            ))}
          </ContainerScroll>
        </div>
      </section>

      {/* 4. Linear Workshop Image Carousel Slider */}
      <WorkshopImageCarousel />

      {/* 5. APPROACH Section — The Methodology of the Workshop */}
      <section id="approach" className="border-t border-line bg-sand px-6 sm:px-10 md:px-14 lg:px-20 py-20 md:py-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="mx-auto max-w-2xl text-center mb-12 md:mb-16">
            <Reveal>
              <p className="eyebrow text-mocha text-xs sm:text-sm font-medium tracking-[0.25em]">
                APPROACH &bull; METHODOLOGY
              </p>
              <h2 className="font-display font-medium mt-2 text-2xl sm:text-3xl md:text-4xl text-ink tracking-tight">
                How fusion works in practice.
              </h2>
              <p className="type-body mt-3.5 text-sm sm:text-base md:text-lg text-mocha/85 leading-relaxed font-normal">
                Fusion is our method: combining dissimilar materials and trades into
                a unified piece so it performs better than any single material could alone.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {[
              {
                num: "01",
                tag: "CO-LOCATED TRADES",
                title: "Two trades, one drawing",
                icon: Compass,
                body: "A brass inlay in a timber door. Cane panels in a steel frame. Bringing trades under one roof resolves clearances, tolerances, and transitions live on the shop floor — not through finger-pointing on site.",
                takeaway: "Clearances settled live on the shop floor.",
              },
              {
                num: "02",
                tag: "PHYSICAL PROTOTYPING",
                title: "The full-size 1:1 sample",
                icon: Ruler,
                body: "We never build straight from a drawing. We fabricate a 1:1 scale sample of the difficult junction first — testing weight, ergonomics, and fit before committing to the finished piece.",
                takeaway: "Problems discovered on samples, never on site.",
              },
              {
                num: "03",
                tag: "DISCIPLINED RIGOR",
                title: "Experiment inside the brief",
                icon: Crosshair,
                body: "We experiment relentlessly, but strictly inside project constraints: the budget, site conditions, delivery schedule, and architectural intent. We find the most resolved detail within those limits.",
                takeaway: "Relentless resolution within fixed project constraints.",
              },
              {
                num: "04",
                tag: "EARLY PARTNERSHIP",
                title: "Frank early counsel",
                icon: Handshake,
                body: "If a detail will not work, we say so before it is made. Partnering early while drawings are still flexible lets us refine difficult junctions without redesigning the space around them.",
                takeaway: "That is the reason to bring us in early.",
              },
              {
                num: "05",
                tag: "PREFABRICATION",
                title: "100% workshop finished",
                icon: Hammer,
                body: "Every piece is fabricated, test-fitted, hand-finished, and inspected in our Nagpur workshop before dispatch. That means less site downtime, less dust, and zero critical decisions under installation pressure.",
                takeaway: "Less site downtime, zero decisions under pressure.",
              },
              {
                num: "06",
                tag: "THE TEST ARCHIVE",
                title: "Keeping every lesson",
                icon: Archive,
                body: "We archive every mock-up: joint tests that held, finishes we refined, and patinas we rejected. Our physical material library in Nagpur ensures each new project builds on years of documented memory.",
                takeaway: "A living physical archive of tested details.",
              },
            ].map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <Reveal key={principle.num} delay={idx * 0.05}>
                  <article className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-cream p-5 sm:p-6 md:p-7 shadow-[0_8px_24px_rgba(29,30,18,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-mocha/40 hover:shadow-xl">
                    <div>
                      {/* Card Header: Icon Badge, Tag, and Number */}
                      <div className="flex items-center justify-between border-b border-line/60 pb-3.5">
                        <div className="flex items-center gap-2.5">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-sand/70 text-chestnut transition-colors duration-300 group-hover:bg-chestnut group-hover:text-sand">
                            <Icon className="h-4 w-4" strokeWidth={1.8} />
                          </div>
                          <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-mocha/70">
                            {principle.tag}
                          </span>
                        </div>
                        <span className="font-mono text-xs sm:text-sm font-semibold text-chestnut">
                          {principle.num}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="type-headline mt-3.5 text-lg sm:text-xl font-medium text-ink leading-snug">
                        {principle.title}
                      </h3>

                      {/* Body */}
                      <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-mocha/80 font-normal">
                        {principle.body}
                      </p>
                    </div>

                    {/* Bottom Takeaway */}
                    <div className="mt-4 border-t border-line/60 pt-3 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-chestnut flex-shrink-0" />
                      <p className="font-display text-xs italic text-chestnut leading-tight">
                        {principle.takeaway}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>


      {/* 7. Contact / Visit Callout */}
      <ContactCTA
        eyebrow="Visit & Collaborate"
        title="Have a challenging detail on your drawing board?"
        description="We welcome architects, interior designers, and clients to visit our Nagpur workshop, review material samples, or walk through a 1:1 prototype in person."
        ctaText="Schedule a workshop visit →"
        ctaHref="/contact"
        secondaryText="Email our workshop"
        secondaryHref={`mailto:${brand.email}?subject=Workshop%20Inquiry`}
      />
    </main>
  );
}
