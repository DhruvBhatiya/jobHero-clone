import React, { useState } from "react";
import "./perksOfUsingOurBuilders.scss";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";
import {
  accordian0,
  accordian1,
  accordian2,
  accordian3,
} from "../../../comman/images";
import { Grid } from "@mui/material";

const AccorData = [
  {
    id: 1,
    title: "Over 30+ optimized template designs",
    detail:
      "Our templates are created by professional designers to ensure your resume looks sharp, is easy to read and can pass an applicant tracking system or ",
  },
  {
    id: 2,
    title: "Data-driven recommendations",
    detail:
      "Our resume builder automates the entire resume and cover letter process by walking you through it step-by-step. Best of all, the suggestions we make are pinpointed by our research to target key phrases that employers want to hear based on the job title to which you apply.",
  },
  {
    id: 3,
    title: "Complete customizability",
    detail:
      "If there are any changes you want to make to one of our standard templates, the resume builder makes it easy to change a color scheme, font or add or remove sections. This means you can change things with a quick click!",
  },
  {
    id: 4,
    title: "Over 4 different downloadable format options",
    detail:
      "Downloads can be made in .PDF, .JPEG, .SVG or .DOC formats. That way, you can send your resume or cover letter in whichever file type that an employer prefers!",
  },
];

const PerksOfUsingOurBuilders = () => {
  const [value, setValue] = useState(1);
  return (
    <section className="PerksOfUsingOurBuilders accordian-wrapper">
      <h2 className="marksh2 mt-perks">Perks of Using Our Builders</h2>

      <Grid container spacing={3} className="flex-jh">
        <Grid
          item
          lg={6}
          md={12}
          sm={12}
          xs={12}
          className="accordian-img-wrapper"
        >
          {/* <div className="flex-jh"> */}
          {/* <div className="accordian-img-wrapper"> */}
          {value == 1 && (
            <img
              src={accordian0}
              className="lazy accordian-img acc-0 open"
              alt="optimized template design"
              width="480"
              height="339"
              style={{ aspectRatio: 480 / 339 }}
            />
          )}
          {value == 2 && (
            <img
              src={accordian1}
              className="accordian-img acc-1"
              alt="data driven recommendation"
              width="483"
              height="291"
              style={{ aspectRatio: 483 / 291 }}
            />
          )}
          {value == 3 && (
            <img
              src={accordian2}
              className="accordian-img acc-2"
              alt="complete customizability"
              width="476"
              height="338"
              style={{ aspectRatio: 476 / 338 }}
            />
          )}
          {value == 4 && (
            <img
              src={accordian3}
              className="accordian-img acc-3"
              alt="different downloadable"
              width="439"
              height="358"
              style={{ aspectRatio: 439 / 358 }}
            />
          )}
          <div className="cta-btn-center">
            <a
              rel="nofollow"
              href="/build-resume"
              className="home-page-cta home-page-cta-onhover"
            >
              Build a Resume Now
            </a>
          </div>
          {/* </div> */}
        </Grid>
        <Grid
          item
          lg={6}
          md={12}
          sm={12}
          xs={12}
          className="accordian-inner-wrapper"
        >
          {/* <div className="accordian-inner-wrapper"> */}
          <Accordion preExpanded={[1]}>
            {AccorData.map((el) => (
              <AccordionItem uuid={el.id}>
                <AccordionItemHeading onClick={() => setValue(el.id)}>
                  <AccordionItemButton>{el.title}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>{el.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
          {/* </div> */}
        </Grid>
        {/* </div> */}
      </Grid>
    </section>
  );
};

export default PerksOfUsingOurBuilders;
