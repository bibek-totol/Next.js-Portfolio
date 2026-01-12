// Sitemap for Google to discover all pages
export default function sitemap() {
    const baseUrl = "https://bibekbhowmick.com"; // Update with your domain
    
    return [
        { url: baseUrl, lastModified: new Date(), priority: 1.0 },
        { url: `${baseUrl}/details1`, lastModified: new Date(), priority: 0.8 },
        { url: `${baseUrl}/details2`, lastModified: new Date(), priority: 0.8 },
        { url: `${baseUrl}/details3`, lastModified: new Date(), priority: 0.8 },
        { url: `${baseUrl}/details4`, lastModified: new Date(), priority: 0.8 },
        { url: `${baseUrl}/details5`, lastModified: new Date(), priority: 0.8 },
        { url: `${baseUrl}/details6`, lastModified: new Date(), priority: 0.8 },
    ];
}
