export interface Leader {
  name: string;
  role: string;
  bio: string;
  type: 'executive' | 'board' | 'staff';
}

export interface ProgramTrack {
  id: string;
  name: string;
  tagline: string;
  audience: string;
  description: string;
  keyActivities: string[];
  enrollmentSteps: string[];
  slug: string;
}

export interface CrisisService {
  id: string;
  title: string;
  sopReference: string;
  summary: string;
  details: string[];
  slug: string;
}

export interface ReferralItem {
  id: string;
  name: string;
  category: 'Legal Aid' | 'Emergency Helplines' | 'Housing & Food' | 'Medical & Mental Health' | 'Substance Recovery';
  contact: string;
  description: string;
  confidentialityNote: string;
}

export interface FinancialMetric {
  year: string;
  programExpensePercent: number;
  adminPercent: number;
  fundraisingPercent: number;
  auditStatus: string;
  grantComplianceNote: string;
}

export const FOUNDATION_META = {
  name: "The Gabriel Foundation",
  tagline: "Empowering Women, Ending Abuse, Rebuilding Safe Futures",
  mission: "The Gabriel Foundation is a newly established non-profit dedicated to protecting women and girls from violence and all forms of abuse. We are building three vital lifelines: 1-on-1 & Peer Mentorship, Trauma-Informed Counseling, and Comprehensive Life Reset & Housing Assistance ('Reset Up') to foster safe, dignified, and independent futures.",
  history: "Founded in 2026 with an unyielding commitment to end gender-based violence and domestic abuse, The Gabriel Foundation is launching direct community programs for women escaping violence. We empower survivors to process trauma, regain self-worth, and rebuild their lives with confidence.",
  serviceArea: "Greater Farmers Branch, North Texas, & Surrounding Communities",
  nationalHotline: "1-800-799-7233 (800-799-SAFE)",
  hotlineText: "Text 'START' to 88788",
  crisisLine247: "1-800-799-7233 (National Crisis Lifeline)",
  /** Clean numeric-only version for use in tel: href attributes */
  crisisLineTel: "18007997233",
  adminAddress: "P.O. Box 810452, Farmers Branch, TX 75381 (Administrative & Intake Mail Only)",
  adminEmail: "help@gabrielfoundation.org",
  adminPhone: "(972) 555-0199",
  ein: "75-3928104 (Newly Established 501(c)(3) Women's Non-Profit)",
};

export const GUIDING_PRINCIPLES = [
  {
    title: "Zero Tolerance for Violence & Abuse",
    description: "Every woman has the fundamental human right to live free from physical, emotional, sexual, and financial violence.",
    sopRef: "SOP Section 1.1"
  },
  {
    title: "100% Confidentiality & Safety First",
    description: "Physical, emotional, and digital safety underpin every action. Client disclosures are strictly protected under VAWA privacy guidelines.",
    sopRef: "SOP Section 2.1"
  },
  {
    title: "Survivor-Centered Empowerment",
    description: "Survivors retain complete autonomy over their choices, recovery goals, and reset plans without judgment or coercion.",
    sopRef: "SOP Section 2.2"
  },
  {
    title: "Trauma-Informed Professional Counseling",
    description: "Licensed counselors and trauma specialists provide compassionate, evidence-based therapy to heal emotional wounds.",
    sopRef: "SOP Section 2.3"
  },
  {
    title: "Comprehensive Life Reset ('Reset Up')",
    description: "We supply essential housing support, financial literacy, legal advocacy, and career mentoring to start fresh in safety.",
    sopRef: "SOP Section 2.4"
  },
  {
    title: "Sisterhood & Mentorship Network",
    description: "Connecting women with trained peer mentors and strong support circles to ensure no survivor walks the journey alone.",
    sopRef: "SOP Section 2.5"
  }
];

export const HERO_IMAGE = {
  url: "/images/woman-rising-silhouette.jpg",
  title: "Rising Strong Against Violence & Abuse",
  subtitle: "Empowering women to reclaim victory, peace, dignity, and personal independence.",
  badge: "Victory & Empowerment",
  alt: "Silhouette of a woman raising her fist against a golden sunset"
};

export const PILLAR_IMAGES = {
  mentorship: {
    url: "/images/holding-hands-circle.jpg",
    title: "Sisterhood Mentorship Circle",
    alt: "Women joining hands looking up in a circle"
  },
  counseling: {
    url: "/images/woman-on-a-mission.jpg",
    title: "A Woman on a Mission to Heal",
    alt: "Inspirational wall of post-it notes declaring I am a woman on a mission to thrive"
  },
  lifeReset: {
    url: "/images/hands-unity-support.jpg",
    title: "Unity & Safe Housing Support",
    alt: "Diverse hands stacked together in unity"
  },
  orphanCare: {
    url: "/images/girls-power-group.jpg",
    title: "Orphanage & Youth Care Support",
    alt: "Children and youth in community support program"
  }
};

