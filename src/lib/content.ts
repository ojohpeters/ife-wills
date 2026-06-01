/* Central content for Ife Williams Coaching.
 * Updated from the "Ife Williams 5.30" practice brief:
 *  - rebranded as Compassionate, Faith-Based Coaching
 *  - virtual, Scripture-guided, trauma-informed
 *  - services consolidated to One-on-One and Group Coaching
 *  - Pastoral Support removed as a separate offering
 *  - new About narrative (military + scriptures Psalm 34:18, Jeremiah 30:17,
 *    James 1:19, Colossians 3:23)
 *  - dedicated FAQ
 */

export const site = {
  name: "Ife Williams",
  practice: "Ife Williams Coaching",
  tagline: "Compassionate, Faith-Based Coaching",
  email: "hello@ifewilliamscoaching.com",
  phone: "(555) 014-2380",
  location: "Virtual sessions — accessible from anywhere",
  footerLine:
    "Compassionate, trauma-informed coaching for individuals, youth, and families — rooted in God's word, experience, and faith. Healing is possible, and you don't have to walk through it alone.",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/speaking", label: "Speaking" },
  { href: "/podcast", label: "Podcast" },
  { href: "/faq", label: "FAQ" },
  { href: "/policies", label: "Policies" },
];

export const credentials = [
  "Certified Christian Trauma Care Provider",
  "Board-Certified Youth Mental Health Coach",
  "Certified Master Trauma-Informed Care Coach",
];

export const stats = [
  { value: "20+", label: "Years walking with people" },
  { value: "3", label: "Specialized certifications" },
  { value: "100%", label: "Virtual · confidential · grace-filled" },
];

/* ============================== HOME PAGE ============================== */

export const homeHero = {
  eyebrow: "Compassionate · Faith-Based Coaching",
  title:
    "A virtual, Scripture-guided, trauma-informed coaching experience — anywhere.",
  paragraphs: [
    "For more than two decades, Ife Williams has supported individuals, youth, and families through seasons of pain, confusion, and emotional overwhelm.",
    "As a trauma-informed coach offering a biblical perspective, he provides a calm and grounded presence that helps people regain their footing. His work reflects the promise of Jeremiah 30:17 — God's commitment to heal and restore — inviting every person into a journey of hope and renewal.",
  ],
};

export const audience = {
  eyebrow: "Targeted Audience",
  title: "Adults aged 18+.",
  description:
    "Ife Williams serves adults ages 18 and older who are navigating the emotional, spiritual, and relational challenges that come with adulthood.",
  groups: [
    {
      icon: "sun",
      title: "Young adults · 18+",
      text: "Learning to manage emotions, relationships, and early life transitions.",
    },
    {
      icon: "compass",
      title: "Adults · 30+",
      text: "Facing stress, burnout, grief, or unresolved trauma.",
    },
  ],
};

export const trustedGuide = {
  eyebrow: "Why Clients Choose Ife",
  title:
    "A trusted guide for biblical healing, restoration, and emotional resilience.",
  description:
    "With decades of experience, Ife Williams supports adults through trauma, emotional overwhelm, spiritual distress, and life transitions. His approach is warm, grounded, and deeply respectful of every person's story — offering professional, confidential coaching that reflects the heart of God.",
  provides: [
    {
      icon: "lock",
      title: "A safe, judgment-free environment shaped by God's love",
    },
    {
      icon: "shield",
      title: "Trauma-informed care integrated with biblical truth",
    },
    {
      icon: "heart",
      title: "Support for adults, youth, and families facing emotional challenges",
    },
    {
      icon: "compass",
      title: "Practical tools for resilience, clarity, and emotional stability",
    },
    {
      icon: "sun",
      title: "Compassionate, non-clinical guidance rooted in Scripture",
    },
  ],
};

export const financialNote = {
  title: "Need financial help?",
  description:
    "Discounts and sliding-scale rates are available. Just reach out — we'll work out something that supports you.",
};

/* ============================ SERVICES ============================ */

export type Service = {
  slug: string;
  href: string;
  icon: string;
  name: string;
  tagline: string;
  summary: string;
  idealFor: string[];
  length: string;
  fee: string;
};

