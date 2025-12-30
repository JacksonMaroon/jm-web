import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  canonical: string;
  ogType?: "website" | "article";
};

const SITE_NAME = "Jackson Maroon";

const setMetaTag = (attribute: "name" | "property", key: string, content: string) => {
  const selector = `meta[${attribute}="${key}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const setCanonicalLink = (href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
};

const Seo = ({ title, description, canonical, ogType = "website" }: SeoProps) => {
  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    document.title = title;

    setMetaTag("name", "description", description);
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", canonical);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:site_name", SITE_NAME);
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setCanonicalLink(canonical);
  }, [title, description, canonical, ogType]);

  return null;
};

export default Seo;
