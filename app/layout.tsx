import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { about, profile } from "@/lib/content";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const description =
  "Senior Lead Software Engineer specializing in solution architecture for enterprise banking and treasury applications — C#/.NET, Angular, React.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: `${profile.name} — ${profile.title}`,
  description,
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  keywords: [
    "Solution Architect",
    "Senior Lead Software Engineer",
    "Enterprise Banking Software",
    "Balance Sheet Management",
    "C#",
    ".NET",
    "Angular",
    "React",
    "Bengaluru",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    siteName: `${profile.name} — Portfolio`,
    title: `${profile.name} — ${profile.title}`,
    description,
    url: "/",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description,
  },
  robots: { index: true, follow: true },
};

const hasPortrait = Boolean(profile.photo) && existsSync(join(process.cwd(), "public", profile.photo));

/** Structured data so a search for the name resolves to this page. */
function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    description: about.summary,
    email: `mailto:${profile.email}`,
    url: profile.siteUrl,
    ...(hasPortrait && { image: new URL(profile.photo, profile.siteUrl).toString() }),
    address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
    worksFor: { "@type": "Organization", name: "Surya FinTech" },
    knowsAbout: [
      "Solution Architecture",
      "Enterprise Banking Software",
      "Balance Sheet Management",
      "Asset & Liability Management",
      "IFRS 9 Expected Credit Loss",
      "IRRBB",
      "Funds Transfer Pricing",
    ],
    sameAs: [profile.linkedin, profile.github],
  };
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()).replace(/</g, "\\u003c") }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <a href="#main-content" className="skip-link">Skip to content</a>
          <Nav />
          <main id="main-content" className="flex-1" tabIndex={-1}>{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
