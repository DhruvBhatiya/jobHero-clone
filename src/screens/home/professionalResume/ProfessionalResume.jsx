import React from "react";
import {
  accountingIcon,
  bankingIcon,
  customerServiceIcon,
  educationIcon,
  engineeringIcon,
  foodServiceIcon,
  marketingIcon,
  medicalIcon,
  nursingIcon,
  salesIcon,
  teachingIcon,
} from "../../../comman/images";
import "./professionalResume.scss";

const resumeLinks = [
  { image: accountingIcon, title: "Accounting" },
  { image: bankingIcon, title: "Banking" },
  { image: customerServiceIcon, title: "Customer Service" },
  { image: educationIcon, title: "Education" },
  { image: engineeringIcon, title: "Engineering" },
  { image: foodServiceIcon, title: "Food Service" },
  { image: marketingIcon, title: "Marketing" },
  { image: medicalIcon, title: "Medical" },
  { image: nursingIcon, title: "Nursing" },
  { image: salesIcon, title: "Sales" },
  { image: teachingIcon, title: "Teaching" },
];

const ProfessionalResume = () => {
  return (
    <section className="graysec">
      <div className="home-page-search">
        <h2 className="marksh2 mt-0">Professional Resume Examples for Inspiration</h2>
        <div className="search-wrapper">
          <p className="para">
            JobHero’s other main superpower is to help you in your job hunt with
            our extensive library of{" "}
            <a href="/resume/examples" className="links">
              resume examples
            </a>{" "}
            that you can search by job title.
          </p>

          <p className="para">
            The power of a good example is that it can help you see how you can
            make your resume stronger!
          </p>

          <p className="para">
            Take some time to search through our collection for the sample you
            need:
          </p>

          <div className="capsule-button-wrapper">
            {resumeLinks.map((el, index) => (
              <a href="/resume/examples/accounting" className="flex-item1" key={el.index}>
                <img
                  src={el.image}
                  className="valuable-image-icon lazy"
                  alt={el.title}
                  width="21"
                  height="19"
                  style={{ aspectRatio: 21 / 19 }}
                />
                {el.title}
              </a>
            ))}
          </div>

          <div className="samples-search">
            <form className="cajasearch" id="search-forma" action="#">
              <div className="input-holder">
                <input
                  type="text"
                  placeholder="Start typing any job title"
                  name="keyword"
                  id="title_top"
                  className="searchbox-input ui-autocomplete-input"
                  data-url="/resumes/autocompletesearch"
                  autocomplete="off"
                />
                <svg
                  width="20"
                  height="20"
                  className="search-icon-svg"
                  role="img"
                  viewBox="2 9 20 5"
                  focusable="false"
                  aria-label="Search"
                >
                  <path
                    fill="#1D8665"
                    className="search-icon-path"
                    d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                  ></path>
                </svg>
                <div className="autocomplete-holder">
                  <ul
                    id="ui-id-1"
                    tabindex="0"
                    className="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front"
                    style={{ display: "none" }}
                  ></ul>
                </div>
              </div>
            </form>
          </div>
        </div>
        <br />
        <p className="marksp mb-0">
          We’ve also got you covered with{" "}
          <a href="/cover-letter/examples" className="links">
            great cover letter examples
          </a>{" "}
          too!
        </p>
      </div>
    </section>
  );
};

export default ProfessionalResume;
