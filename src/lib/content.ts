/* Central content for Ife Williams Coaching — sourced from the practice brief. */

export const site = {
  name: "Ife Williams",
  practice: "Ife Williams Coaching",
  tagline: "Compassionate, Trauma-Informed Care",
  email: "hello@ifewilliamscoaching.com",
  phone: "(555) 014-2380",
  location: "In-person & virtual sessions for clients in approved regions",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/speaking", label: "Speaking" },
  { href: "/podcast", label: "Podcast" },
  { href: "/policies", label: "Policies" },
];

export const credentials = [
  "Certified Christian Trauma Care Provider",
  "Board-Certified Youth Mental Health Coach",
  "Certified Master Trauma-Informed Care Coach",
];

export const stats = [
  { value: "20+", label: "Years of trusted coaching" },
  { value: "3", label: "Specialized certifications" },
  { value: "100%", label: "Confidential & judgment-free" },
];

/* Who this is for — problem framing */
export const struggles = [
  {
    icon: "heart",
    title: "Emotional wounds that linger",
    text: "Past and present pain, trauma, and emotional overwhelm that quietly shape how you live, relate, and rest.",
  },
  {
    icon: "sun",
    title: "Young people who are struggling",
    text: "Teens and young adults navigating anxiety, identity, anger, and the pressures of school and social life.",
  },
  {
    icon: "compass",
    title: "Seasons of distress & transition",
    text: "Spiritual distress, hard transitions, and family or relational struggles that leave you searching for steady ground.",
  },
];

export type Service = {
  slug: string;
  icon: string;
  name: string;
  summary: string;
  idealFor: string[];
  length: string;
  fee: string;
};

export const services: Service[] = [
  {
    slug: "christian-trauma-care",
    icon: "sprout",
    name: "Christian Trauma Care",
    summary:
      "Specialized support for individuals processing trauma, rooted in Christian principles and trauma-informed practices. Clients receive tools to rebuild safety, restore identity, and move toward long-term healing.",
    idealFor: [
      "Childhood trauma",
      "Emotional or relational trauma",
      "Church-related wounds",
      "Post-traumatic stress responses",
      "Emotional overwhelm",
      "Spiritual distress",
      "Life transitions",
      "Identity and purpose",
    ],
    length: "60 minutes",
    fee: "$150",
  },
  {
    slug: "youth-mental-health-coaching",
    icon: "sun",
    name: "Youth Mental Health Coaching",
    summary:
      "Board-certified coaching for adolescents and young adults navigating emotional, behavioral, and developmental challenges. Sessions are supportive, practical, and designed to help youth build resilience and confidence.",
    idealFor: [
      "Anxiety and stress",
      "Emotional regulation",
      "Anger",
      "Identity challenges",
      "School or social pressures",
    ],
    length: "45 minutes",
    fee: "$110",
  },
  {
    slug: "trauma-informed-coaching",
    icon: "compass",
    name: "Trauma & Trauma-Informed Coaching",
    summary:
      "A structured, supportive approach that helps clients understand the impact of trauma, develop coping strategies, and build emotional resilience — suitable for those seeking growth and stability without a clinical diagnosis.",
    idealFor: [
      "Trauma recovery",
      "Emotional triggers",
      "Boundary building",
      "Resilience development",
    ],
    length: "50 minutes",
    fee: "$135",
  },
];

/* Pastoral Support — listed as the 4th service offering on the PDF Welcome
 * page (described as optional, client-led, never assumed). On the Services
 * pricing page it appears as an add-on; on Home it gets a service card. */
export const pastoralSupportPreview = {
  icon: "sparkle",
  name: "Pastoral Support",
  badge: "Optional",
  summary:
    "For clients who desire it, Ife offers pastoral insight and spiritual guidance as part of the coaching process — always client-led, never assumed.",
  length: "+10–15 min",
  fee: "+$25",
};

export const addOns = [
  {
    icon: "sparkle",
    name: "Pastoral Support Add-On",
    length: "+10–15 minutes",
    fee: "+$25",
    note: "Optional pastoral insight and spiritual guidance woven into a session — always client-led, never assumed.",
  },
  {
    icon: "clipboard",
    name: "Intake & Assessment Session",
    length: "75 minutes",
    fee: "$175",
    note: "A thorough first session to understand your story, needs, and goals before ongoing coaching begins.",
  },
];

