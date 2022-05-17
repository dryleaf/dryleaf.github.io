import * as React from "react";
import styles from '../styles/Home.module.css'

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <p>
        <a href="https://giter.site/dryleaf" target="_blank" rel="noopener noreferrer">
          <img src="https://giter.site/assets/img/logo.svg" alt="giter logo" width="16" height="16" />
        </a>
        <a href="https://stackoverflow.com/users/6376299/dryleaf" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-stack-overflow" aria-hidden="true"></i>
        </a>
        <a href="https://github.com/dryleaf" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        <a href="skype:jossylopes" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-skype" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com/in/lopesjosimar/" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
        </a>
      </p>
      <p>
        <a href="https://github.com/dryleaf" target="_blank" rel="noopener noreferrer">
          Powered by dryleaf | { new Date().getFullYear() }
        </a>
      </p>
    </footer>
  );
};
export default Footer;
