import 'nextra-theme-docs/style.css'
import nextra from "nextra-theme-docs";
import Header from "./header";
import Footer from "./footer";
import StickyBottom from "./sticky-bottom";

export default function NextraTheme(pageProps) {
	const title = pageProps?.route?.replace(/\//g, " ").trim();

	const NextraPage = nextra(pageProps, {
		github: '',
		docsRepositoryBase: 'https://github.com/dryleaf/dryleaf.github.io/blob/master',
		logo: (<Header isToggleDisabled={true}/>),
		head: (
      <>
			  <title>Josimar Lopes's blog | {title.replace(/ /g, ",")}</title>
        <meta name="description" content={"Josimar Lopes's blog | " + title.replace(/ /g, ",")} />
      </>
		),
		footerText: (
      <>
        <Footer/>
        <StickyBottom />
        <style jsx global>
        {`
          .sticky-bottom {
            position: fixed !important;
          }
          #responsive_overlay {
            margin: 0 !important;
          }
        `}
        </style>
      </>),
		footerEditLink: ''
	});

	return NextraPage;
}
