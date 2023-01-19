import { projects } from "../data/projects";
import Head from "next/head";
import Image from "next/image";
import { cdnImage } from "../components/utils";
import { Fade, Bounce } from "react-awesome-reveal";
import styles from '../styles/Home.module.css'
import Layout from "../components/default-theme"

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Josimar Lopes Portfolio</title>
          <meta name="description" content="Josimar Lopes | Software · System Engineer" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <div className="container">
            <div className="row">
              <p className="intro">“The successful warrior is the average man, with laser-like focus.” — Bruce Lee</p>
            </div>
            <div className="row">
              <div className="col-1">
                <Fade left>
                  <div className="profile-image">
                    <Image
                      src={cdnImage("josimar-profile-3.jpg", false, "")}
                      alt="Photo of Josimar Lopes"
                      width={280}
                      height={323} />
                  </div>
                  <div className="icons">
                    <Bounce delay={500}>
                      <a href="https://github.com/dryleaf" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github" aria-hidden="true" title="github logo"></i>
                      </a>
                    </Bounce>
                    <Bounce delay={500}>
                      <a href="https://stackoverflow.com/users/6376299/dryleaf" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-stack-overflow" aria-hidden="true" title="stackoverflow logo"></i>
                      </a>
                    </Bounce>                    
                    <Bounce delay={500}>
                      <a href="skype:jossylopes" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-skype" aria-hidden="true" title="skype logo"></i>
                      </a>
                    </Bounce>
                    <Bounce delay={500}>
                      <a href="https://www.linkedin.com/in/lopesjosimar/" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-linkedin-square" aria-hidden="true" title="linkedin logo"></i>
                      </a>
                    </Bounce>
                    <Bounce delay={500}>
                      <a href="https://giter.site/dryleaf" target="_blank" rel="noopener noreferrer">
                      <Image
                        src={"https://giter.site/assets/img/logo.svg"}
                        alt="giter logo"
                        width={20}
                        height={20} />
                      </a>
                    </Bounce>
                  </div>
                  <h1 style={{marginTop: 0}}>Hi,</h1>
                  <h1>I'm Josimar Lopes</h1>
                  <div className="info">
                    <span>
                    I am a professional Engineer who likes to solve problems. I have been described as a determined, smart and competent individual, familiarized with team and individual work, who desires to consolidate his experience in the areas of software, system and cloud engineering.
                    </span>
                    <br /><br />
                    <ul className="experience" style={{ lineHeight: '30px' }}>
                      <li>A professional Engineer with over 9+ years of experience in Full‑stack, DevOps and ICT.</li>
                      <li>Extensive experience in WCDMA, LTE & NR RAN products and verification solutions.</li>
                      <li>Extensive experience in web applications development.</li>
                      <li>Extensive experience in API Design and Development.</li>
                      <li>Extensive experience in several programming languages, including Java, Python and JavaScript Frameworks.</li>
                      <li>Holder of Master degree in Information Engineering, with a background in Computer Science.</li>
                    </ul>
                  </div>
                </Fade>
              </div>
              <div className="col-2">
                <div className="projects">
                  {projects.map((item) => (
                    <Fade bottom key={item.name}>
                      <a href={item.repo} className="card" target="_blank" rel="noopener noreferrer">
                        <div>
                          <div className="name">{item.name}</div>
                          <div className="info">{item.description}</div>
                          {item.tags.map((tag) => (
                            <div key={tag} className="tag">
                              {tag}
                            </div>
                          ))}
                        </div>
                      </a>
                    </Fade>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}