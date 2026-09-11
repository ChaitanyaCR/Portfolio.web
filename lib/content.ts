export const profile = {
  name: "Chaitanya Raj",
  title: "Senior Lead Software Engineer",
  tagline: "Solution Architecture · C#/.NET · Angular · React",
  location: "Bengaluru, India",
  phone: "7034582016",
  email: "c.rajchaitanya@outlook.com",
  linkedin: "https://www.linkedin.com/in/chaitanyacr/",
  github: "https://github.com/ChaitanyaCR",
  resumeUrl: "/resume.pdf",
  /** Portrait shown in the About section. Save the file at `public/portrait.jpg`. */
  photo: "/portrait.jpg",
  // TODO: set to your production domain — used for metadataBase, OG tags and sitemap.
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  availability: "OPEN TO SENIOR & ARCHITECT ROLES",
};

export type ImpactStat = {
  /** Static display value, used when `countTo` is absent. */
  value?: string;
  /** Numeric target — animates from 0 on first view. */
  countTo?: number;
  prefix?: string;
  /** Rendered in the accent colour, alongside the number. */
  suffix?: string;
  label: string;
};

export const impactStats: ImpactStat[] = [
  { countTo: 6, suffix: "+", label: "Years building enterprise software" },
  { value: "3–4", label: "Engineers per team led" },
  { prefix: "<", countTo: 30, suffix: " sec", label: "Batch processing, down from ~10 min" },
  { value: "End to end", label: "From system design to delivery" },
];

export const about = {
  intro: "An engineer’s mindset. A bigger-picture view.",
  paragraphs: [
    "I’m a Senior Lead Software Engineer with over six years of experience building enterprise banking and treasury applications. I enjoy the space where a complex business problem becomes a clear, practical engineering solution.",
    "At **Surya FinTech**, I lead architecture for an enterprise Balance Sheet Management suite. My work spans system design, backend services, databases, and the interfaces that bring it all together.",
  ],
  /** Long-form summary — used for metadata and structured data. */
  summary:
    "Senior Lead Software Engineer with 6+ years of experience designing, developing and optimizing complex enterprise banking and treasury applications. Hands-on expertise in C#, .NET 8/ASP.NET Core, Angular, React, REST APIs, SQL Server, Oracle, PostgreSQL, system design, and Azure DevOps. Proven experience leading teams of 3-4 engineers, architecting solutions from concept to production, translating business requirements into scalable technical outcomes, mentoring developers, and driving performance, maintainability and reusable engineering improvements. Currently leading the architecture of an enterprise Balance Sheet Management suite.",
};

export type Principle = {
  icon: "compass" | "layers" | "users";
  title: string;
  text: string;
};

export const principles: Principle[] = [
  {
    icon: "compass",
    title: "Think in systems",
    text: "Translate complex banking requirements into a clear architecture that can grow with the product.",
  },
  {
    icon: "layers",
    title: "Build for the long run",
    text: "Create reusable services, workflows, and reporting frameworks with maintainability at their core.",
  },
  {
    icon: "users",
    title: "Make the team stronger",
    text: "Stay hands-on while mentoring engineers, reviewing designs, and giving teams a clear technical direction.",
  },
];

export type ExperienceRole = {
  title: string;
  period: string;
  bullets: string[];
};

export type ExperienceEntry = {
  company: string;
  location: string;
  /** Optional one-line clarification of how this company relates to the previous one. */
  note?: string;
  roles: ExperienceRole[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Surya FinTech",
    location: "Bengaluru, India",
    // TODO: confirm the relationship between Surya FinTech and Surya Software Systems
    // (rebrand, group company, or a genuine move) and describe it here — readers can't tell.
    roles: [
      {
        title: "Senior Lead Engineer",
        period: "Apr 2026 - Present",
        bullets: [
          "Lead architecture and product design for the enterprise Balance Sheet Management (BSM) application suite, translating complex banking requirements into configurable and scalable solution components.",
          "Design modules spanning balance sheet, asset & liability management, capital, liquidity, income, funds and enterprise reporting.",
          "Drive technical direction, architecture reviews and engineering best practices across the product suite.",
        ],
      },
      {
        title: "Lead Engineer",
        period: "Aug 2022 - Apr 2026",
        bullets: [
          "Led multiple product teams of 3-4 engineers delivering complex enterprise banking products from solution design through implementation.",
          "Architected backend systems, REST APIs and database models, working closely with product owners and banking domain experts to convert business priorities into practical technical solutions.",
          "Mentored developers while remaining hands-on, providing technical guidance on solution design, engineering practices and problem solving.",
          "Reduced batch processing time from approximately 10 minutes to under 30 seconds through architecture and query optimization.",
          "Designed reusable workflow and reporting frameworks used across products to improve consistency and engineering reuse.",
        ],
      },
    ],
  },
  {
    company: "Surya Software Systems Pvt. Ltd.",
    location: "Bengaluru, India",
    roles: [
      {
        title: "Senior Software Engineer",
        period: "Mar 2022 - Aug 2022",
        bullets: [
          "Led a team of one developer and one tester to build and deploy an application using ASP.NET, JavaScript and SQL Server.",
        ],
      },
      {
        title: "Software Engineer",
        period: "Feb 2020 - Feb 2022",
        bullets: [
          "Developed enterprise web applications using .NET Core, JavaScript and SQL Server.",
          "Built REST APIs, implemented business logic, contributed to database design, and optimized database performance.",
        ],
      },
    ],
  },
];

