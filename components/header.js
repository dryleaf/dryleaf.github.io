import * as React from "react";
import Link from "next/link";
import ToggleTheme from "./theme-toggle";
import { useRouter } from "next/router";

const Header = (props) => {
  const router = useRouter();

  return (
    <>
      {props?.isToggleDisabled ?
        <header>
          <div className="logo">
            <a href="/"><img src="/dryleaf-logo.jpg" alt="dryleaf logo" /></a>
          </div>
          <ul className="links">
            <li className={router.pathname == "/" ? "active" : ""}>
              <a href="/">Portfolio</a>
            </li>
          </ul>
        </header>
        :
        <div className="z-20 sticky top-0">
          <nav className="flex max-w-[90rem] mx-auto items-center left-0 right-0 h-16 pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
            <header style={{height: '45px'}}>
              <div className="logo">
                <Link href="/"><img src="/dryleaf-logo.jpg" alt="dryleaf logo" /></Link>
              </div>
              <ul className="links">
                <li className={router.pathname == "/" ? "active" : ""}>
                  <Link href="/">Portfolio</Link>
                </li>
                <li className={router.pathname == "/photography" ? "active" : ""}>
                  <Link href="/photography">Photography</Link>
                </li>
                <li className={router.pathname.startsWith("/blog") ? "active" : ""}>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/lopesjosimar" target="_blank">
                    <span style={{paddingRight: '2px'}}>Contact me</span>
                    <i className="fa fa-linkedin-square" aria-hidden="true" title="linkedin logo"></i>
                  </a>
                </li>
                <li>
                  <ToggleTheme />
                </li>
              </ul>
            </header>
          </nav>
          <style jsx>
          {`
            .z-20 {
              z-index: 20;
            }
            .top-0 {
              top: 0;
            }
            .sticky {
              border-bottom: 1px solid #eff3f8;
              position: sticky;
            }
            .pr-\[max\(env\(safe-area-inset-right\)\,1\.5rem\)\] {
              padding-right: max(env(safe-area-inset-right),1.5rem);
            }
            .pl-\[max\(env\(safe-area-inset-left\)\,1\.5rem\)\] {
              padding-left: max(env(safe-area-inset-left),1.5rem);
            }
            .items-center {
              align-items: center;
            }
            .max-w-\[90rem\] {
              max-width: 90rem;
            }
            .h-16 {
              height: 4rem;
            }
            .flex {
              display: inline-flex;
            }
            .mx-auto {
              margin-left: auto;
              margin-right: auto;
            }
            .left-0 {
              left: 0;
            }
            .right-0 {
              right: 0;
            }
          `}
          </style>
        </div>
      }
    </>
  );
};
export default Header;