export const GALLERY_IMAGES = [
  {
    url: "/images/girls-power-group.jpg",
    title: "Girls Power & Sisterhood",
    subtitle: "Building confidence, resilience, and unity to empower women and girls against abuse.",
    badge: "Sisterhood & Unity",
    alt: "Group of strong women standing together with a Girls Power sign"
  },
  {
    url: "/images/womens-rights-sign.jpg",
    title: "Women's Rights Are Human Rights",
    subtitle: "Advocating for safety, legal protection, dignity, and equality for every survivor.",
    badge: "Advocacy & Protection",
    alt: "Two women holding a colorful sign saying Women's Rights Are Human Rights"
  },
  {
    url: "/images/no-sexism-empowerment.jpg",
    title: "Ending Violence & Reclaiming Autonomy",
    subtitle: "Empowering women to say 'My Body, My Rules' and break free from toxic, abusive cycles.",
    badge: "Counseling & Autonomy",
    alt: "Four women holding empowerment signs including No Sexism and My Body My Rules"
  },
  {
    url: "/images/future-is-female-activism.jpg",
    title: "Amplifying Survivors' Voices",
    subtitle: "Standing loud and clear: The Future is Female. We speak up so no woman suffers in silence.",
    badge: "Voice & Activism",
    alt: "Woman with megaphone and woman holding The Future is Female sign"
  },
  {
    url: "/images/sisterhood-bench-solidarity.jpg",
    title: "Solidarity & Unbroken Sisterhood",
    subtitle: "Sitting shoulder-to-shoulder, holding each other up as we heal and move forward together.",
    badge: "Solidarity & Support",
    alt: "Women sitting side-by-side hugging on a park bench"
  },
  {
    url: "/images/women-community-support.jpg",
    title: "Community Life Reset ('Reset Up')",
    subtitle: "Safe housing, relocation support, warm meals, and collective community healing for women and families.",
    badge: "Life Reset & Safe Housing",
    alt: "Diverse group of smiling women standing together in a warm community shelter setting"
  }
];

export const MENTORING_PROGRAMS: ProgramTrack[] = [
  {
    id: "women-mentorship",
    slug: "mentorship",
    name: "Women & Girls Mentorship Circle",
    tagline: "Peer Guidance, Sisterhood & Confidence Building",
    audience: "Women & Young Girls Fleeing Abuse or Seeking Empowerment",
    description: "Our Sisterhood Mentorship Circle pairs women with compassionate, trained female mentors. Together, they work through safety goals, self-worth, emotional strength, and personal achievement.",
    keyActivities: [
      "Weekly 1-on-1 peer mentor meetings and wellness check-ins",
      "Monthly sisterhood support circles and empowerment retreats",
      "Goal setting for personal independence, education, and career growth",
      "Emotional resilience and self-advocacy workshops"
    ],
    enrollmentSteps: [
      "Confidential online intake request",
      "Orientation and personal needs & safety assessment",
      "Pairing with a trained, background-screened mentor",
      "Welcome meeting and personalized mentorship roadmap"
    ]
  },
  {
    id: "trailblazers",
    slug: "trailblazers",
    name: "Women & Girls Mentorship Circle",
    tagline: "Peer Guidance, Sisterhood & Confidence Building",
    audience: "Women & Young Girls Fleeing Abuse or Seeking Empowerment",
    description: "Our Sisterhood Mentorship Circle pairs women with compassionate, trained female mentors. Together, they work through safety goals, self-worth, emotional strength, and personal achievement.",
    keyActivities: [
      "Weekly 1-on-1 peer mentor meetings and wellness check-ins",
      "Monthly sisterhood support circles and empowerment retreats",
      "Goal setting for personal independence, education, and career growth",
      "Emotional resilience and self-advocacy workshops"
    ],
    enrollmentSteps: [
      "Confidential online intake request",
      "Orientation and personal needs & safety assessment",
      "Pairing with a trained, background-screened mentor",
      "Welcome meeting and personalized mentorship roadmap"
    ]
  },
  {
    id: "trauma-counseling",
    slug: "counseling",
    name: "Confidential Counseling & Therapy",
    tagline: "Trauma Recovery & Psychological Healing",
    audience: "Survivors of Domestic Violence, Assault, & Emotional Abuse",
    description: "Licensed clinical therapists provide individual counseling and support groups tailored to process trauma, rebuild self-esteem, manage anxiety/PTSD, and reclaim emotional well-being.",
    keyActivities: [
      "1-on-1 trauma-informed individual therapy sessions (LCSW/LPC)",
      "Weekly survivor-led support groups in secure settings",
      "Specialized crisis counseling and PTSD coping strategies",
      "Children & mothers joint healing sessions"
    ],
    enrollmentSteps: [
      "Reach out via our secure intake form",
      "Comprehensive clinical assessment with a licensed counselor",
      "Individualized therapy plan creation",
      "Begin private 1-on-1 or group counseling sessions"
    ]
  },
  {
    id: "life-reset",
    slug: "life-reset",
    name: "Life Reset & Rebuilding ('Reset Up')",
    tagline: "Emergency Shelter, Relocation & Fresh Start Support",
    audience: "Women Transitioning Away From Abusive Households",
    description: "Our signature 'Reset Up' program provides emergency safe lodging, relocation funds, household setup assistance, legal protection assistance, and financial literacy to start a new life safely.",
    keyActivities: [
      "Emergency confidential safe house shelter & bed placement",
      "Relocation logistics, security deposit assistance, & furniture setup",
      "Legal aid coordination for protective orders & safe custody",
      "Financial independence coaching, resume prep, & job placement"
    ],
    enrollmentSteps: [
      "Confidential intake and safety emergency screening",
      "Immediate safe placement & basic needs fulfillment",
      "Dedicated Case Manager assignment for 'Reset Up' plan",
      "Transition into permanent safe housing & self-sufficiency"
    ]
  },
  {
    id: "advocacy-rights",
    slug: "advocacy-rights",
    name: "Women's Rights & Legal Advocacy",
    tagline: "Legal Protection, Rights Defense & System Navigation",
    audience: "Women Seeking Restraining Orders & Legal Safety",
    description: "Connecting survivors with free legal aid, court accompaniment, protective order filings, and advocacy to ensure their rights and safety are defended by the legal system.",
    keyActivities: [
      "Free legal consultations with partner family law attorneys",
      "Court accompaniment and advocate support during hearings",
      "Assistance filing protective & restraining orders",
      "Rights education workshops and immigration VAWA support"
    ],
    enrollmentSteps: [
      "Request legal advocacy check-in with our care team",
      "Review legal needs and case timeline",
      "Direct pairing with legal partner agency & victim advocate"
    ]
  }
];