export type SkillGroup = {
  icon: "braces" | "panels" | "database" | "waypoints";
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    icon: "braces",
    label: "Languages & Backend",
    skills: ["C#", ".NET 8 / ASP.NET Core", "Entity Framework Core", "Dapper", "REST APIs"],
  },
  {
    icon: "panels",
    label: "Frontend",
    skills: ["Angular", "React", "TypeScript", "JavaScript"],
  },
  {
    icon: "database",
    label: "Data & Architecture",
    skills: [
      "SQL Server",
      "Oracle",
      "PostgreSQL",
      "System Design",
      "Microservices",
      "Distributed Systems",
      "Design Patterns",
      "Domain-Driven Design",
    ],
  },
  {
    icon: "waypoints",
    label: "Practices & Tools",
    skills: [
      "Solution Architecture",
      "Azure DevOps",
      "CI/CD",
      "Git",
      "Technical Leadership & Mentoring",
      "Architecture Reviews",
      "Performance Optimization",
      "Stakeholder Collaboration",
    ],
  },
];

export type Project = {
  name: string;
  icon: "workflow" | "chart" | "landmark" | "branch";
  category: string;
  /** Short headline framing the problem. */
  focus: string;
  description: string;
  /** Scope line shown inside the expandable contribution panel. */
  role: string;
  contribution: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "Risk Aggregation",
    icon: "workflow",
    category: "PLATFORM ARCHITECTURE",
    focus: "From a blank slate to a connected risk platform.",
    description:
      "Built from scratch as Lead Engineer with a 2-member team; designed the application architecture, workflow engine and reporting infrastructure.",
    role: "Lead Engineer · 2-member team",
    contribution:
      "Designed the application architecture, workflow engine, and reporting infrastructure. Led the implementation with a two-member team, connecting product requirements to the underlying technical design.",
    tags: ["Architecture", "Workflow Engine", "Reporting"],
  },
  {
    name: "Expected Credit Loss (IFRS 9)",
    icon: "chart",
    category: "CREDIT RISK",
    focus: "Complex risk models. Configurable execution.",
    description:
      "Built from scratch with a 3-member team; designed PD, LGD, segmentation, stress scenarios and a configurable execution engine.",
    role: "Product development · 3-member team",
    contribution:
      "Designed probability of default (PD), loss given default (LGD), segmentation, and stress-scenario components. Built a configurable execution engine as part of a three-member team.",
    tags: ["IFRS 9", "Risk Modeling", "Configurable Engine"],
  },
  {
    name: "Interest Rate Risk in the Banking Book (IRRBB)",
    icon: "landmark",
    category: "REGULATORY SYSTEMS",
    focus: "Engineering for banking-book interest rate risk.",
    description: "Backend development and regulatory reporting.",
    role: "Backend engineering & reporting",
    contribution:
      "Contributed backend development and regulatory reporting for the Interest Rate Risk in the Banking Book application, connecting domain requirements with backend implementation.",
    tags: ["Regulatory Reporting", "Backend"],
  },
  {
    name: "Funds Transfer Pricing (FTP)",
    icon: "branch",
    category: "TREASURY & PRICING",
    focus: "The services behind funds transfer pricing.",
    description: "Backend services and pricing engine development.",
    role: "Backend & pricing engine development",
    contribution:
      "Developed backend services and pricing-engine functionality for the Funds Transfer Pricing application within the enterprise banking product portfolio.",
    tags: ["Pricing Engine", "Backend"],
  },
];

export const education = [
  {
    institution: "Cochin University of Science and Technology",
    degree: "Bachelor of Technology (Electronics and Communications Engineering)",
    period: "2014 - 2018",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  year: string;
};

// TODO: add certifications — none listed on the resume yet.
// Add entries here, e.g. { name: "AZ-305", issuer: "Microsoft", year: "2026" },
// and they will render alongside education automatically.
export const certifications: Certification[] = [];

export const domainExpertise = {
  architecture: [
    "System Design",
    "Microservices",
    "Distributed Systems",
    "Design Patterns",
    "Domain-Driven Design",
    "Reusable workflow & reporting frameworks",
  ],
  banking: [
    "Balance Sheet Management",
    "Asset & Liability Management",
    "Risk Aggregation",
    "Expected Credit Loss (IFRS 9)",
    "IRRBB",
    "Funds Transfer Pricing",
    "Treasury & Risk Management",
  ],
};

/** Nodes rendered in the animated hero architecture diagram. */
export const architectureDiagram = {
  core: "Balance Sheet Management",
  modules: ["Risk", "Liquidity", "Capital"],
  foundation: "Shared services & data",
};