/* Full fee schedule for tables */
export const feeSchedule = [
  { service: "Christian Trauma Care", length: "60 minutes", fee: "$150" },
  { service: "Youth Mental Health Coaching", length: "45 minutes", fee: "$110" },
  {
    service: "Trauma & Trauma-Informed Coaching",
    length: "50 minutes",
    fee: "$135",
  },
  { service: "Pastoral Support Add-On", length: "+10–15 minutes", fee: "+$25" },
  { service: "Intake & Assessment Session", length: "75 minutes", fee: "$175" },
];

/* A Safe Space for Your Story — About-page principles
 * (PDF lists these specifically on the About page, separate from the Home
 * page "Safe Space for Real Healing" set; includes "Respect for pace.") */
export const aboutSafeSpace = [
  {
    icon: "lock",
    title: "Confidentiality",
    text: "Your story is protected and honored — never shared without your written consent.",
  },
  {
    icon: "shield",
    title: "Trauma-informed care",
    text: "Every session is shaped by a careful understanding of how trauma shows up in body, mind, and spirit.",
  },
  {
    icon: "sun",
    title: "Faith sensitivity",
    text: "Your spiritual beliefs are respected and integrated as desired by you — never imposed.",
  },
  {
    icon: "compass",
    title: "Practical tools for real-life change",
    text: "You leave with grounded strategies you can use long after the session ends.",
  },
  {
    icon: "heart",
    title: "Respect for each person's pace and process",
    text: "Healing isn't linear — your journey unfolds at the speed that's right for you.",
  },
];

/* A Safe Space for Real Healing — Home-page guiding principles */
export const principles = [
  {
    icon: "lock",
    title: "Confidentiality",
    text: "Your story is protected and honored — never shared without your written consent.",
  },
  {
    icon: "heart",
    title: "Compassion",
    text: "You are met with empathy, not judgment, at every step of the journey.",
  },
  {
    icon: "shield",
    title: "Trauma Awareness",
    text: "Your experiences are understood through a careful, trauma-informed lens.",
  },
  {
    icon: "sun",
    title: "Faith Sensitivity",
    text: "Your spiritual beliefs are respected and integrated only as you choose.",
  },
  {
    icon: "compass",
    title: "Practical Tools",
    text: "You receive grounded strategies you can apply in everyday life.",
  },
];

export const expertise = [
  "Trauma recovery",
  "Emotional overwhelm",
  "Youth mental health challenges",
  "Spiritual distress",
  "Identity and life transitions",
  "Family and relational struggles",
];

export const clientValues = [
  "Create a safe, judgment-free environment",
  "Integrate biblical principles with trauma-informed care",
  "Support youth and families through mental health challenges",
  "Offer practical tools for resilience, clarity, and emotional stability",
  "Provide guidance that is compassionate and non-clinically sound",
];

export const scripture = [
  {
    reference: "Isaiah 61:1–4",
    text: "To bind up the brokenhearted, to proclaim freedom, and to rebuild what has long been devastated.",
  },
  {
    reference: "Psalm 34:18",
    text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
  },
];

/* Booking */
export const bookingSteps = [
  {
    icon: "monitor",
    title: "Online Booking",
    badge: "Preferred",
    text: "Schedule your session at your convenience using our secure online booking system.",
  },
  {
    icon: "phone",
    title: "By Phone",
    text: "Call to talk through your needs and find an appointment time that works for you.",
  },
  {
    icon: "mail",
    title: "Email Request",
    text: "Send your preferred dates and times, and we'll confirm your appointment.",
  },
];

export const afterBooking = [
  "A confirmation email for your scheduled session",
  "A secure link for virtual sessions, if applicable",
  "Intake forms to complete before your first appointment",
  "Clear instructions on how to prepare for your session",
];

/* Policies */
type PolicyFlat = {
  icon: string;
  title: string;
  items: string[];
  groups?: never;
  note?: never;
};

type PolicyGroup = {
  heading: string;
  items: string[];
  tone?: "muted";
};

type PolicyGrouped = {
  icon: string;
  title: string;
  groups: PolicyGroup[];
  note?: string;
  items?: never;
};

export type Policy = PolicyFlat | PolicyGrouped;

