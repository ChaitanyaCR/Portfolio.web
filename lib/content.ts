export const profile = {
  name: "Chaitanya Raj",
  title: "Senior Lead Software Engineer",
  tagline: "Solution Architecture · C#/.NET · Angular · React",
  location: "Bengaluru, India",
  phone: "7034582016",
  email: "c.rajchaitanya@outlook.com",
  linkedin: "https://linkedin.com/in/PLACEHOLDER", // TODO: replace with real LinkedIn URL
  github: "https://github.com/PLACEHOLDER", // TODO: replace with real GitHub URL
  resumeUrl: "/resume.pdf",
};

export const about = {
  summary:
    "Senior Lead Software Engineer with 6+ years of experience designing, developing and optimizing complex enterprise banking and treasury applications. Hands-on expertise in C#, .NET 8/ASP.NET Core, Angular, React, REST APIs, SQL Server, Oracle, PostgreSQL, system design, and Azure DevOps. Proven experience leading teams of 3-4 engineers, architecting solutions from concept to production, translating business requirements into scalable technical outcomes, mentoring developers, and driving performance, maintainability and reusable engineering improvements. Currently leading the architecture of an enterprise Balance Sheet Management suite.",
};

export type ExperienceRole = {
  title: string;
  period: string;
  bullets: string[];
};

export type ExperienceEntry = {
  company: string;
  location: string;
  roles: ExperienceRole[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Surya FinTech",
    location: "Bengaluru, India",
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
        bullets: [],
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
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages & Backend",
    skills: ["C#", ".NET 8 / ASP.NET Core", "Entity Framework Core", "Dapper", "REST APIs"],
  },
  {
    label: "Frontend",
    skills: ["Angular", "React", "TypeScript", "JavaScript"],
  },
  {
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
  description: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "Risk Aggregation",
    description:
      "Built from scratch as Lead Engineer with a 2-member team; designed the application architecture, workflow engine and reporting infrastructure.",
    tags: ["Architecture", "Workflow Engine", "Reporting"],
  },
  {
    name: "Expected Credit Loss (IFRS 9)",
    description:
      "Built from scratch with a 3-member team; designed PD, LGD, segmentation, stress scenarios and a configurable execution engine.",
    tags: ["IFRS 9", "Risk Modeling", "Configurable Engine"],
  },
  {
    name: "Interest Rate Risk in the Banking Book (IRRBB)",
    description: "Backend development and regulatory reporting.",
    tags: ["Regulatory Reporting", "Backend"],
  },
  {
    name: "Funds Transfer Pricing (FTP)",
    description: "Backend services and pricing engine development.",
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
// Add entries here, e.g. { name: "AZ-204", issuer: "Microsoft", year: "2025" },
// and the Certifications section will render automatically once this array is non-empty.
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