export const CRISIS_SERVICES: CrisisService[] = [
  {
    id: "danger-now",
    slug: "emergency",
    title: "National Emergency Helpline Resources",
    sopReference: "SOP Section 5",
    summary: "Immediate emergency guidance, 24/7 national hotline links, and public safety resources.",
    details: [
      "If you are in immediate physical danger, call 911 immediately from a safe phone.",
      "National Domestic Violence Hotline: 1-800-799-7233 (TTY 1-800-787-3224) or text 'START' to 88788.",
      "National Sexual Assault Telephone Hotline (RAINN): 1-800-656-4673.",
      "Use our Quick Exit button (top right bar or press ESC) to immediately leave this site."
    ]
  },
  {
    id: "shelter-intake",
    slug: "shelter-services",
    title: "Emergency Safe Shelter & Life Reset",
    sopReference: "SOP Section 6.1 - 6.3",
    summary: "Confidential emergency shelter referral and 'Reset Up' planning for women and children fleeing violence.",
    details: [
      "Eligibility: Women (18+) and dependent children escaping domestic abuse, assault, or active threats.",
      "Confidential Intake: Virtual and intake screening for basic needs (food, clothing, housing guidance).",
      "Unlisted Safe Location: Shelter physical locations are strictly unlisted to ensure physical protection.",
      "Life Reset Support: Case management covering housing search, career placement, and household setup."
    ]
  },
  {
    id: "counseling-services",
    slug: "counseling-services",
    title: "Trauma-Informed Therapy & Support Groups",
    sopReference: "SOP Section 8.1 - 8.4",
    summary: "Professional mental health care to process abuse trauma, eliminate guilt, and restore peace of mind.",
    details: [
      "Individual Therapy: Confidential sessions led by licensed therapists specialized in domestic violence trauma.",
      "Support Groups: Weekly safe spaces for women to share experiences, build sisterhood, and overcome isolation.",
      "Children's Therapy: Age-appropriate art and play therapy to help kids heal from witnessed violence."
    ]
  },
  {
    id: "privacy-safety",
    slug: "privacy-safety",
    title: "Digital Safety & Privacy Protection",
    sopReference: "SOP Section 4.1 - 4.3",
    summary: "Guaranteed VAWA privacy compliance, phone safety guidance, and browser exit features.",
    details: [
      "Strict Privacy: We never reveal client identity or shelter location without an explicit written release.",
      "Tech Safety: Abusers may monitor internet history. Always clear history or use private browsing.",
      "Quick Exit: Click Quick Exit at any time to instantly redirect your browser to Google Weather."
    ]
  }
];

