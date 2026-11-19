import React, { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  jsonLd?: Record<string, any>;
  noindex?: boolean;
}

const BASE_URL = 'https://alkeb.dev';
const DEFAULT_IMAGE = 'https://alkeb.dev/alkeb-social.png';

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonicalPath = '',
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  jsonLd,
  noindex = false,
}) => {
  useEffect(() => {
    // 1. Update document title
    const fullTitle = title.includes('Alkeb.dev') ? title : `${title} | Alkeb.dev`;
    document.title = fullTitle;

    // Helper to update or create meta tag
    const setMetaTag = (attribute: 'name' | 'property', attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${attrValue}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', description);
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }
    setMetaTag(
      'name',
      'robots',
      noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );

    // 3. Canonical Link
    const fullCanonicalUrl = `${BASE_URL}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullCanonicalUrl);

    // 4. Open Graph Meta Tags (WhatsApp, Facebook, LinkedIn)
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', fullCanonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:site_name', 'Alkeb.dev');
    setMetaTag('property', 'og:locale', 'fr_SN');

    // 5. Twitter Meta Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);
    setMetaTag('name', 'twitter:url', fullCanonicalUrl);

    // 6. Local SEO Geo Tags (Sénégal & Dakar)
    setMetaTag('name', 'geo.region', 'SN-DK');
    setMetaTag('name', 'geo.placename', 'Dakar, Sénégal');
    setMetaTag('name', 'geo.position', '14.6928;-17.4467');
    setMetaTag('name', 'ICBM', '14.6928, -17.4467');

    // 7. Inject Page-specific JSON-LD structured data
    const scriptId = 'page-json-ld';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (jsonLd) {
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.id = scriptId;
        scriptElement.type = 'application/ld+json';
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(jsonLd);
    } else if (scriptElement) {
      scriptElement.remove();
    }

    // Scroll smoothly to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [title, description, keywords, canonicalPath, ogType, ogImage, jsonLd]);

  return null;
};
