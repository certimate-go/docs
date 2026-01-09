import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

import { localLanguages, localeConfigs } from "./locale";

if (ExecutionEnvironment.canUseDOM) {
  // WANING: This is a temporary workaround for default locale.
  const path = location.pathname;
  if (path === "/" || path.startsWith("/docs") || path.startsWith("/blog")) {
    const userLang = navigator.language;

    let matchedLang = localLanguages.find((locale) => {
      const config = localeConfigs[locale];
      return (
        config.htmlLang === userLang ||
        userLang.startsWith(config.htmlLang.split("-")[0])
      );
    });
    if (!matchedLang) matchedLang = "en";

    const baseUrl = localeConfigs[matchedLang].baseUrl || "";
    const newPath = baseUrl.replace(/\/$/, "") + "/" + path.slice(1);
    location.replace(newPath);
  }
}
