import React from "react";
import { findResumeExamplesGreen, findResumeExamplesWhite, heroBanner, homeBrandImgD, homeBrandImgM, revampYourResumeGreen, revampYourResumeWhite, writeYourCoverLetterGreen, writeYourCoverLetterWhite } from "../../../../comman/images";
import './hero.scss';


const Hero = () => {
  return (
    <section className="green-hero ">
      <div className="container">
        <h1 className="h1-jh">
          <div className="txt-bold">Jump Start Your Career</div>
          <div className="txt-lite">
            With Our Resume and Cover Letter Builders
          </div>
        </h1>
        <a rel="nofollow" className="hero-banner-img" href="/build-resume">
          <img
            src={heroBanner}
            srcset={heroBanner}
            sizes="50vw"
            alt="Jump start your career"
            width="1180"
            height="777"
          />
        </a>
        <div className="huntabswrap">
          <div className="huntabs">
            <a rel="nofollow" className="primer-res" href="/build-resume">
              <div className="uppercuts-img">
                <img
                  className="realty lazy"
                  src={revampYourResumeGreen}
                  alt="revamp-resume"
                  width="47"
                  height="55"
                  style={{aspectRatio:47/55}}
                />
                <img
                  className="showty lazy"
                  src={revampYourResumeWhite}
                  alt="revamp-resume"
                  width="47"
                  height="55"
                  style={{aspectRatio:47/55}}
                />
              </div>
              <p className="tabs-floating-p">
                Revamp Your <span>Resume</span>
              </p>
            </a>
          </div>
          <div className="huntabs">
            <a rel="nofollow" className="primer-res" href="/build-letter">
              <div className="uppercuts-img">
                <img
                  className="realty lazy"
                  src={writeYourCoverLetterGreen}
                  alt="write-cover-letter"
                  width="48"
                  height="56"
                  style={{aspectRatio:48/56}}
                />
                <img
                  className="showty lazy"
                  src={writeYourCoverLetterWhite}
                  alt="write-cover-letter"
                  width="48"
                  height="56"
                  style={{aspectRatio:48/56}}
                />
              </div>
              <p className="tabs-floating-p">
                Write Your <span>Cover Letter</span>
              </p>
            </a>
          </div>
          <div className="huntabs">
            <a className="primer-res" href="/resume/examples">
              <div className="uppercuts-img">
                <img
                  className="realty lazy"
                  src={findResumeExamplesGreen}
                  alt="find-resume"
                  width="50"
                  height="51"
                  style={{aspectRatio:50/51}}
                />
                <img
                  className="showty lazy"
                  src={findResumeExamplesWhite}
                  alt="find-resume"
                  width="50"
                  height="51"
                  style={{aspectRatio:50/51}}
                />
              </div>
              <p className="tabs-floating-p">
                Find <span>Resume Samples</span>
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="home-page-brand-wrapper">
        <div className="home-page-brand-wrapper-inner">
          <span className="home-page-featured-in">Featured in:</span>
          <img
            src={homeBrandImgD}
            sizes="50vw"
            alt="Featured in"
            width="798"
            height="41"
            className="home-page-brand-img lazy"
            srcset={`${homeBrandImgM} 300w, ${homeBrandImgD}`}
            // srcset="/webpages/images/homepage/home-brand-img-m.png 300w, /webpages/images/homepage/home-brand-img-d.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
