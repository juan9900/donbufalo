// lib/gtm.ts

export const GTM_ID = process.env.NEXT_PUBLIC_GTM;

export const pageview = (url) => {
  if (typeof window.dataLayer !== "undefined") {
    window.dataLayer.push({
      event: "pageview",
      page: url,
    });
  } else {
    console.log({
      event: "pageview",
      page: url,
    });
  }
};

export const gtmEvent = (name, options = {}) => {
  if (typeof window.dataLayer !== "undefined") {
    window.dataLayer.push({
      event: name,
      ...options,
    });
    console.log(`Triggered event: ${name}`, dataLayer);
  } else {
    console.log({
      event: name,
      ...options,
    });
  }
};