export const REFERRALS: ReferralItem[] = [
  {
    id: "ref-1",
    name: "National Domestic Violence Hotline",
    category: "Emergency Helplines",
    contact: "1-800-799-SAFE (7233) / Text START to 88788",
    description: "24/7 free, confidential support for anyone experiencing domestic violence or seeking resources.",
    confidentialityNote: "24/7 National Crisis Line."
  },
  {
    id: "ref-2",
    name: "Legal Aid of NorthWest Texas",
    category: "Legal Aid",
    contact: "1-888-529-5277 / www.lanwt.org",
    description: "Free civil legal assistance for low-income women, specializing in protective orders, divorce, and child custody representation.",
    confidentialityNote: "Confidential legal intake available."
  },
  {
    id: "ref-3",
    name: "Texas Advocacy Project",
    category: "Legal Aid",
    contact: "1-800-374-HOPE (4673)",
    description: "Statewide legal line providing free legal advice, document drafting, and safety planning for survivors of domestic violence.",
    confidentialityNote: "Strict attorney-client privilege maintained."
  },
  {
    id: "ref-4",
    name: "RAINN National Sexual Assault Hotline",
    category: "Emergency Helplines",
    contact: "1-800-656-4673 / online.rainn.org",
    description: "24/7 confidential hotline providing support, information, advice, or referrals for survivors of sexual assault.",
    confidentialityNote: "Confidential 24/7 national helpline."
  },
  {
    id: "ref-5",
    name: "Texas Housing Choice & Reset Program",
    category: "Housing & Food",
    contact: "214-953-4663 / www.dhantx.com",
    description: "Emergency housing vouchers and rapid re-housing programs for women transitioning into independent safe apartments.",
    confidentialityNote: "Priority referral pathways for DV survivors."
  },
  {
    id: "ref-6",
    name: "National 988 Suicide & Crisis Lifeline",
    category: "Emergency Helplines",
    contact: "Call or Text 988 / 988lifeline.org",
    description: "24/7 free, confidential emotional support and crisis counseling for individuals in emotional distress.",
    confidentialityNote: "24/7 Free & Confidential."
  },
  {
    id: "ref-7",
    name: "Texas Council on Family Violence",
    category: "Legal Aid",
    contact: "1-512-794-1133 / www.tcfv.org",
    description: "Statewide policy, advocacy, and legal resources uniting organizations to support survivors of domestic abuse.",
    confidentialityNote: "Statewide advocacy network."
  },
  {
    id: "ref-8",
    name: "North Texas Food Bank Relief",
    category: "Housing & Food",
    contact: "214-330-1396 / www.ntfb.org",
    description: "Emergency food box distribution and nutritional assistance for families in transition or hardship.",
    confidentialityNote: "Free community food access."
  }
];

export const FINANCIALS: FinancialMetric = {
  year: "2026 Founding Year",
  programExpensePercent: 90.0,
  adminPercent: 6.0,
  fundraisingPercent: 4.0,
  auditStatus: "Founding Non-Profit Financial Stewardship & Transparency Standard",
  grantComplianceNote: "Full commitment to VAWA, FVPSA, and 501(c)(3) non-profit governance."
};

export const IMPACT_STATS = [
  { label: "Newly Founded NGO", value: "2026 Launch", icon: "Sparkles" },
  { label: "Core Lifelines of Support", value: "3 Pillars", icon: "Shield" },
  { label: "Commitment to Survivor Safety", value: "100%", icon: "Heart" },
  { label: "Community & Volunteer Driven", value: "Open Intake", icon: "Users" }
];

export const LEADERSHIP: Leader[] = [
  {
    name: "Ruth M. Kinyanjui",
    role: "President & Founder",
    bio: "Ruth M. Kinyanjui established The Gabriel Foundation to create a comprehensive sanctuary for women facing violence. Her vision combines 1-on-1 mentorship, professional counseling, and complete life reset support to ensure no woman is left behind.",
    type: "executive"
  },
  {
    name: "Dr. Elena Rostova",
    role: "Board Chair",
    bio: "Women's rights advocate with 15+ years overseeing non-profit governance, trauma-informed program development, and community outreach.",
    type: "board"
  },
  {
    name: "Sarah Jenkins, Esq.",
    role: "Board Member — Legal & Advocacy",
    bio: "Family law attorney advising on survivor legal rights, protective order advocacy, and privacy safeguards under VAWA.",
    type: "board"
  }
];

export const REFERRAL_RESOURCES = REFERRALS;

export const PROGRAM_DIVISIONS = {
  mentorship: MENTORING_PROGRAMS[0],
  counseling: MENTORING_PROGRAMS[1],
  lifeReset: MENTORING_PROGRAMS[2],
  advocacy: MENTORING_PROGRAMS[3]
};
