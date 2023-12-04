"use strict";

function websiteSchemaMarkup(
  company,
  companyUrl,
  companyLogo,
  telephone,
  email,
  website,
  websiteUrl,
  websiteCreator
) {
  
  const organisationMarkup = `
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": ${company || "Company"},
    "url": ${companyUrl || "https://www.yourwebsite.com"},
    "logo": ${companyLogo || "https://www.yourwebsite.com/logo.png"},
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": ${telephone || "+1-123-456-7890"},
      "email": ${email || "mail@company.com"}
      "contactType": "customer service"
    `;

  const websiteMarkup = `
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": ${websiteUrl || "https://www.yourwebsite.com"},
    "name": ${website || "Your Website"},
    "creator": ${websiteCreator || "Unnamed"},
    "publisher": {
      "@type": "Organization",
      "name": ${company || "Company"},
      "logo": {
        "@type": "ImageObject",
        "url": ${companyUrl || "https://www.yourwebsite.com"}"
      }
    }
    `;

  const markup = {
    organisation: JSON.stringify(organisationMarkup),
    website: JSON.stringify(websiteMarkup),
  };
  return markup;
}

export { websiteSchemaMarkup };
