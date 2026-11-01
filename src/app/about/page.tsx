import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { brand } from "@/data/site";
import { AboutProcessTimeline } from "@/components/about/AboutProcessTimeline";
import { TopFadeGrid } from "@/components/ui/top-fade-grid";
import { ContactCTA } from "@/components/home/ContactCTA";
import {
  ContainerScroll,
  ContainerSticky,
  ContainerAnimated,
  ContainerInset,
  HeroImage,
} from "@/components/ui/animated-video-on-scroll";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Fusecrafts story — designing and manufacturing the details that finish a space in Nagpur.",
};

export default function AboutPage() {
  return (
    <main className="bg-sand">
      {/* 1. Scroll-Driven Hero Section with Expanding Exhibition Pavilion Image */}
      <section className="relative w-full bg-sand">
        <ContainerScroll className="h-[280vh] md:h-[320vh]">
          <ContainerSticky className="sticky left-0 top-0 h-screen h-svh w-full overflow-hidden bg-sand flex flex-col justify-between items-center">
            {/* Top Fade Grid Background in Fusecrafts warm architectural style */}
            <TopFadeGrid className="z-0" />

            {/* Absolute Inset Full-Viewport Image: Rounded box frame centered precisely on showroom brand logo */}
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
                src="/images/about/about-hero-final.jpg"
                alt="Fusecrafts Architectural Exhibition & Design Studio Pavilion"
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
              <p className="eyebrow text-mocha mb-2 sm:mb-2.5">Design & Manufacturing Studio</p>
              <h1 className="font-display text-2xl sm:text-3xl md:text-[2.1rem] lg:text-[2.4rem] leading-[1.14] tracking-tight text-ink font-medium">
                We design and make the details{" "}
                <span className="italic text-chestnut font-normal">
                  that finish a space.
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
                <span className="sm:block">
                  Fusecrafts is a design and manufacturing studio in Nagpur. We work with architects
                </span>{" "}
                <span className="sm:block">
                  and interior designers on the parts of a project that are hardest to get right.
                </span>
              </p>
              <p className="font-display text-[11px] sm:text-xs text-mocha/60 italic leading-snug">
                &ldquo;These are usually the parts that get settled last, on site, in a hurry. We settle them earlier, and we make them ourselves.&rdquo;
              </p>
            </ContainerAnimated>
          </ContainerSticky>
        </ContainerScroll>
      </section>

      {/* 3. The Story & Method — 5 Crisp Steps */}
      <section className="border-t border-line bg-sand px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1300px]">
          <div className="mb-12 max-w-2xl md:mb-16">
            <Reveal>
              <p className="eyebrow text-mocha">The Story & Method</p>
              <h2 className="font-display font-medium mt-2 text-2xl sm:text-3xl md:text-4xl text-ink tracking-tight">
                How we start, work, and build.
              </h2>
              <p className="type-body mt-3 text-base md:text-lg">
                Five concise chapters: from our workshop origin in Nagpur to our
                cross-material fusion method and testing archive.
              </p>
            </Reveal>
          </div>

          <AboutProcessTimeline />
        </div>
      </section>

      {/* 4. The Founder — Ar. Aziz Rasheed */}
      <section
        id="founder"
        className="scroll-mt-24 md:scroll-mt-28 border-t border-line bg-cream px-5 py-18 sm:py-20 md:px-8 md:py-24 lg:py-28"
      >
        <div className="mx-auto w-full max-w-[1240px]">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
            {/* Left: Founder Portrait (Always visible, taller presence) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="group relative aspect-[4/5] w-full max-w-[380px] sm:max-w-[410px] lg:max-w-[430px] overflow-hidden rounded-2xl md:rounded-3xl border border-line bg-sand shadow-[0_16px_40px_rgba(49,51,31,0.08)]">
                <Image
                  src="/images/founder/aziz-rasheed-portrait.png"
                  alt="Ar. Aziz Rasheed — Founder & Director of Fusecrafts"
                  fill
                  sizes="(max-width: 1024px) 100vw, 430px"
                  className="object-cover object-[50%_35%] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  priority
                />
                {/* Subtle atmospheric vignette */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1D1E12]/80 via-transparent to-transparent" />

                {/* Floating identity pill on the photo */}
                <div className="absolute bottom-3 inset-x-3 sm:bottom-4 sm:inset-x-4 z-10 pointer-events-none">
                  <div className="flex items-center justify-between gap-2 rounded-xl border border-white/20 bg-[#1D1E12]/85 px-3 py-2 text-white/90 backdrop-blur-md shadow-lg">
                    <span className="font-mono text-[11px] sm:text-xs font-medium tracking-wide uppercase text-[#FCF4E3] whitespace-nowrap">
                      Ar. Aziz Rasheed
                    </span>
                    <span className="font-mono text-[9px] sm:text-[10px] tracking-wider uppercase text-[#FCF4E3]/75 whitespace-nowrap">
                      Founder &bull; Director &bull; Fusecrafts
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Founder Narrative (Comfortable editorial scale) */}
            <div className="lg:col-span-7">
              <Reveal delay={0.05}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-chestnut" />
                  <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-mocha">
                    The Founder
                  </p>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-light tracking-tight text-ink leading-tight">
                  Ar. Aziz Rasheed
                </h2>
                <p className="mt-2 font-display text-base sm:text-lg md:text-xl italic text-chestnut">
                  From architectural scale to the tactile detail.
                </p>
              </Reveal>

              <div className="my-4 sm:my-5 h-px w-16 bg-chestnut/40" />

              <Reveal delay={0.1}>
                <div className="space-y-4 font-sans text-sm sm:text-base md:text-[16.5px] leading-[1.75] text-mocha">
                  <p>
                    After years in architecture, Aziz Rasheed found himself drawn
                    to the details that bring a space to life — the craftsmanship,
                    materials, junctions, and thoughtful touches that shape how a
                    place feels. Trained to design buildings, he became fascinated
                    by the finer elements people interact with every day, from a
                    carefully crafted edge to a bespoke piece of furniture.
                  </p>
                  <p>
                    Over time, this curiosity evolved into a practice of
                    experimentation, bringing together different disciplines,
                    techniques, and crafts to create meaningful, purposeful
                    designs.
                  </p>
                  <p>
                    Today, through Fusecrafts, Aziz collaborates with architects,
                    designers, and clients to create bespoke furniture, objects,
                    and details that are thoughtfully made, deeply connected to
                    their surroundings, and designed to elevate the way people
                    experience a space.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 5. The Manifesto Section — Compact & Refined */}
      <section
        id="manifesto"
        className="relative overflow-hidden bg-[#0A0B0A] px-5 py-14 text-sand md:px-8 md:py-18 lg:py-20"
      >
        {/* Subtle architectural ambient warmth & border highlights */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_10%,rgba(139,79,53,0.14),transparent_60%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
        />

        <div className="relative z-10 mx-auto max-w-[1240px]">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-chestnut" />
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#C4A482]">
                  The Manifesto
                </p>
              </div>
              <span className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-0.5 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-white/70 backdrop-blur-md">
                Core Principles
              </span>
            </div>

            <div className="mt-8 max-w-3xl">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-light leading-[1.18] text-[#FCF4E3] tracking-tight">
                Detail is where{" "}
                <span className="italic font-normal text-[#D6A284]">
                  fusion
                </span>{" "}
                proves itself.
              </h2>
              <div className="relative mt-4 border-l-2 border-chestnut/80 pl-4 md:pl-6 py-0.5">
                <p className="font-display text-sm sm:text-base md:text-lg font-light italic text-[#E6CCB2]/90 leading-relaxed">
                  &ldquo;We believe that the elements that touch the human hand
                  should never be an afterthought. When architecture resolves its
                  smallest junctions with purpose, the entire room comes into
                  harmony.&rdquo;
                </p>
              </div>
            </div>
          </Reveal>

          {/* 4 Core Precepts — Compact Cards */}
          <div className="mt-8 sm:mt-10 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                num: "I",
                index: "01",
                title: "Scale of the Object",
                desc: "Architecture doesn't end at structural walls — it extends to every handle, hinge, and junction touched daily.",
              },
              {
                num: "II",
                index: "02",
                title: "Fusion over Trend",
                desc: "Dissimilar materials — cold brass and warm teak, raw stone and delicate rattan — engineered with intentional tolerance.",
              },
              {
                num: "III",
                index: "03",
                title: "Workshop as Laboratory",
                desc: "True resolution doesn't happen on a monitor. It is verified physically through 1:1 samples in our workshop.",
              },
              {
                num: "IV",
                index: "04",
                title: "Made to Belong",
                desc: "A piece should not merely occupy square footage. It must anchor the architectural intent of the room.",
              },
            ].map((item, idx) => (
              <Reveal key={item.num} delay={idx * 0.06}>
                <div className="group relative flex h-full flex-col justify-between rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:p-5.5 transition-all duration-300 hover:border-chestnut/60 hover:bg-white/[0.06] hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)]">
                  <div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C4A482]">
                        Precept {item.num}
                      </span>
                      <span className="font-mono text-[10px] tracking-widest text-white/30 group-hover:text-white/60 transition-colors">
                        {item.index}
                      </span>
                    </div>

                    <h3 className="font-display mt-3.5 text-base sm:text-[17px] font-medium text-white transition-colors group-hover:text-[#F4D8BE]">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-sans text-xs sm:text-[13px] leading-relaxed text-white/70 transition-colors group-hover:text-white/90">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center pt-1.5">
                    <div className="h-[2px] w-5 rounded-full bg-white/15 transition-all duration-300 group-hover:w-10 group-hover:bg-chestnut" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Bottom Architectural Sign-Off */}
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-white/10 pt-5 text-[10px] sm:text-[11px] font-mono tracking-wider text-white/40">
            <p className="uppercase">Fusecrafts Manifesto &bull; Architectural Atelier</p>
            <p className="uppercase">Nagpur, India &bull; Built to Endure</p>
          </div>
        </div>
      </section>

      {/* 6. Signature Contact CTA Banner */}
      <ContactCTA
        eyebrow="Collaborate With Us"
        title="Bring us the hardest junction on your drawings."
        description="We work with architects and interior designers across India from concept samples to final installation."
        ctaText="Get in touch →"
        ctaHref="/contact"
      />
    </main>
  );
}