export const services: Service[] = [
  {
    slug: "one-on-one",
    href: "/services/one-on-one",
    icon: "sprout",
    name: "One-on-One Coaching",
    tagline: "A safe, faith-rooted space for healing, clarity, and renewal.",
    summary:
      "Personalized, trauma-informed coaching in a private, judgment-free space. Work directly with Ife to process your story, rebuild self-trust, and move toward healing at your own pace.",
    idealFor: [
      "Healing from past emotional wounds",
      "Navigating overwhelm, anxiety, or internal chaos",
      "Rebuilding confidence and self-trust",
      "Processing transitions, grief, or life changes",
      "Breaking old patterns and cycles",
      "Strengthening emotional resilience",
      "Integrating faith into your healing journey (optional)",
    ],
    length: "60 minutes · virtual",
    fee: "From $150 / session",
  },
  {
    slug: "group-coaching",
    href: "/services/group-coaching",
    icon: "heart",
    name: "Group Coaching",
    tagline: "Grave Mind to Grace Mind — a transformational cohort journey.",
    summary:
      "A guided 6-module group coaching program that helps you release old mental patterns, reframe your inner narrative, and live from grace, resilience, and emotional freedom — in community.",
    idealFor: [
      "Stuck in old cycles or emotional heaviness",
      "Wanting to quiet the noise in your mind",
      "Ready for a mindset shift rooted in compassion",
      "Wanting community support, not isolation",
      "Craving clarity, direction, and inner peace",
    ],
    length: "6 modules · weekly 60–90 min live",
    fee: "Cohort program — pricing on request",
  },
];

export const servicesIntro = {
  eyebrow: "Services",
  title: "Compassionate, Scripture-guided support for individuals, youth, and families.",
  description:
    "Each service provides a safe, confidential, and grace-filled environment where clients can heal, grow, and regain emotional stability — all through guidance rooted in biblical truth and tailored to each person's unique needs.",
};

export const addOns = [
  {
    icon: "clipboard",
    name: "Intake & Assessment Session",
    length: "75 minutes",
    fee: "$175",
    note: "A thorough first session to understand your story, needs, and goals before ongoing coaching begins.",
  },
];

export const feeSchedule = [
  { service: "One-on-One Coaching · Single Session", length: "60 minutes", fee: "$150" },
  { service: "One-on-One · 4-Session Bundle", length: "4 × 60 minutes", fee: "$570" },
  { service: "One-on-One · 8-Session Journey", length: "8 × 60 minutes", fee: "$1,080" },
  { service: "Group Coaching — Grave Mind to Grace Mind", length: "6 modules · weekly live", fee: "Contact for cohort pricing" },
  { service: "Intake & Assessment Session", length: "75 minutes", fee: "$175" },
];

/* ====================== ONE-ON-ONE COACHING ====================== */

export const oneOnOnePackages = [
  {
    name: "Single Session",
    fee: "$150",
    length: "60 minutes",
    perSession: null as string | null,
    description: "Perfect for clarity, processing, or immediate support.",
    highlight: false,
  },
  {
    name: "4-Session Bundle",
    fee: "$570",
    length: "4 × 60 minutes",
    perSession: "$142.50 / session",
    description: "Ideal for short-term guidance and focused breakthroughs.",
    highlight: true,
  },
  {
    name: "8-Session Journey",
    fee: "$1,080",
    length: "8 × 60 minutes",
    perSession: "$135 / session",
    description: "Best for deeper healing, transformation, and long-term support.",
    highlight: false,
  },
];

