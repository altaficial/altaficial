import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <p>
          {" "}
          </p>
        <ul>
          
          <li>
            <a rel="website" href="https://www.altaficial.com">
           altaficial.com · </a> © {year} · alta@altaficial.com 
          </li>
          <li>
            Created with <a href="https://obsidian.md/">Obsidian</a> and{" "}
            <a href="https://quartz.jzhao.xyz/">Quartz</a>
          </li>
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor