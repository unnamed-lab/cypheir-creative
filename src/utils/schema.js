"use strict";

function websiteSchema(
  company = "Company",
  companyUrl = "https://www.yourwebsite.com",
  companyLogo = "https://www.yourwebsite.com/logo.png",
  companyContact = {
    telephone: "+1-123-456-7890",
    email: "mail@company.com",
  },

  website = "Your Website",
  websiteUrl = "https://www.yourwebsite.com",
  websiteCreator = "Website Creator"
) {
  const organisationMarkup = `
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": ${company},
    "url": ${companyUrl},
    "logo": ${companyLogo},
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": ${companyContact.telephone},
      "email": ${companyContact.email}
      "contactType": "customer service"
    `;

  const websiteMarkup = `
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": ${websiteUrl},
    "name": ${website},
    "creator": ${websiteCreator},
    "publisher": {
      "@type": "Organization",
      "name": ${company},
      "logo": {
        "@type": "ImageObject",
        "url": ${companyUrl}"
      }
    }
    `;

    const markup = {organisation:organisationMarkup, website:websiteMarkup};
  return markup;
}

export { websiteSchemaMarkup };