export const oneOnOne = {
  hero: {
    eyebrow: "One-on-One Coaching",
    title: "Personalized coaching for your healing journey.",
    description:
      "Work one-on-one with trauma-informed coach Ife Williams to process, rebuild, and rise with clarity and compassion.",
  },
  why: {
    eyebrow: "Why one-on-one",
    title: "A space designed just for you.",
    paragraphs: [
      "Some seasons require deeper support. One-on-one coaching with Ife offers a private, personalized environment where you can explore your story, unpack emotional weight, and move toward healing at your own pace.",
      "This is your space to breathe, process, and grow — without judgment, pressure, or pretense.",
    ],
  },
  coach: {
    eyebrow: "Meet your coach",
    title: "About Ife Williams — calm presence, grounded wisdom.",
    paragraphs: [
      "Ife is a Certified Christian Trauma Care Provider, Board-Certified Youth Mental Health Coach, and Certified Master Trauma-Informed Care Coach. He blends trauma-aware strategies with faith-aligned principles for clients who desire them.",
      "His approach is gentle, steady, and deeply compassionate — creating a safe place for emotional, mental, and spiritual restoration.",
    ],
  },
  helpsWith: {
    eyebrow: "Helps with",
    title: "Support for the seasons that feel heavy.",
    items: [
      "Healing from past emotional wounds",
      "Navigating overwhelm, anxiety, or internal chaos",
      "Rebuilding confidence and self-trust",
      "Processing transitions, grief, or life changes",
      "Breaking old patterns and cycles",
      "Strengthening emotional resilience",
      "Integrating faith into your healing journey (optional)",
    ],
    callout: "You don't have to walk through this alone.",
  },
  approach: {
    eyebrow: "Coaching approach",
    title: "Gentle. Grounded. Trauma-informed. Faith-aligned.",
    pillars: [
      {
        icon: "shield",
        title: "Trauma-aware support",
        text: "Understanding your story without pathologizing your experience.",
      },
      {
        icon: "sun",
        title: "Faith-rooted guidance",
        text: "For clients who desire spiritual integration.",
      },
      {
        icon: "heart",
        title: "Compassionate presence",
        text: "A calm, steady space where you can be fully seen.",
      },
    ],
    quote: {
      text: "Let every person be quick to listen, slow to speak, slow to anger.",
      reference: "James 1:19",
    },
  },
  experience: {
    eyebrow: "Your sessions",
    title: "What to expect in your coaching experience.",
    items: [
      {
        icon: "clock",
        title: "60-minute private sessions",
        text: "Personalized support tailored to your needs.",
      },
      {
        icon: "lock",
        title: "Confidential, judgment-free space",
        text: "Your story is honored and protected.",
      },
      {
        icon: "compass",
        title: "Practical tools & strategies",
        text: "Trauma-aware, faith-aligned, and actionable.",
      },
      {
        icon: "heart",
        title: "Gentle accountability",
        text: "Encouragement without pressure.",
      },
      {
        icon: "file",
        title: "Optional homework",
        text: "Reflection prompts, grounding exercises, or journaling.",
      },
    ],
  },
  packages: oneOnOnePackages,
  testimonials: [
    {
      quote: "Ife helped me find peace in a season where everything felt heavy.",
      attribution: "Coaching client",
    },
    {
      quote: "I've never felt so understood and supported.",
      attribution: "Coaching client",
    },
    {
      quote: "His presence alone brings calm. His guidance brings clarity.",
      attribution: "Coaching client",
    },
  ],
  faq: [
    { q: "Is this therapy?", a: "No. This is non-clinical, trauma-informed coaching." },
    { q: "Do I need to be Christian to work with Ife?", a: "No. Faith integration is optional and client-led." },
    { q: "Are sessions virtual?", a: "Yes — accessible from anywhere." },
    { q: "What if I need more intensive support?", a: "Ife can help you identify additional resources if needed." },
  ],
  finalCta: {
    eyebrow: "Begin your journey",
    title: "Ready to begin your healing journey?",
    description:
      "If you're seeking a coach who listens deeply, supports gently, and walks with you through the hard places — Ife is here.",
  },
};

/* ======================== GROUP COACHING ======================== */