export const policies: Policy[] = [
  {
    icon: "calendar",
    title: "Scheduling & Appointments",
    items: [
      "Sessions are available by appointment only.",
      "Appointments may be scheduled online, by phone, or by email.",
      "Intake forms must be completed before your first session.",
      "Virtual sessions are available for clients in approved regions.",
    ],
  },
  {
    icon: "clock",
    title: "Cancellation & Rescheduling",
    items: [
      "Cancellations or rescheduling must be made at least 24 hours in advance.",
      "Late cancellations (less than 24 hours) will incur a 50% session fee.",
      "No-shows will be charged the full session fee.",
      "Exceptions may be made for emergencies at the counselor's discretion.",
    ],
  },
  {
    icon: "card",
    title: "Payment",
    items: [
      "Payment is due at the time of service.",
      "Accepted: credit/debit cards and digital payments.",
      "Sliding-scale options may be available upon request.",
      "Insurance is not accepted at this time.",
      "Receipts can be provided for personal reimbursement or record-keeping.",
    ],
  },
  {
    icon: "lock",
    title: "Confidentiality",
    items: [
      "All sessions are confidential within the limits of the law.",
      "Confidentiality may be broken only if there is a risk of harm to yourself or others.",
      "Disclosure of abuse or neglect of a minor, elder, or vulnerable adult.",
      "Records subpoenaed by a court of law.",
      "Otherwise, your information is never shared without written consent.",
    ],
  },
  {
    icon: "compass",
    title: "Scope of Practice",
    groups: [
      {
        heading: "Ife Williams provides",
        items: [
          "Christian trauma care",
          "Youth mental health coaching",
          "Trauma and trauma-informed coaching",
          "Optional pastoral support",
        ],
      },
      {
        heading: "He does not provide",
        items: [
          "Clinical diagnosis",
          "Medication management",
          "Court-ordered evaluations",
          "Legal or forensic reports",
        ],
        tone: "muted" as const,
      },
    ],
    note: "Clients requiring clinical or medical intervention may be referred to appropriate licensed professionals.",
  },
  {
    icon: "monitor",
    title: "Virtual Sessions",
    items: [
      "A stable internet connection is required.",
      "Clients must be in a private, quiet space.",
      "Sessions may not be recorded by either party.",
      "Secure links are provided upon booking confirmation.",
    ],
  },
  {
    icon: "file",
    title: "Documentation Requests",
    items: [
      "Letters, summaries, or other documentation may be provided upon request.",
      "Fees may apply depending on the time required to prepare documents.",
    ],
  },
  {
    icon: "leaf",
    title: "Commitment to a Safe Space",
    items: [
      "A respectful, judgment-free environment.",
      "Trauma-informed care in every session.",
      "Faith-sensitive support, as desired by the client.",
      "Professional boundaries and ethical standards.",
    ],
  },
];

/* Speaking — page modeled on jessicahottle.com/speaking/ structure
 * (hero → bio → signature message + topics → testimonials → media → CTA + form)
 * Testimonials below are role-attributed placeholders — swap in real
 * endorsements when available. */
