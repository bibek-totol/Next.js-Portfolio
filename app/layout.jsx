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
    name: "Bibek Bhowmick",
    jobTitle: "Full Stack Web Developer",
    description: "Full Stack Web Developer specializing in React, Next.js, Node.js with 2+ years experience",
    sameAs: [
        "https://www.linkedin.com/in/bibekbhowmick/",
        "https://github.com/bibek-totol",
    ],
    knowsAbout: ["Web Development", "React", "Next.js", "Node.js", "Full Stack Development"],
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
                {/* Structured Data for Google */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
                />
            </head>
            <body className="antialiased">{children}</body>
        </html>
    );
}
