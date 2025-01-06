import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { resumeData } from "./resumeData";
import "./resumeSlider.scss";

const ResumeSlider = () => {
  const settings = {
    className: "center",
    centerMode: true,
    
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,

    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };

 

  console.log("resumeData", resumeData);
  return (
    <div id="owl-demolition" className="resumeSlider">
      <Slider {...settings}>
        {resumeData.map((el, index) => (
          <div className="owl-item">
            <div className="item">
              <Link className="owl-img-wrapper" to="/build-resume">
                <img
                  className="owl-lazy"
                  data-src={el.image}
                  alt={el.title}
                  //  width="684"
                  //  height="883"
                  src={el.image}
                  style={{ opacity: 1 }}
                />
              </Link>
              <Link className="onhov-cta" to="/build-resume">
                Build a Resume Now
              </Link>
              <div className="name-hov">
                <span>{el.title}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ResumeSlider;
