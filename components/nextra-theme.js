import 'nextra-theme-docs/style.css'
import nextra from "nextra-theme-docs";
import Header from "./header";
import Footer from "./footer";

export default function NextraTheme(pageProps) {
	const title = pageProps?.route?.replace(/\//g, " ").trim();

	const NextraPage = nextra(pageProps, {
		github: 'https://github.com/dryleaf',
		docsRepositoryBase: 'https://github.com/dryleaf/dryleaf.github.io/blob/master',
		logo: (<Header isToggleDisabled={true}/>),
		head: (
      <>
			  <title>Josimar Lopes's blog | {title.replace(/ /g, ",")}</title>
        <meta name="description" content={"Josimar Lopes's blog | " + title.replace(/ /g, ",")} />
      </>
		),
		footerText: <Footer/>,
		footerEditLink: ''
	});

	return NextraPage;
}