export const groupCoaching = {
  hero: {
    eyebrow: "Group Coaching",
    title: "From Grave Mind to Grace Mind.",
    description:
      "A transformational group coaching experience designed to shift you from fear, stagnation, and overwhelm into clarity, compassion, and aligned living.",
  },
  what: {
    eyebrow: "What it is",
    title: "What is the Grave Mind to Grace Mind journey?",
    description:
      "A guided group coaching program that helps you release old mental patterns, reframe your inner narrative, and embody a mindset rooted in grace, resilience, and emotional freedom.",
    pillars: [
      { icon: "compass", title: "Awareness", text: "Identify the patterns keeping you stuck." },
      { icon: "leaf", title: "Reframe", text: "Rewrite your internal story." },
      { icon: "sun", title: "Embodiment", text: "Live with clarity, compassion, and purpose." },
    ],
  },
  whoFor: {
    eyebrow: "Who it's for",
    title: "Is this program right for you?",
    items: [
      "You feel stuck in old cycles or emotional heaviness",
      "You want to quiet the noise in your mind",
      "You're ready for a mindset shift rooted in compassion",
      "You want community support, not isolation",
      "You're craving clarity, direction, and inner peace",
    ],
    callout:
      "Max 20 participants per group for intimacy, connection, and personalized coaching.",
  },
  framework: {
    eyebrow: "The Framework",
    title: "The Grave → Grace Mind framework.",
    modules: [
      { n: "01", title: "Awareness", text: "Recognizing the 'grave mind.'" },
      { n: "02", title: "Release", text: "Letting go of mental clutter." },
      { n: "03", title: "Reframe", text: "Rewriting limiting narratives." },
      { n: "04", title: "Embodiment", text: "Practicing grace-based thinking." },
      { n: "05", title: "Integration", text: "Building sustainable habits." },
      { n: "06", title: "Expansion", text: "Living from alignment and purpose." },
    ],
  },
  included: {
    eyebrow: "What's included",
    title: "What you get inside the program.",
    items: [
      {
        icon: "clock",
        title: "Weekly live sessions",
        text: "60–90 minute live group coaching with Ife each week.",
      },
      {
        icon: "heart",
        title: "Max 20 participants",
        text: "An intimate cohort that fosters real connection.",
      },
      {
        icon: "file",
        title: "Worksheets & reflection prompts",
        text: "Tools you can return to between sessions.",
      },
      {
        icon: "compass",
        title: "Mindset tools & exercises",
        text: "Practical practices for grace-based thinking.",
      },
      {
        icon: "shield",
        title: "Optional accountability partners",
        text: "Walk alongside someone on the same path.",
      },
      {
        icon: "sun",
        title: "Community support",
        text: "Encouragement and presence from your cohort.",
      },
      {
        icon: "sparkle",
        title: "Bonus resources",
        text: "Guided meditations, breathwork, and more.",
      },
    ],
  },
  outcomes: {
    eyebrow: "Your transformation",
    title: "From internal heaviness to internal harmony.",
    description:
      "By the end of this program, you will experience a meaningful shift in how you think, feel, and move through everyday life.",
    items: [
      "A calmer, clearer mind",
      "Emotional resilience",
      "Renewed confidence",
      "Self-compassion",
      "Purpose-aligned decision-making",
      "Sustainable mindset tools",
    ],
  },
  pricing: {
    eyebrow: "Enroll",
    title: "Join the next cohort.",
    description:
      "Enrollment is limited to 20 participants to ensure a personalized and supportive experience.",
    note: "Payment plans available. Need financial help? Discounts are available — reach out and we'll work out something that supports you.",
  },
  faq: [
    { q: "How long is the program?", a: "Six modules delivered as weekly live sessions, with optional integration time at the end of each phase." },
    { q: "What if I miss a session?", a: "Each live session is recorded and shared with cohort members so you can catch up at your own pace." },
    { q: "Is there homework?", a: "There are optional reflection prompts and exercises between sessions — never required, always supportive." },
    { q: "What level of support do I get?", a: "Live weekly coaching, cohort community, and worksheets — plus optional accountability partners." },
    { q: "What if I'm new to coaching?", a: "You're more than welcome. The program is designed to meet you exactly where you are." },
  ],
  finalCta: {
    eyebrow: "Ready to begin?",
    title: "Ready to shift from grave mind to grace mind?",
    description:
      "Reserve your seat in the next cohort, or book a discovery call to see if it's the right fit.",
  },
};

/* ============================ FAQ PAGE ============================ */

export const faqs = [
  {
    q: "What type of support do you offer?",
    a: "I provide virtual, Scripture-guided coaching for adults, youth, and families. My focus is emotional stability, spiritual clarity, and personal growth through biblically grounded guidance.",
  },
  {
    q: "Is this counseling or therapy?",
    a: "No. This is non-clinical, faith-based coaching. While I am also a pastor, coaching is a professional and confidential service — not a ministry or therapy.",
  },
  {
    q: "Do I need to be a Christian to work with you?",
    a: "No. Anyone is welcome. I offer biblical guidance for those who desire it, but I always respect each person's beliefs and comfort level.",
  },
  {
    q: "How are sessions conducted?",
    a: "All sessions are virtual, allowing you to receive support from anywhere with privacy and convenience.",
  },
  {
    q: "What ages do you work with?",
    a: "I serve adults ages 18+, as well as youth and families seeking biblical guidance and emotional support.",
  },
  {
    q: "What can I expect in a session?",
    a: "A calm, respectful, and judgment-free space where we explore your concerns, apply biblical principles, and develop practical tools for emotional and spiritual resilience.",
  },
  {
    q: "How much do sessions cost?",
    a: "Rates vary based on the service. If finances are a concern, assistance and reduced-rate options are available. Simply reach out, and we'll find a solution that fits your situation.",
  },
  {
    q: "Is everything confidential?",
    a: "Yes. Your privacy is honored and protected. Sessions are confidential and handled with care, respect, and integrity.",
  },
  {
    q: "How do I get started?",
    a: "You can contact me to schedule a consultation. We'll discuss your needs and determine the best path forward.",
  },
];

