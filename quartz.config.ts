import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "☀︎ (Al)ta",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "www.altaficial.com",
    ignorePatterns: ["private", "templates", "01 Timestamps", "00 Meta"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Merienda",
        body: "Shantell Sans",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#f5f5f5",
          lightgray: "#DADADA",
          gray: "#000000",
          darkgray: "#000000",
          dark: "#000000",
          secondary: "#000000",
          tertiary: "#B2B0AE",
          highlight: "rgba(99,190,255,0.51)",
        },
        darkMode: {
          light: "#121212",
          lightgray: "#464646", /** search colum, graph border, pophover color */
          gray: "#B2B0AE", /** date and mins color */
          darkgray: "#B2B0AE", /** body/text color */
          dark: "#d3d3d3", /** backlink, header in text, graph color */
          secondary: "#d3d3d3", /** links, header 1/3 color */
          tertiary: "#B2B0AE", /** hover color */
          highlight: "rgba(99,129,255,0.36)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Poetry(),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false, parseTags: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config