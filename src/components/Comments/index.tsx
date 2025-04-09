import { useColorMode, type ColorMode } from "@docusaurus/theme-common";
import Giscus, { type Theme } from "@giscus/react";

const DocusaurusColorModeToGiscusTheme: Record<ColorMode, Theme> = {
  light: "light",
  dark: "dark",
};

export default function Comments(): JSX.Element {
  const { colorMode } = useColorMode();
  const giscusTheme = DocusaurusColorModeToGiscusTheme[colorMode];

  return (
    <Giscus
      id="comments"
      repo="certimate-go/docs"
      repoId="R_kgDOMrO0Bg"
      category="Comments"
      categoryId="DIC_kwDOMrO0Bs4Co7D3"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={giscusTheme}
      lang="en"
      loading="lazy"
      crossorigin="anonymous"
      async
    />
  );
}