/* ============================= ABOUT PAGE ============================= */

export const aboutContent = {
  hero: {
    eyebrow: "About Ife Williams",
    title: "Some people carry a presence that feels like peace.",
    lines: [
      "A steady voice.",
      "A grounded spirit.",
      "A quiet reminder that healing is possible.",
    ],
    closing: "For many, Ife Williams is that presence.",
  },
  journey: {
    eyebrow: "His journey",
    paragraphs: [
      "His journey into trauma-informed care didn't begin with textbooks or certifications. It began in the real world — in moments where people's pain met their hope, where silence spoke louder than words, and where God's compassion nudged him to sit with others in their hardest seasons.",
      "Long before he became a coach, Ife learned to listen deeply — to see the story behind the struggle, and to believe, wholeheartedly, in the truth of Psalm 34:18.",
    ],
    scripture: {
      reference: "Psalm 34:18",
      text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
    },
    closing: "That belief became his calling. That calling became his mission.",
  },
  foundation: {
    eyebrow: "Foundation",
    title: "A Foundation Built on Faith and Understanding.",
    paragraphs: [
      "Today, Ife is a Certified Christian Trauma Care Provider, Board-Certified Youth Mental Health Coach, and Certified Master Trauma-Informed Care Coach. But titles alone don't define him.",
      "What sets him apart is the rare blend of non-clinical understanding, spiritual insight, and compassionate presence that shapes every session.",
      "His coaching rests on a simple truth: every person deserves a safe place to heal, grow, and rediscover hope.",
    ],
    scripture: {
      reference: "Jeremiah 30:17",
      text: "For I will restore health to you, and your wounds I will heal, declares the Lord.",
    },
  },
  approach: {
    eyebrow: "Approach",
    title: "A gentle, grounded approach.",
    paragraphs: [
      "Ife's style is calm, steady, and deeply informed. He integrates trauma-aware strategies with faith-aligned principles for clients who desire them, creating a space where emotional, mental, and spiritual restoration can coexist.",
    ],
    whether: [
      "untangling the weight of past wounds",
      "navigating emotional overwhelm",
      "searching for clarity in a difficult season",
    ],
    closing: "…Ife meets them with patience and wisdom, guided by James 1:19.",
    scripture: {
      reference: "James 1:19",
      text: "Let every person be quick to listen, slow to speak, slow to anger.",
    },
    afterScripture:
      "His presence reminds clients that they are not alone — and that healing is not only possible, but promised.",
  },
  service: {
    eyebrow: "A life shaped by service",
    title: "Industries, military, and a foundation built outside the office.",
    intro:
      "Before stepping fully into trauma-informed coaching, Ife built a diverse professional foundation across several demanding industries:",
    industries: [
      { icon: "card", label: "Banking & Finance" },
      { icon: "heart", label: "Healthcare" },
      { icon: "compass", label: "Logistics" },
      { icon: "sparkle", label: "Aviation" },
    ],
    body:
      "Each field sharpened his ability to understand people, systems, and the pressures that shape everyday life.",
    military:
      "He also proudly served in the United States Air Force National Guard, where discipline, resilience, and service became more than values — they became part of his identity.",
    scripture: {
      reference: "Colossians 3:23",
      text: "Whatever you do, work heartily, as for the Lord and not for men.",
    },
  },
  why: {
    eyebrow: "Why he does this work",
    title: "Healing isn't a straight line. It's a process.",
    paragraphs: [
      "Ife's journey has taught him that healing isn't a straight line. It's a process — one that requires being seen, supported, and strengthened.",
      "His mission is to walk with people through that process gently, intentionally, and with unwavering compassion.",
    ],
    invitations: [
      "For those seeking a coach who understands both the complexity of trauma and the power of faith…",
      "For those who want a guide who listens without judgment and leads with empathy…",
      "For those ready to begin again…",
    ],
    closing:
      "Ife Williams is here to walk with you — trusting in the God who heals, restores, and renews.",
  },
};

