import React from "react";
import { getYourFoot } from "../../../../comman/images";
import "./footDoor.scss";

const FootDoor = () => {
  return (
    <>
      <section className="section-with-background">
        <h2 className="marksh2">Let's Get Your Foot in the Door</h2>
        <div className="content-with-cta">
          <p>
            You’ve seen all the ways that JobHero can help you on your job hunt!{" "}
          </p>
          <p>
            Don’t miss any opportunities by waiting. Use our builder so that you
            can start sending out your resume and cover letter today!
          </p>
          <a rel="nofollow" href="/build-resume" className="home-page-cta">
            Build a Resume Now
          </a>
        </div>
        <div className="get-your-foot-img">
          <img
            src={getYourFoot}
            className="lazy"
            alt="get your foot on the door"
            width="1831"
            height="473"
            style={{ aspectRatio: 1831 / 473 }}
          />
        </div>
      </section>
      <section class="full-width-disclaimer">
        <div class="footer_note">
          {" "}
          <sup>*</sup>The names and logos of the companies referred to above are
          all trademarks of their respective holders. Unless specifically stated
          otherwise, such references are not intended to imply any affiliation
          or association with JobHero.
        </div>
      </section>
    </>
  );
};

export default FootDoor;
