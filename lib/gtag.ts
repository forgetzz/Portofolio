type GAParams = {
  currency?: string;
  value?: number;
  items?: any[];
  method?: string;
};

export const trackEvent = (
  action: string,
  params: GAParams
) => {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;

  window.gtag("event", action, params);
};