export const speaking = {
  hero: {
    eyebrow: "Speaking & Events",
    title: "Christian speaker for healing, identity, and youth mental health.",
    description:
      "Invite Ife to speak at your next church service, conference, retreat, school, or community gathering — bringing trauma-informed insight and faith-rooted hope to every room.",
  },
  bookingEmail: "speaking@ifewilliamscoaching.com",
  bio: {
    eyebrow: "Meet the Speaker",
    title:
      "A pastor, trauma-informed coach, and host of Rebuilding Broken Walls.",
    paragraphs: [
      "With more than two decades walking with individuals, youth, and families through some of life's hardest seasons, Ife Williams brings a rare blend of pastoral warmth, lived wisdom, and clinically-grounded insight to every stage he steps onto.",
      "He is a Certified Christian Trauma Care Provider, Board-Certified Youth Mental Health Coach, and Certified Master Trauma-Informed Care Coach — and the voice behind Rebuilding Broken Walls, a weekly podcast on healing, identity, and spiritual restoration for youth and young adults.",
      "When Ife speaks, he carries one core conviction with him: healing is possible, and no one has to walk through it alone.",
    ],
  },
  signature: {
    eyebrow: "Signature Message",
    title: "Rebuilding the Broken Places — where faith and healing meet.",
    tagline:
      "(A place where trauma-aware care and grounded faith intersect.)",
    core: "What we believe about God — and what we think God believes about us — shapes how we hold our pain, how we see ourselves, and ultimately how we heal.",
    body: "Drawing from Isaiah 61 and Psalm 34:18, Ife helps audiences process trauma, untangle identity, and rebuild what has been broken with strength, dignity, and hope.",
    topics: [
      { icon: "sprout", title: "Trauma & the path to healing" },
      {
        icon: "sun",
        title: "Identity in Christ vs. identity in culture",
      },
      { icon: "heart", title: "Youth mental health & resilience" },
      { icon: "shield", title: "Rebuilding confidence after pain" },
      { icon: "compass", title: "Faith in hard seasons" },
      {
        icon: "star",
        title: "Walking in purpose when you feel unqualified",
      },
      { icon: "sparkle", title: "The mind-body-spirit connection" },
      {
        icon: "leaf",
        title: "Forgiveness, boundaries, and trust-rebuilding",
      },
    ],
  },
  testimonials: [
    {
      quote:
        "From the planning conversations through the final session, Ife was steady, prepared, and deeply present. Our women left with practical tools and a renewed sense of hope — every part of the weekend was shaped by his care.",
      attribution: "Retreat Director, Women's Ministry",
    },
    {
      quote:
        "Ife has a remarkable way of holding space for young people without softening hard truths. Our teens didn't just listen — they engaged, asked honest questions, and walked away talking about identity and healing for weeks afterward.",
      attribution: "Youth Pastor, Community Church",
    },
  ],
  media: {
    eyebrow: "On the Podcast",
    title: "Rebuilding Broken Walls — Ife's own weekly show.",
    description:
      "Each episode is a window into the voice and posture audiences experience in person — biblical wisdom, trauma-informed insight, and the kind of real conversation that gives hope.",
  },
  contact: {
    eyebrow: "Book Ife to Speak",
    title: "Bring healing, honesty, and hope to your next event.",
    description:
      "Available for church gatherings, conferences, retreats, schools, online events, and intimate workshops — in-person and virtual.",
  },
  formOptions: {
    eventTypes: [
      "Church gathering",
      "Conference / summit",
      "Non-profit organization",
      "School / youth event",
      "Workshop / retreat",
      "Podcast / interview",
      "Other",
    ],
    attendance: [
      "Under 100",
      "100 – 500",
      "500 – 1,000",
      "1,000 – 2,500",
      "2,500+",
    ],
    formats: ["In-person", "Virtual", "Either is fine"],
    budgets: [
      "Under $1,000",
      "$1,000 – $2,500",
      "$2,500 – $5,000",
      "$5,000 – $10,000",
      "$10,000+",
      "Open / let's discuss",
    ],
    hearAbout: [
      "Rebuilding Broken Walls podcast",
      "Referred by someone",
      "Social media",
      "Search",
      "Past event",
      "Other",
    ],
  },
};

/* Podcast — Rebuilding Broken Walls */
export const podcast = {
  name: "Rebuilding Broken Walls",
  tagline:
    "A weekly podcast hosted by Ife Williams — healing, identity, and spiritual restoration for youth and young adults.",
  about:
    "Rebuilding Broken Walls speaks to the silent battles young people and adults carry — trauma, identity confusion, emotional wounds, and spiritual struggles. Through teaching, storytelling, and practical guidance, each episode helps listeners take real steps toward hope.",
  helps: [
    "Heal from past and present pain",
    "Understand their identity in Christ",
    "Build emotional and spiritual resilience",
    "Navigate relationships, purpose, and faith",
    "Experience hope, restoration, and transformation",
  ],
  episodes: [
    {
      n: "01",
      title: "Healing the Broken Places",
      blurb:
        "Where healing begins — naming the wounds we carry and the safety it takes to face them.",
    },
    {
      n: "02",
      title: "Identity in Christ vs. Identity in Culture",
      blurb:
        "Untangling who the world says you are from who you were created to be.",
    },
    {
      n: "03",
      title: "Overcoming Silent Trauma",
      blurb:
        "The pain no one sees — and the trauma-informed path toward release.",
    },
    {
      n: "04",
      title: "Faith in Hard Seasons",
      blurb:
        "Holding on to hope when God feels distant and the road feels long.",
    },
    {
      n: "05",
      title: "Rebuilding Confidence After Pain",
      blurb:
        "Practical steps to rediscover strength, voice, and steady footing.",
    },
    {
      n: "06",
      title: "Walking in Purpose When You Feel Unqualified",
      blurb:
        "Moving forward with courage, even before you feel ready.",
    },
  ],
};