/* Used by Home & elsewhere */
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
    title: "Trauma awareness",
    text: "Your experiences are understood through a careful, trauma-informed lens.",
  },
  {
    icon: "sun",
    title: "Faith sensitivity",
    text: "Your spiritual beliefs are respected and integrated only as you choose.",
  },
  {
    icon: "compass",
    title: "Practical tools",
    text: "You receive grounded strategies you can apply in everyday life.",
  },
];

export const expertise = [
  "Trauma recovery",
  "Emotional overwhelm",
  "Spiritual distress",
  "Identity and life transitions",
  "Family and relational struggles",
  "Stress, burnout, and grief",
];

export const clientValues = [
  "A safe, judgment-free environment shaped by God's love",
  "Trauma-informed care integrated with biblical truth",
  "Support for adults, youth, and families facing emotional challenges",
  "Practical tools for resilience, clarity, and emotional stability",
  "Compassionate, non-clinical guidance rooted in Scripture",
];

export const scripture = [
  {
    reference: "Jeremiah 30:17",
    text: "For I will restore health to you, and your wounds I will heal, declares the Lord.",
  },
  {
    reference: "Psalm 34:18",
    text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
  },
];

/* ============================== BOOKING ============================== */

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

/* ============================== POLICIES ============================== */

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
      "All sessions are virtual — accessible from anywhere.",
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
          "One-on-one coaching",
          "Group coaching (Grave Mind to Grace Mind)",
          "Trauma-informed care",
          "Scripture-guided guidance (optional, client-led)",
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

/* ============================== SPEAKING ============================== */

export const speaking = {
  hero: {
    eyebrow: "Speaking & Events",
    title: "Christian speaker for healing, identity, and emotional resilience.",
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
      "He is a Certified Christian Trauma Care Provider, Board-Certified Youth Mental Health Coach, and Certified Master Trauma-Informed Care Coach — and the voice behind Rebuilding Broken Walls, a weekly podcast on healing, identity, and spiritual restoration.",
      "When Ife speaks, he carries one core conviction with him: healing is possible, and no one has to walk through it alone.",
    ],
  },
  signature: {
    eyebrow: "Signature Message",
    title: "Rebuilding the broken places — where faith and healing meet.",
    tagline:
      "(A place where trauma-aware care and grounded faith intersect.)",
    core: "What we believe about God — and what we think God believes about us — shapes how we hold our pain, how we see ourselves, and ultimately how we heal.",
    body: "Drawing from Jeremiah 30:17, Psalm 34:18, and James 1:19, Ife helps audiences process trauma, untangle identity, and rebuild what has been broken with strength, dignity, and hope.",
    topics: [
      { icon: "sprout", title: "Trauma & the path to healing" },
      { icon: "sun", title: "Identity in Christ vs. identity in culture" },
      { icon: "heart", title: "Emotional resilience & wholeness" },
      { icon: "shield", title: "Rebuilding confidence after pain" },
      { icon: "compass", title: "Faith in hard seasons" },
      { icon: "star", title: "Walking in purpose when you feel unqualified" },
      { icon: "sparkle", title: "The mind-body-spirit connection" },
      { icon: "leaf", title: "Forgiveness, boundaries, and trust-rebuilding" },
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
        "Ife has a remarkable way of holding space without softening hard truths. Our group didn't just listen — they engaged, asked honest questions, and walked away talking about identity and healing for weeks afterward.",
      attribution: "Conference Host, Faith Leadership Summit",
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

/* ============================== PODCAST ============================== */

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
      blurb: "Moving forward with courage, even before you feel ready.",
    },
  ],
};

/* Backward-compat: keep struggles for any leftover Home references */
export const struggles = [
  {
    icon: "heart",
    title: "Emotional wounds that linger",
    text: "Past and present pain, trauma, and emotional overwhelm that quietly shape how you live, relate, and rest.",
  },
  {
    icon: "sun",
    title: "Overwhelm in everyday life",
    text: "Stress, burnout, and the noise of a busy mind that leaves no room to breathe.",
  },
  {
    icon: "compass",
    title: "Seasons of distress & transition",
    text: "Spiritual distress, hard transitions, and family or relational struggles that leave you searching for steady ground.",
  },
];
