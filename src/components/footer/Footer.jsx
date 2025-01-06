import React from "react";
import { logo } from "../../comman/images";
import "./footer.scss";

import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <footer className="footer-jh">
      <div className="footer-cont pt-40">
        <div className="flex-d">
          <ul className="footer-ul mb-0">
            <li className="footer-li">
              <a href="/" className="footer-logo" title="footer logo">
                <img
                  loading="lazy"
                  src={logo}
                  width="155"
                  height="29"
                  //   style="aspect-ratio: 155/29"
                  alt="jobhero footer logo"
                />
              </a>
            </li>
            <li className="footer-li">
              <a href="/about-us" className="footer-a">
                About Us
              </a>
            </li>
            <li className="footer-li">
              <a href="/faq" className="footer-a">
                FAQ
              </a>
            </li>
            <li className="footer-li">
              <a href="/contact-us" className="footer-a">
                Contact Us
              </a>
            </li>
            <li className="footer-li">
              <a href="/terms-conditions-use" className="footer-a">
                Terms and Conditions of Use
              </a>
            </li>
            <li className="footer-li">
              <a href="/privacy-policy" className="footer-a">
                Privacy Policy
              </a>
            </li>
            <li className="footer-li">
              <a
                href="/cookies-tracking-technologies-policy"
                className="footer-a"
              >
                Cookies and Tracking Technologies Policy
              </a>
            </li>
            <li className="footer-li">
              <a href="/sitemap" className="footer-a">
                Sitemap
              </a>
            </li>
            <li className="footer-li">
              <a href="/accessibility" className="footer-a">
                Accessibility
              </a>
            </li>
          </ul>
          <ul className="footer-ul">
            <li className="footer-li">
              <a className="footer-head" href="/resume">
                RESUMES
              </a>
            </li>
            <li className="footer-li">
              <a
                href="/career-guides/resume/how-to/write/resume"
                className="footer-a"
              >
                How to Write a Resume
              </a>
            </li>
            <li className="footer-li">
              <a href="/career-guides/resume/formats" className="footer-a">
                Resume Formats
              </a>
            </li>
            <li className="footer-li">
              <a href="/career-guides/resume/objectives" className="footer-a">
                Resume Objectives
              </a>
            </li>
            <li className="footer-li">
              <a href="/resume/examples" className="footer-a">
                Resume Examples
              </a>
            </li>
            <li className="footer-li">
              <a href="/resume/builder" className="footer-a">
                Resume Builder
              </a>
            </li>
            <li className="footer-li">
              <a href="/career-guides/resume/templates" className="footer-a">
                Resume Templates
              </a>
            </li>
          </ul>
          <ul className="footer-ul">
            <li className="footer-li">
              <a className="footer-head" href="/cover-letter">
                COVER LETTERS
              </a>
            </li>
            <li className="footer-li">
              <a
                href="/career-guides/cover-letter/how-to/write"
                className="footer-a"
              >
                How to Write a Cover Letter
              </a>
            </li>
            <li className="footer-li">
              <a href="/cover-letter/examples" className="footer-a">
                Cover Letter Examples
              </a>
            </li>
            <li className="footer-li">
              <a className="footer-a" href="/cover-letter/builder">
                Cover Letter Builder
              </a>
            </li>
            <li className="footer-li">
              <a href="/cover-letter/templates" className="footer-a">
                Cover Letter Templates
              </a>
            </li>
            <li className="footer-li">
              <a href="/career-guides/cover-letter/format" className="footer-a">
                Cover Letter Formats
              </a>
            </li>
          </ul>

          <ul className="footer-ul">
            <li className="footer-li">
              <a className="footer-head">RESOURCES</a>
            </li>
            <li className="footer-li">
              <a href="/career-guides" className="footer-a">
                Career Guides
              </a>
            </li>
            <li className="footer-li">
              <a
                href="/career-guides/careers/planning/how-to-become"
                className="footer-a"
              >
                How to Become
              </a>
            </li>
            <li className="footer-li">
              <a href="/job-description" className="footer-a">
                Job Overviews
              </a>
            </li>
          </ul>
        </div>
        <div className="copy-right">
          © 2023 Job Hero Limited. All rights reserved.
        </div>
      </div>
      <ScrollToTop smooth />
    </footer>
  );
};

export default Footer;
