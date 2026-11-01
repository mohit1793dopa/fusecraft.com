export const navLinks = [
  { href: "/", label: "Index" },
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/workshop", label: "Workshop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

/** Compact header tabs — logo covers home; Inquire covers contact */
export const primaryNav = [
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/workshop", label: "Workshop" },
  { href: "/about", label: "About" },
] as const;

export const brand = {
  name: "Fusecrafts",
  location: "Nagpur, India",
  mapsUrl:
    "https://www.google.com/maps/place/Fusecrafts+Pvt.+Ltd./data=!4m2!3m1!1s0x0:0x85c79e8dd6279691?sa=X&ved=1t:2428&ictx=111",
  address: "Plot No. M-17, M.I.D.C., Nagpur, Maharashtra 440016",
  est: "2022",
  email: "fusecraftsngp@gmail.com",
  phone: "+91 73870 49951",
  linkedin: "https://www.linkedin.com/company/fusecrafts-pvt-ltd/",
  instagram: "https://www.instagram.com/fusecrafts?srtk=MThhbnJtaDF6Mmp3Nw==",
  tagline:
    "Fusion is the discipline. Combination is the craft. Detail is where fusion proves itself.",
  subTagline: "Combination is the craft.",
  heroLine: "Detail is a discipline, not a finishing touch.",
  pitch:
    "A detail design and manufacturing studio for the in-betweens of architectural work. We enter early, combine materials and crafts with intent, and make what we draw.",
} as const;

/** Shared hero CTAs — one primary path + one conversion (avoids redundant links) */
export const heroCtas = [
  { href: "/work", label: "Selected work", primary: true },
  { href: "/contact", label: "Start a project", primary: false },
] as const;

export const heroSlides = [
  {
    image: "/images/hero-interior.jpg",
    eyebrow: "Detail design & manufacturing · Nagpur",
    title: "Detail is a discipline, not a finishing touch.",
    support:
      "We begin where others end — resolving the in-betweens of architectural work with intent.",
  },
  {
    image: "/images/hero-dining.jpg",
    eyebrow: "Facade · Lighting · Furniture · Partitions",
    title: "Fusion is the discipline.",
    support:
      "Combination is the craft. Materials, techniques, and trades brought together until the piece is right.",
  },
  {
    image: "/images/hero-workshop.jpg",
    eyebrow: "Est. 2022 — Dedicated workshop in Nagpur",
    title: "Architectural thinking at the object scale.",
    support:
      "We enter early, while drawings are still being made, and stay through to what gets built.",
  },
] as const;

export const categories = [
  { slug: "beds", title: "Beds", image: "/images/browse-by-craft/beds.jpg", href: "/craft/beds" },
  { slug: "chairs", title: "Chairs", image: "/images/browse-by-craft/chairs.jpg", href: "/craft/chairs" },
  { slug: "doors", title: "Doors", image: "/images/browse-by-craft/doors.jpg", href: "/craft/doors" },
  { slug: "swings", title: "Swings", image: "/images/browse-by-craft/jhula.jpg", href: "/craft/swings" },
  { slug: "lightings", title: "Lightings", image: "/images/browse-by-craft/lightings.jpg", href: "/craft/lightings" },
  { slug: "partitions", title: "Partitions", image: "/images/browse-by-craft/partitions.jpg", href: "/craft/partitions" },
  { slug: "sofa", title: "Sofa", image: "/images/browse-by-craft/sofa.jpg", href: "/craft/sofa" },
  { slug: "tables", title: "Tables", image: "/images/browse-by-craft/tables.jpg", href: "/craft/tables" },
  { slug: "accessories", title: "Accessories", image: "/images/browse-by-craft/handles.jpg", href: "/craft/accessories" },
  { slug: "console-units", title: "Console Units", image: "/images/browse-by-craft/tv-and-console-units.jpg", href: "/craft/console-units" },
  { slug: "facades", title: "Facades", image: "/images/browse-by-craft/facade-corten.jpg", href: "/craft/facades" },
  { slug: "railings", title: "Railings", image: "/images/browse-by-craft/railing-design.jpg", href: "/craft/railings" },
  { slug: "benches", title: "Benches", image: "/images/browse-by-craft/benches.jpg", href: "/craft/benches" },
  { slug: "wardrobes", title: "Wardrobes", image: "/images/browse-by-craft/wardrobe-handles.jpg", href: "/craft/wardrobes" },
  { slug: "sculptures", title: "Sculptures", image: "/images/browse-by-craft/sculptures-totem.jpg", href: "/craft/sculptures" },
] as const;

/** Home showcase — projects & products. Tags never repeat kind (shown via CTA). */
export const showcaseSlides = [
  {
    kind: "project" as const,
    title: "Matra | Monochrome Studio",
    blurb: "Outdoor furniture and landscape seating resolved as one terrace.",
    tags: ["Furniture design"],
    image: "/images/slider/projects-01.jpg",
    primary: { href: "/projects/matra-cafe", label: "View project" },
    secondary: { href: "/projects", label: "All projects" },
    featuredIn: {
      name: "Architectural Digest",
      logo: "/images/featured-in/architectural-digest.png",
    },
  },
  {
    kind: "project" as const,
    title: "Residence in rhythm",
    blurb: "Living furniture and joinery designed to the plan of the home.",
    tags: ["Furniture design"],
    image: "/images/slider/projects-02.jpg",
    primary: { href: "/projects/akbr-residence", label: "View project" },
    secondary: { href: "/projects", label: "All projects" },
  },
  {
    kind: "project" as const,
    title: "The whispering palms",
    blurb: "Entry doors and thresholds finished as architecture — not catalogue hardware.",
    tags: ["Doors", "Entryway"],
    image: "/images/slider/projects-03.jpg",
    primary: { href: "/projects/fidvi-residence", label: "View project" },
    secondary: { href: "/projects", label: "All projects" },
  },
  {
    kind: "product" as const,
    title: "Folds of ochre",
    blurb:
      "A bold, sculptural metal chair where seamless geometry meets vibrant colour and contemporary craftsmanship.",
    tags: ["Chairs", "Metal"],
    image: "/images/slider/products-objects.jpg",
    primary: { href: "/craft/chairs", label: "View chairs" },
    secondary: { href: "/craft/chairs", label: "Explore" },
  },
  {
    kind: "product" as const,
    title: "Mehr",
    blurb:
      "Inspired by affection and understated royal charm. A timeless blend of carved elegance, intricate upholstery, and warm wood, celebrating heritage craftsmanship with contemporary comfort.",
    tags: ["Beds", "Bedroom"],
    image: "/images/slider/products-02.jpg",
    primary: { href: "/craft/beds", label: "View beds" },
    secondary: { href: "/craft/beds", label: "Explore" },
  },
  {
    kind: "product" as const,
    title: "Oblique",
    blurb: "A distinctive play of geometry and curves.",
    tags: ["Tables", "Furniture"],
    image: "/images/slider/products-01.jpg",
    primary: { href: "/craft/tables", label: "View tables" },
    secondary: { href: "/craft/tables", label: "Explore" },
  },
] as const;

/** @deprecated use showcaseSlides */
export const roomPanels = showcaseSlides.map((s) => ({
  title: s.title,
  image: s.image,
  href: s.primary.href,
  cta: s.primary.label,
}));

export const disciplines = [
  {
    slug: "beds",
    title: "Beds",
    note: "Bedroom pieces resolved to the plan — frame, finish, and proportion.",
    image: "/images/browse-by-craft/beds.jpg",
  },
  {
    slug: "chairs",
    title: "Chairs",
    note: "Seating built for daily use — clear form, honest materials.",
    image: "/images/browse-by-craft/chairs.jpg",
  },
  {
    slug: "doors",
    title: "Doors",
    note: "Thresholds and entries finished as architecture.",
    image: "/images/browse-by-craft/doors.jpg",
  },
  {
    slug: "jhula",
    title: "Jhula",
    note: "Swing seating crafted for lounges and covered outdoor rooms.",
    image: "/images/browse-by-craft/jhula.jpg",
  },
  {
    slug: "lightings",
    title: "Lightings",
    note: "Fixtures tuned to the room — scale, glow, and metalwork as one.",
    image: "/images/browse-by-craft/lightings.jpg",
  },
  {
    slug: "partitions",
    title: "Partitions",
    note: "Screens and divides that hold space without closing it.",
    image: "/images/browse-by-craft/partitions.jpg",
  },
  {
    slug: "sofa",
    title: "Sofa",
    note: "Lounge volumes tuned to the room — soft structure, workshop finish.",
    image: "/images/browse-by-craft/sofa.jpg",
  },
  {
    slug: "tables",
    title: "Tables",
    note: "Surfaces and bases resolved as one continuous detail.",
    image: "/images/browse-by-craft/tables.jpg",
  },
] as const;

export const works = [
  {
    slug: "beds",
    title: "Beds",
    category: "Collection",
    discipline: "beds",
    materials: "Wood · Upholstery",
    image: "/images/browse-by-craft/beds.jpg",
    href: "/craft/beds",
    blurb:
      "Bedroom pieces resolved to the plan — frame, finish, and proportion as one.",
  },
  {
    slug: "chairs",
    title: "Chairs",
    category: "Collection",
    discipline: "chairs",
    materials: "Wood · Finish",
    image: "/images/browse-by-craft/chairs.jpg",
    href: "/craft/chairs",
    blurb:
      "Seating built for daily use — clear form, honest materials, workshop joinery.",
  },
  {
    slug: "doors",
    title: "Doors",
    category: "Collection",
    discipline: "doors",
    materials: "Wood · Metal",
    image: "/images/browse-by-craft/doors.jpg",
    href: "/craft/doors",
    blurb:
      "Entries and thresholds finished as architecture — not catalogue hardware.",
  },
  {
    slug: "swings",
    title: "Swings",
    category: "Collection",
    discipline: "swings",
    materials: "Wood · Rope",
    image: "/images/browse-by-craft/jhula.jpg",
    href: "/craft/swings",
    blurb:
      "Swing seating with a calm silhouette — for lounges and covered outdoor rooms.",
  },
  {
    slug: "lightings",
    title: "Lightings",
    category: "Collection",
    discipline: "lightings",
    materials: "Metal · Glass",
    image: "/images/browse-by-craft/lightings.jpg",
    href: "/craft/lightings",
    blurb:
      "Ceiling and lobby light designed as architecture — scale, glow, and metalwork.",
  },
  {
    slug: "partitions",
    title: "Partitions",
    category: "Collection",
    discipline: "partitions",
    materials: "Wood · Screen",
    image: "/images/browse-by-craft/partitions.jpg",
    href: "/craft/partitions",
    blurb:
      "Screens and divides that hold space without closing it — grain and joinery in plane.",
  },
  {
    slug: "sofa",
    title: "Sofa",
    category: "Collection",
    discipline: "sofa",
    materials: "Wood · Fabric",
    image: "/images/browse-by-craft/sofa.jpg",
    href: "/craft/sofa",
    blurb:
      "Lounge pieces resolved for the room’s scale — soft volume, firm structure.",
  },
  {
    slug: "tables",
    title: "Tables",
    category: "Collection",
    discipline: "tables",
    materials: "Wood · Stone",
    image: "/images/browse-by-craft/tables.jpg",
    href: "/craft/tables",
    blurb:
      "Center and dining tables built to the plan — surface, edge, and base as one.",
  },
  {
    slug: "accessories",
    title: "Accessories",
    category: "Collection",
    discipline: "accessories",
    materials: "Brass · Cast Metal · Wood",
    image: "/images/browse-by-craft/handles.jpg",
    href: "/craft/accessories",
    blurb:
      "Bespoke architectural handles, hardware, and tactile details finished in our workshop.",
  },
  {
    slug: "console-units",
    title: "Console Units",
    category: "Collection",
    discipline: "console-units",
    materials: "Walnut · Brass · Marble",
    image: "/images/browse-by-craft/tv-and-console-units.jpg",
    href: "/craft/console-units",
    blurb:
      "Architectural feature panels and bespoke console units crafted for living spaces.",
  },
  {
    slug: "facades",
    title: "Facades",
    category: "Collection",
    discipline: "facades",
    materials: "Metal · Louvers",
    image: "/images/browse-by-craft/facade-corten.jpg",
    href: "/craft/facades",
    blurb:
      "Exterior screens and architectural envelopes resolved to the building envelope.",
  },
  {
    slug: "railings",
    title: "Railings",
    category: "Collection",
    discipline: "railings",
    materials: "Steel · Glass · Timber",
    image: "/images/browse-by-craft/railing-design.jpg",
    href: "/craft/railings",
    blurb:
      "Stair, balcony, and mezzanine balustrades resolved with clean sightlines.",
  },
  {
    slug: "benches",
    title: "Benches",
    category: "Collection",
    discipline: "benches",
    materials: "Mild Steel · Seasoned Timber",
    image: "/images/browse-by-craft/benches.jpg",
    href: "/craft/benches",
    blurb:
      "Architectural indoor and outdoor benches crafted with metal framing and precision timber.",
  },
  {
    slug: "wardrobes",
    title: "Wardrobes",
    category: "Collection",
    discipline: "wardrobes",
    materials: "Veneer · Brass · Fluted Timber",
    image: "/images/browse-by-craft/wardrobe-handles.jpg",
    href: "/craft/wardrobes",
    blurb:
      "Full-height bespoke wardrobes and architectural storage tailored to the room's millwork.",
  },
  {
    slug: "sculptures",
    title: "Sculptures",
    category: "Collection",
    discipline: "sculptures",
    materials: "Cast Metal · Patina Brass",
    image: "/images/browse-by-craft/sculptures-totem.jpg",
    href: "/craft/sculptures",
    blurb:
      "Free-standing and wall-mounted sculptural objects crafted in metal and stone.",
  },
] as const;

export const materials = [
  {
    name: "Wood",
    note: "Grain as structure, not decoration.",
    image: "/images/material-wood.jpg",
  },
  {
    name: "Metal",
    note: "Warm brass and steel that age with the room.",
    image: "/images/workshop/gallery/IMG_4376.jpg",
  },
  {
    name: "Stone",
    note: "Mass and coolness as counterweight.",
    image: "/images/material-stone.jpg",
  },
  {
    name: "Rattan",
    note: "Breath and tactility in open weave.",
    image: "/images/craft/jhula/jhula/main.jpg",
  },
] as const;

/** Named projects — hover list + detail pages */
export const projectSectors = [
  {
    slug: "matra-cafe",
    title: "Matra",
    tag: "Commercial",
    label: "Outdoor seating · tables · chair",
    location: "Nagpur, India",
    area: "~2,400 sq ft outdoor dining",
    scope: "Outdoor furniture · custom tables · metal seating",
    collaborator: "Monochrome Studio",
    blurb:
      "Outdoor dining furniture and communal tables designed as part of the terrace landscape.",
    body: "Matra’s outdoor furniture was developed with Monochrome Studio as a continuous outdoor dining environment, not a set of drop-in pieces. Rounded metal chairs with curved backs and armrests take a signature green finish that ties seating to the planting and gravel around them. Tall stools for high counters keep the same light silhouette, while timber-slatted tabletops warm the concrete base. The large communal table integrates a central planter so furniture and landscape share one centreline. Powder-coated metal, timber, and soft seating were chosen for weather, daily turnover, and a playful but calm terrace character — repeated forms, soft edges, and green accents that read as one outdoor room.",
    image: "/images/project-media/matra-cafe/cover.jpg",
    cover: "/images/project-media/matra-cafe/cover.jpg",
    gallery: [
      "/images/project-media/matra-cafe/01.jpg",
      "/images/project-media/matra-cafe/02.jpg",
      "/images/project-media/matra-cafe/03.jpg",
      "/images/project-media/matra-cafe/04.jpg",
      "/images/project-media/matra-cafe/05.jpg",
      "/images/project-media/matra-cafe/06.jpg"
    ],
    catalog: [
      "/images/project-media/matra-cafe/catalog/1.jpeg",
      "/images/project-media/matra-cafe/catalog/2.jpeg",
      "/images/project-media/matra-cafe/catalog/3.jpeg",
      "/images/project-media/matra-cafe/catalog/4.jpeg",
      "/images/project-media/matra-cafe/catalog/5.jpeg",
      "/images/project-media/matra-cafe/catalog/6.jpeg",
      "/images/project-media/matra-cafe/catalog/7.jpeg",
      "/images/project-media/matra-cafe/catalog/8.jpeg",
      "/images/project-media/matra-cafe/catalog/9.jpeg"
    ],
    color: "#31331F",
  },
  {
    slug: "akbr-residence",
    title: "Residence in rhythm",
    tag: "Residential",
    label: "Living · dining · sleep",
    location: "Nagpur, India",
    area: "Private residence",
    scope: "Custom furniture · joinery · room objects",
    blurb:
      "Living, dining, and bedroom pieces tailored to the architectural plan.",
    body: "At Akbar Residence we entered as furniture and detail partners to the architectural plan, designing objects that hold their place in living, dining, and sleep rather than reading as catalogue add-ons. Consoles, seating, and storage follow the rooms’ proportions, material grain, and how the family moves between them. Edges, heights, and finishes were resolved for daily use — soft enough for home life, precise enough to sit next to architecture. The work stays quiet: wood, metal, and soft surfaces tuned so each piece feels inevitable in its corner of the house, not decorative afterthought.",
    image: "/images/project-media/akbr-residence/cover.jpg",
    cover: "/images/project-media/akbr-residence/cover.jpg",
    gallery: [
      "/images/project-media/akbr-residence/01.jpg",
      "/images/project-media/akbr-residence/02.jpg",
      "/images/project-media/akbr-residence/03.jpg",
      "/images/project-media/akbr-residence/04.jpg",
      "/images/project-media/akbr-residence/05.jpg",
      "/images/project-media/akbr-residence/06.jpg"
    ],
    catalog: [
      "/images/project-media/akbr-residence/catalog/01.jpg",
      "/images/project-media/akbr-residence/catalog/02.jpg",
      "/images/project-media/akbr-residence/catalog/03.jpg",
      "/images/project-media/akbr-residence/catalog/04.jpg",
      "/images/project-media/akbr-residence/catalog/05.jpg",
      "/images/project-media/akbr-residence/catalog/06.jpg",
      "/images/project-media/akbr-residence/catalog/07.jpg",
      "/images/project-media/akbr-residence/catalog/08.jpg"
    ],
    color: "#6F5947",
  },
  {
    slug: "fc-clap",
    title: "Clap - All day diner",
    tag: "Commercial",
    label: "Restaurant furniture · joinery · brand colour",
    location: "Nagpur, India",
    area: "Neighbourhood restaurant",
    scope: "Dining chairs · stools · tables · ceiling accents",
    blurb:
      "Diner seating, communal tables, and timber joinery in signature brand red.",
    body: "FC Clap is a contemporary burger restaurant built around a clear material language: deep red, natural wood, cream upholstery, black metal, and exposed brick. We designed the furniture as the brand’s daily touchpoints — wooden dining chairs with cream seats and red backs, slim metal stools for the bar, and rounded tables that keep circulation open. The sculptural communal table uses a wooden base with red vertical detailing so a functional centrepiece also carries identity. Ceiling work folds lighting and signage into a red metal grid, tying overhead architecture back to the furniture palette. The approach is repetition and contrast over decoration: curves, warm timber, and red accents that feel youthful, durable, and ready for everyday dining.",
    image: "/images/project-media/fc-clap/cover.jpg",
    cover: "/images/project-media/fc-clap/cover.jpg",
    gallery: [
      "/images/project-media/fc-clap/01.jpg",
      "/images/project-media/fc-clap/02.jpg"
    ],
    catalog: [
      "/images/project-media/fc-clap/catalog/01.jpg",
      "/images/project-media/fc-clap/catalog/02.jpg",
      "/images/project-media/fc-clap/catalog/03.jpg",
      "/images/project-media/fc-clap/catalog/04.jpg",
      "/images/project-media/fc-clap/catalog/05.jpg"
    ],
    color: "#8B4F35",
  },
  {
    slug: "riwayat-fine-dining",
    title: "Riwayet fine dine",
    tag: "Commercial",
    label: "Dining chairs · ceiling · cultural detail",
    location: "Nagpur, India",
    area: "Fine-dining restaurant",
    scope: "Custom chairs · patterned ceiling · brass accents",
    blurb:
      "Fine dining seating and custom ceiling fixtures translated from heritage details.",
    body: "Riwayat Dining interprets Indian cultural dining heritage through pattern, craft, and colour without becoming a period set. A deep blue and antique-gold palette sits on warm timber and quiet walls. We designed metal-framed dining chairs with blue upholstery and hand-painted floral motifs, softened by curved gold-toned elements that echo brass accents in the room. The ceiling becomes a decorative canopy — modular patterned panels in gold frames with warm pendant lanterns — so the overhead plane carries as much identity as the walls. Calligraphic gold works on the blue feature wall set rhythm across the dining hall. Furniture, ceiling, artwork, and light work as one layered story of ‘riwayat’ — tradition held in contemporary, serviceable form.",
    image: "/images/project-media/riwayat-fine-dining/cover.jpg",
    cover: "/images/project-media/riwayat-fine-dining/cover.jpg",
    gallery: [
      "/images/project-media/riwayat-fine-dining/01.jpg",
      "/images/project-media/riwayat-fine-dining/02.jpg"
    ],
    catalog: [
      "/images/project-media/riwayat-fine-dining/catalog/01.jpg",
      "/images/project-media/riwayat-fine-dining/catalog/02.jpg",
      "/images/project-media/riwayat-fine-dining/catalog/03.jpg"
    ],
    color: "#1D1E12",
  },
  {
    slug: "fidvi-residence",
    title: "The whispering palms",
    tag: "Residential",
    label: "Entry · living · custom doors",
    location: "Nagpur, India",
    area: "Private residence",
    scope: "Entry doors · furniture · architectural details",
    blurb:
      "Entrance doors, living pieces, and bespoke joinery details.",
    body: "Fidvi Residence asked for furniture and architectural details that feel permanent in a private home — especially at the threshold. We developed entry doors and living-room pieces so the first impression and the daily rooms share the same material discipline: brass and timber work, clear joinery, and finishes meant for years of use. Circulation from gate to living spaces guided proportions and hardware; living furniture was sized to the plan rather than styled as standalone objects. Detail photography of edges, panels, and fittings shows the workshop focus — not surface decoration, but doors and pieces that carry the house’s character every time someone enters or settles into a room.",
    image: "/images/project-media/fidvi-residence/cover.jpg",
    cover: "/images/project-media/fidvi-residence/cover.jpg",
    gallery: [
      "/images/project-media/fidvi-residence/01.jpg",
      "/images/project-media/fidvi-residence/02.jpg",
      "/images/project-media/fidvi-residence/03.jpg",
      "/images/project-media/fidvi-residence/04.jpg",
      "/images/project-media/fidvi-residence/05.jpg",
      "/images/project-media/fidvi-residence/06.jpg"
    ],
    catalog: [
      "/images/project-media/fidvi-residence/catalog/01.jpg",
      "/images/project-media/fidvi-residence/catalog/02.jpg",
      "/images/project-media/fidvi-residence/catalog/03.jpg",
      "/images/project-media/fidvi-residence/catalog/04.jpg",
      "/images/project-media/fidvi-residence/catalog/05.jpg",
      "/images/project-media/fidvi-residence/catalog/06.jpg",
      "/images/project-media/fidvi-residence/catalog/07.jpg",
      "/images/project-media/fidvi-residence/catalog/08.jpg"
    ],
    color: "#4B4C2E",
  },
] as const;

/** Studios & agencies we collaborate with */
export const collaborators = [
  {
    name: "Firdos Furnishers",
    role: "Furnishers",
    image: "/images/collaborators/collaboration studios logo/firdos furniture logoblack.svg",
    href: "https://firdosy.com/",
  },
  {
    name: "Studio Tint",
    role: "Design studio",
    image: "/images/collaborators/collaboration studios logo/studio tintn black.svg",
    href: "https://www.instagram.com/studiotint.co?exln=NTlxZGQ2Y2h5YXFy",
  },
  {
    name: "Venetian Design",
    role: "Mirrors & glass",
    image: "/images/collaborators/collaboration studios logo/venetian design black logo.svg",
    href: "https://www.venetiandesign.in/",
  },
  {
    name: "Stoneage Nagpur",
    role: "Stone",
    image: "/images/collaborators/collaboration studios logo/stoneage nagpur logo.svg",
    href: "https://www.instagram.com/_stone_age?rpxt=MTU1M2cxOXUyNDBsdQ==",
  },
  {
    name: "Ante Meridian Architects",
    role: "Architecture & Design",
    image: "/images/collaborators/collaboration studios logo/ante_meridian_architects_transparent.png",
    href: "https://www.instagram.com/antemeridian.architects?rpxt=bnB1dnpteTd3cXl2",
  },
  {
    name: "Earthist Landscapes",
    role: "Landscape design",
    image: "/images/collaborators/collaboration studios logo/earthist landscape logo png 1.png",
    href: "https://www.instagram.com/earthist_landscapes?mdxt=N2JxcngyYjBhbnN4",
  },
  {
    name: "Variety Enterprises",
    role: "Materials",
    image: "/images/collaborators/collaboration studios logo/variety enterprises logo.svg",
    href: "https://www.justdial.com/Nagpur/Variety-Enterprises-Near-Passport-Office-Jafar-Nagar/0712PX712-X712-211213174717-Q6F3_BZDET",
  },
  {
    name: "Moksh Lightings",
    role: "Lighting",
    image: "/images/collaborators/collaboration studios logo/moksh lighting black.svg",
    href: "https://www.instagram.com/p/DcjKI-YhxJM/",
  },
  {
    name: "Wall Souls",
    role: "Art work",
    image: "/images/collaborators/collaboration studios logo/wall souls logo.svg",
    href: "https://www.instagram.com/wall_souls/",
  },
  {
    name: "Penumbra",
    role: "Photography & Design",
    image: "/images/collaborators/collaboration studios logo/penumbra logo.png",
    href: "https://www.instagram.com/penumbra.ppl/",
  },
] as const;

/** Design journal teasers */
export const blogPosts = [
  {
    slug: "craft-stories",
    tag: "Craft Story",
    title: "We are excited to introduce the first of our craft stories",
    author: "Fusecrafts · LinkedIn",
    excerpt:
      "A deep dive into our material experiments, bespoke metalwork, and craft stories from the workshop floor.",
    image: "/images/blog/humble-handle.jpg",
    href: "https://www.linkedin.com/posts/fusecrafts-pvt-ltd_we-are-excited-to-introduce-the-first-of-activity-7225362922594562048-_1hF?utm_source=share&utm_medium=member_android&rcm=ACoAAA-m0GEBDsaRC9D2a0w6_9epeRlN-HqMQm8",
  },
  {
    slug: "designing-a-door",
    tag: "Portal Design",
    title: "Designing a door is like designing a portal",
    author: "Fusecrafts · LinkedIn",
    excerpt:
      "A threshold is architecture in motion. How material weight, hand tactile points, and joinery define the entrance.",
    image: "/images/blog/doors-thresholds.jpg",
    href: "https://www.linkedin.com/posts/fusecrafts-pvt-ltd_designing-a-door-is-like-designing-a-portal-activity-7291357288898969600-D7Eo?utm_source=share&utm_medium=member_android&rcm=ACoAAA-m0GEBDsaRC9D2a0w6_9epeRlN-HqMQm8",
  },
  {
    slug: "mockups-matter",
    tag: "Process",
    title: "Full-scale mockups before we commit to production",
    author: "Fusecrafts · LinkedIn",
    excerpt:
      "What works on paper rarely survives the workshop. We prototype until it does.",
    image: "/images/workshop/gallery/IMG_4370.jpg",
    href: "https://www.linkedin.com/company/fusecrafts-pvt-ltd/",
  },
] as const;

export const approachSteps = [
  {
    num: "01",
    title: "Enter early",
    body: "We join as a thinking partner at the design stage — not as a vendor handed fixed specs.",
  },
  {
    num: "02",
    title: "Fuse materials",
    body: "Wood with metal, stone with rattan, industrial strength with precise hand finishing.",
  },
  {
    num: "03",
    title: "Mock up & iterate",
    body: "Full-scale mockups and workshop testing until the detail belongs to the space.",
  },
  {
    num: "04",
    title: "Resolve deeply",
    body: "We do not merely build pieces to sit inside a room — we resolve them so they truly belong.",
  },
] as const;

export const messagingPillars = [
  {
    title: "Fusion is the method",
    body: "The best version of a product is rarely made from one material or one technique. It is made by combining them with intent.",
  },
  {
    title: "Present from the design stage",
    body: "The work begins while the drawings are still being made, not after they are finished.",
  },
  {
    title: "Ten years in the workshop",
    body: "A decade spent testing combinations most studios would not attempt is what makes the result dependable.",
  },
  {
    title: "One standard, every scale",
    body: "A door handle gets the same care as the room it belongs to — ten years of practice, not a policy.",
  },
] as const;

export const workshopTrades = [
  "Metalwork",
  "Painting",
  "Upholstery",
  "Carpentry",
] as const;

export const pressBrands = [
  {
    name: "Architectural Digest",
    logo: "/images/featured-in/architectural-digest.png",
  },
  {
    name: "Indian.architects",
    logo: "/images/featured-in/indian-architects.png",
  },
  {
    name: "Sylph Consultancy",
    logo: "/images/featured-in/sylph-consultancy.png",
  },
  {
    name: "The Architect's Diary",
    logo: "/images/featured-in/architects-diary.png",
  },
  {
    name: "Architect and Interiors India",
    logo: "/images/featured-in/architect-and-interiors-india.png",
  },
  {
    name: "India art n design",
    logo: "/images/featured-in/india-art-n-design.png",
  },
] as const;

/** @deprecated use pressBrands */
export const pressLogos = pressBrands.map((b) => b.name);

export const botReplies: Record<string, string> = {
  default:
    "I'm the Fusecrafts assistant. Ask about our approach, disciplines, or how to start a project.",
  approach:
    "We enter at the design stage, fuse materials and crafts with intent, mock up at full scale, and resolve every detail so it belongs to the room.",
  work: "We work across facade, lighting, furniture, and partitions — for architects, designers, and discerning clients.",
  contact:
    "Share a brief at Contact, or email fusecraftsngp@gmail.com. We typically reply within a few business days.",
  location: "Our studio is based in Nagpur, India — established 2022.",
  fusion:
    "Fusion is our methodology: combining materials, techniques, and crafts until the best version of a piece is found.",
};
