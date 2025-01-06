import { Grid } from "@mui/material";
import React from "react";
import {
  powerfulResourceCareersGreen,
  powerfulResourceCareersWhite,
  powerfulResourceCoverLetterGreen,
  powerfulResourceCoverLetterWhite,
  powerfulResourceInterviewGreen,
  powerfulResourceInterviewWhite,
  powerfulResourceResumeGreen,
  powerfulResourceResumeWhite,
} from "../../../../comman/images";
import "./powerfulResources.scss";
const PowerfulResources = () => {
  return (
    <section class="powerfulResources two-column-resouces graysec">
      <h2 class="marksh2">More Powerful Resources</h2>
      <div class="flex-jh inner-container mb-0">
        <Grid container spacing={3}>
          <Grid item lg={6} md={12} sm={12} xs={12}>
          
          {/* <div class="flex-col"> */}
            <p class="para">
              In addition to our resume and cover letter resources, JobHero
              offers a wealth of information about the job hunt and interview
              process in our{" "}
              <a href="/career-guides" class="links">
                Career Guides
              </a>{" "}
              section.
            </p>
            <p class="para">Use it to get a leg up on the competition!</p>
            <p class="para">
              Or, if you're looking to build a career from scratch or start a
              new one, our{" "}
              <a
                href="/career-guides/careers/planning/how-to-become"
                class="links"
              >
                How to Become
              </a>{" "}
              series will outline the ideal steps you should take for a variety
              of jobs.
            </p>
            <a
              href="/career-guides"
              class="home-page-cta home-page-cta-onhover"
            >
              Visit our Blog
            </a>
          {/* </div> */}
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
          {/* <div class="flex-col"> */}
            <div class="card-wrapper">
              <div class="col-1">
                <a href="/career-guides/resume" class="jh-card-panel">
                  <div class="card">
                    <img
                      src={powerfulResourceResumeGreen}
                      class="realt lazy"
                      alt="resume"
                      width="32"
                      height="42"
                      style={{ aspectRatio: 32 / 42 }}
                    />
                    <img
                      src={powerfulResourceResumeWhite}
                      class="showt lazy"
                      alt="resume"
                      width="32"
                      height="42"
                      style={{ aspectRatio: 32 / 42 }}
                    />
                    <h3>Resumes</h3>
                  </div>
                </a>
                <a href="/career-guides/cover-letter" class="jh-card-panel">
                  <div class="card">
                    <img
                      src={powerfulResourceCoverLetterGreen}
                      class="realt lazy"
                      alt="cover letter"
                      width="32"
                      height="42"
                      style={{ aspectRatio: 32 / 42 }}
                    />
                    <img
                      src={powerfulResourceCoverLetterWhite}
                      class="showt lazy"
                      alt="cover letter"
                      width="32"
                      height="42"
                      style={{ aspectRatio: 32 / 42 }}
                    />
                    <h3>Cover Letter</h3>
                  </div>
                </a>
              </div>

              <div class="col-1">
                <a href="/career-guides/interviews" class="jh-card-panel">
                  <div class="card">
                    <img
                      src={powerfulResourceInterviewGreen}
                      class="realt lazy"
                      alt="interview"
                      width="53"
                      height="42"
                      style={{ aspectRatio: 53 / 42 }}
                    />
                    <img
                      src={powerfulResourceInterviewWhite}
                      class=" showt lazy"
                      alt="interview"
                      width="53"
                      height="42"
                      style={{ aspectRatio: 53 / 42 }}
                    />
                    <h3>Interviews</h3>
                  </div>
                </a>
                <a href="/career-guides/careers" class="jh-card-panel">
                  <div class="card">
                    <img
                      src={powerfulResourceCareersGreen}
                      class="realt lazy"
                      alt="career"
                      width="40"
                      height="42"
                      style={{ aspectRatio: 40 / 42 }}
                    />
                    <img
                      src={powerfulResourceCareersWhite}
                      class="showt lazy"
                      alt="career"
                      width="40"
                      height="42"
                      style={{ aspectRatio: 40 / 42 }}
                    />
                    <h3>Careers</h3>
                  </div>
                </a>
              </div>
            </div>
          {/* </div> */}
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default PowerfulResources;
