import * as React from "react";
import Link from "next/link";
import ToggleTheme from "./theme-toggle";
import { useRouter } from "next/router";


const Header = (props) => {
  const router = useRouter();

  return (
    <>
      <header>
        <div className="logo">
        <Link href="/"><img src="/dryleaf-logo.jpg" /></Link>
        </div>
        <ul className="links">
          <li className={router.pathname == "/" ? "active" : ""}>
            <Link href="/">Portfolio</Link>
          </li>
          <li className={router.pathname == "/photography" ? "active" : ""}>
            <Link href="/photography">Photography</Link>
          </li>
          <li className={router.pathname == "/blog" ? "active" : ""}>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/lopesjosimar" target="_blank">Contact Me</a>
          </li>
          <li>
            <ToggleTheme />
          </li>
        </ul>
      </header>
    </>
  );
};
export default Header;
