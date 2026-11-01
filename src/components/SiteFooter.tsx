import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { brand, navLinks } from "@/data/site";

function LinkedinIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-moss text-sand">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:gap-12 md:px-8 md:py-20">
        <div>
          <BrandLogo tone="light" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-almond/80">
            Detail design and manufacturing for the in-betweens of architectural
            work. {brand.tagline}
          </p>
          <p className="mt-4 text-sm text-sand/70">
            Est. {brand.est} · {brand.location}
          </p>
        </div>

        <div>
          <p className="eyebrow text-almond/45">Navigate</p>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-sand/90 transition-colors hover:text-almond"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-almond/45">Studio</p>
          <div className="mt-5 text-sm leading-relaxed text-sand/90">
            <a
              href={brand.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-baseline gap-1.5 text-sand underline decoration-almond/30 underline-offset-4 transition-colors hover:text-cream hover:decoration-almond"
            >
              <span>{brand.location}</span>
              <span aria-hidden className="text-xs text-almond transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="mt-3 block text-almond underline decoration-chestnut/50 underline-offset-4 transition-colors hover:text-cream"
            >
              {brand.email}
            </a>
            <a
              href={`tel:${brand.phone.replace(/\s+/g, "")}`}
              className="mt-1 block text-almond underline decoration-chestnut/50 underline-offset-4 transition-colors hover:text-cream"
            >
              {brand.phone}
            </a>
            <div className="mt-3 flex flex-wrap items-center gap-4">
              <a
                href={brand.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs tracking-wider uppercase text-sand/80 underline decoration-sand/40 underline-offset-4 transition-colors hover:text-white"
              >
                <LinkedinIcon className="h-3.5 w-3.5 text-almond/80" />
                LinkedIn ↗
              </a>
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs tracking-wider uppercase text-sand/80 underline decoration-sand/40 underline-offset-4 transition-colors hover:text-white"
              >
                <InstagramIcon className="h-3.5 w-3.5 text-almond/80" />
                Instagram ↗
              </a>
            </div>
          </div>
          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-cream px-6 py-2.5 text-xs font-medium uppercase tracking-[0.12em] text-moss shadow-sm transition-all duration-300 hover:bg-almond hover:border-almond hover:gap-2.5"
          >
            <span>Start a conversation</span>
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* End mark — official Stamp logo */}
      <div className="border-t border-white/10 px-5 py-12 md:px-8 md:py-14">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-6">
          <BrandLogo
            variant="stamp"
            tone="light"
            href={null}
            className="h-20 w-20 opacity-90 transition-opacity duration-500 hover:opacity-100 md:h-24 md:w-24"
          />
          <div className="flex w-full flex-col items-center justify-between gap-3 text-center text-xs tracking-wide text-almond/40 sm:flex-row sm:text-left">
            <p>© {new Date().getFullYear()} Fusecrafts. All rights reserved.</p>
            <p>
              {brand.location} · Detail design & manufacturing
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
