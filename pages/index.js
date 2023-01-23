import Head from "next/head";
import Image from "next/image";
import { cdnImage } from "../components/utils";
import { Bounce } from "react-awesome-reveal";
import styles from '../styles/Home.module.css'
import Layout from "../components/default-theme"
import { github } from "../data/github";
import { highlights } from "../data/highlights";
import { skills } from "../data/skills";
import { interests } from "../data/interests";
import { projects } from "../data/projects";

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
                <div className="profile-image">
                  <Image
                    src={cdnImage("josimar-profile-3.jpg", false, "")}
                    alt="Photo of Josimar Lopes"
                    width={280}
                    height={323} />
                </div>
                <div className="icons">
                  <Bounce delay={100}>
                    <a href="https://github.com/dryleaf" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-github" aria-hidden="true" title="github logo"></i>
                    </a>
                  </Bounce>
                  <Bounce delay={200}>
                    <a href="https://stackoverflow.com/users/6376299/dryleaf" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-stack-overflow" aria-hidden="true" title="stackoverflow logo"></i>
                    </a>
                  </Bounce>                    
                  <Bounce delay={300}>
                    <a href="skype:jossylopes" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-skype" aria-hidden="true" title="skype logo"></i>
                    </a>
                  </Bounce>
                  <Bounce delay={400}>
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
                  <ul className="experience">
                    <li>A professional Engineer with over 9+ years of experience in Full‑stack, DevOps and ICT.</li>
                    <li>Extensive experience in web applications development.</li>
                    <li>Extensive experience in API Design and Development.</li>
                    <li>Extensive experience in several programming languages, including Java, Python and JavaScript Frameworks.</li>
                    <li>Extensive experience in WCDMA, LTE & NR RAN solutions.</li>
                    <li>Holder of Master degree in Information Engineering, with a background in Computer Science.</li>
                  </ul>
                </div>
              </div>
              <div className="col-2">
                <div className="highlights">
                  <h2>Highlights</h2>
                  <ul>
                    {highlights.map((item) => (
                      <li key={item.key}>{item.value}</li>
                    ))}
                  </ul>
                </div>
                <div className="skills">
                  <h2>Skills</h2>
                  <ul>
                    {skills.map((item) => (
                      <li key={item.name}>
                        <span style={{fontWeight: 'bold'}}>{item.name}: </span>
                        {item.tags.map((tag) => (
                          <span key={item.name + "_" + tag} className="tag">
                            <Bounce delay={100}>
                              {tag}
                            </Bounce>
                          </span>
                        ))}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <h1 className="section-title">Interests</h1>
            <div className="row">
              <div className="col-1">
                <div className="interests">
                  <p>My personal interests include:</p>
                  <ul>
                    {interests.map((item) => (
                      <li key={item.key}>
                        <span style={{fontWeight: 'bold'}}>{item.key}. </span>
                        <span>{item.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-2">
                <div className="projects">
                  <h3>Recent Projects</h3>
                  <ul>
                    {projects.map((item) => (
                      <li key={item.name}>
                        <span style={{fontWeight: 'bold'}}>{item.name}. </span>
                        <span>{item.description}</span>
                        <ul>
                          <li>
                            {item.tags.map((tag) => (
                              <span key={item.name + "_" + tag} className="tag">
                                <Bounce delay={100}>
                                  {tag}
                                </Bounce>
                              </span>
                            ))}
                          </li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
              <h1 className="section-title">Contact me</h1>
              <div className="row">
                <div className="contact">
                  <a className="contact-me" href="https://www.linkedin.com/in/lopesjosimar" target="_blank">
                    <span style={{paddingRight: '2px'}}>https://linkedin.com/in/lopesjosimar</span>
                    <i className="fa fa-linkedin-square" aria-hidden="true" title="linkedin logo"></i>
                  </a>
                </div>
              </div>
              <h1 className="tldr">TLDR;</h1>
            <div className="row">
              <div className="col-inline">
                <h3>Coding for fun</h3>
                <div className="github-fun">
                <div>
                  {github.map((item) => (
                    <a key={item.name} href={item.repo} className="card" target="_blank" rel="noopener noreferrer">
                      <div key={item.name}>
                        <div className="name">{item.name}</div>
                        <div className="info">{item.description}</div>
                        {item.tags.map((tag) => (
                          <div key={item.name + "_" + tag} className="tag">
                            {tag}
                          </div>
                        ))}
                      </div>
                    </a>
                  ))}
                </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}