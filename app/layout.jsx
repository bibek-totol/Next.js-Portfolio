import "./globals.css";

// SEO Metadata optimized for Google rankings
export const metadata = {
    // Title with primary keyword "Bibek Bhowmick" at the beginning
    title: {
        default: "Bibek Bhowmick | Full Stack Web Developer & Portfolio",
        template: "%s | Bibek Bhowmick",
    },
    // Description with multiple target keywords naturally included
    description:
        "Bibek Bhowmick - Professional Full Stack Web Developer specializing in React, Next.js, Node.js. Portfolio showcasing 20+ web development projects. Hire a skilled website developer.",

    // Target Keywords
    keywords: [
        "Bibek Bhowmick",
        "Bibek Bhowmick Portfolio",
        "Web Developer",
        "Website Developer",
        "Full Stack Developer",
        "React Developer",
        "Portfolio",
        "Bibek",
    ],

    // Author information
    authors: [{ name: "Bibek Bhowmick" }],
    creator: "Bibek Bhowmick",

    // Allow search engines to index
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
        },
    },

    verification: {
        google: "JvcxkI25NE5nFc76e1NMlbZBjqXP1b51686Gi8BHFAc",
    },

    // Open Graph (for Facebook, LinkedIn sharing)
    openGraph: {
        type: "website",
        locale: "en_US",
        title: "Bibek Bhowmick | Full Stack Web Developer Portfolio",
        description: "Professional Full Stack Web Developer with 2+ years experience. View 20+ completed projects.",
        siteName: "Bibek Bhowmick Portfolio",
        images: [{ url: "/assets/Screenshot_4-Photoroom.webp", alt: "Bibek Bhowmick - Web Developer" }],
    },

    // Twitter Card
    twitter: {
        card: "summary_large_image",
        title: "Bibek Bhowmick | Full Stack Web Developer",
        description: "Professional Full Stack Web Developer Portfolio - React, Next.js, Node.js",
        images: ["/assets/Screenshot_4-Photoroom.webp"],
    },

    // Icons
    icons: {
        icon: "/assets/logo.webp",
    },
};

// JSON-LD Structured Data for Rich Google Search Results
const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://bibek-bhowmick.vercel.app/#person",
    name: "Bibek Bhowmick",
    givenName: "Bibek",
    familyName: "Bhowmick",
    jobTitle: "Full Stack Web Developer",
    description: "Bibek Bhowmick is a professional Full Stack Web Developer from Bangladesh with 2+ years of experience specializing in React, Next.js, Node.js, and modern web technologies.",
    url: "https://bibek-bhowmick.vercel.app",
    image: "https://bibek-bhowmick.vercel.app/assets/Screenshot_4-Photoroom.webp",
    // Authoritative Backlinks - Builds Google Trust
    sameAs: [
        "https://www.linkedin.com/in/bibekbhowmick/",
        "https://github.com/bibek-totol",
        "https://leetcode.com/u/bibek_totol/",
        "https://www.hackerrank.com/profile/bibek1810053",
        "https://github.com/bibek-totol/ALL-SKILLS-CERTIFICATION"
    ],
    knowsAbout: [
        "Web Development",
        "Full Stack Development",
        "React.js",
        "Next.js",
        "Node.js",
        "MongoDB",
        "JavaScript",
        "TypeScript",
        "Express.js",
        "Tailwind CSS",
        "REST API",
        "MERN Stack"
    ],
    alumniOf: {
        "@type": "CollegeOrUniversity",
        "name": "Bangladesh Army University of Engineering and Technology",
        "sameAs": "https://bauet.ac.bd/"
    },
    nationality: {
        "@type": "Country",
        "name": "Bangladesh"
    }
};

// WebSite Schema for Sitelinks and Search
const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://bibek-bhowmick.vercel.app/#website",
    url: "https://bibek-bhowmick.vercel.app",
    name: "Bibek Bhowmick Portfolio",
    description: "Professional Full Stack Web Developer Portfolio showcasing React, Next.js, and Node.js projects",
    author: {
        "@id": "https://bibek-bhowmick.vercel.app/#person"
    },
    publisher: {
        "@id": "https://bibek-bhowmick.vercel.app/#person"
    }
};

// Professional Service Schema
const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Bibek Bhowmick Web Development Services",
    description: "Full Stack Web Development services including React, Next.js, Node.js, and MongoDB solutions",
    provider: {
        "@id": "https://bibek-bhowmick.vercel.app/#person"
    },
    areaServed: "Worldwide",
    serviceType: ["Web Development", "Full Stack Development", "Frontend Development", "Backend Development"]
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
                {/* Canonical URL for SEO */}
                <link rel="canonical" href="https://bibek-bhowmick.vercel.app" />

                {/* Structured Data for Google - Person Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
                />
                {/* Structured Data - WebSite Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
                />
                {/* Structured Data - Professional Service Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
                />
            </head>
            <body className="antialiased">{children}</body>
        </html>
    );
}
