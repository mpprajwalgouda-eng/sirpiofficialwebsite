import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
  schema?: object;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = "AI, Machine Learning, Data Science, Geospatial Engineering, Wind Energy Analytics, SIRPI Technologies",
  ogType = "website",
  ogImage = "https://sirpi.io/og-image.jpg",
  schema
}) => {
  useEffect(() => {
    // Update Document Title
    const formattedTitle = `${title} | SIRPI Technologies - AI & Data Science Enterprise Solutions`;
    document.title = formattedTitle;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);

    // Update Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateOGTag('og:title', formattedTitle);
    updateOGTag('og:description', description);
    updateOGTag('og:type', ogType);
    updateOGTag('og:image', ogImage);
    updateOGTag('og:site_name', 'SIRPI Technologies');

    // Update Twitter Tags
    const updateTwitterTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateTwitterTag('twitter:card', 'summary_large_image');
    updateTwitterTag('twitter:title', formattedTitle);
    updateTwitterTag('twitter:description', description);
    updateTwitterTag('twitter:image', ogImage);

    // Inject Schema JSON-LD
    let scriptSchema = document.getElementById('jsonld-schema');
    if (scriptSchema) {
      scriptSchema.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.id = 'jsonld-schema';
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup custom schema on unmount
      const scriptToRemove = document.getElementById('jsonld-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [title, description, keywords, ogType, ogImage, schema]);

  return null;
};

export default SEO;
