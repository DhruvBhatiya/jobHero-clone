import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { stars } from "../../../../comman/images";

import "./jobHeroesSayAboutUs.scss";
import { JobHeroesSayAboutUsDATA } from "./jobHeroesSayAboutUsDATA";

const JobHeroesSayAboutUs = () => {
  const settings = {
    className: "center",
    centerMode: true,
    autoplay: true,
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,

    initialSlide: 0,

    nextArrow: "",
    prevArrow: "",

    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="JobHeroesSayAboutUs">
      <h2 class="marksh2 mt-0">What Job Heroes Say About Us</h2>

      <div id="owl-demolition" className="resumeSlider">
        <Slider {...settings}>
          {JobHeroesSayAboutUsDATA.map((el, index) => (
            <div class="item pt-20">
              <div class="user-panel">
                <div class="jh-flex">
                  <div class="user-img">
                    <img
                      data-src={el.image}
                      class="owl-lazy"
                      alt={el.name}
                      width="40"
                      height="40"
                      src={el.image}
                      style={{ opacity: 1 }}
                    />
                  </div>
                  <div>
                    <div class="user-name f-14 txt-green">{el.name} </div>
                    <div class="jh-flex align-centr">
                      <span class="rating-img">
                        <img
                          data-src={stars}
                          class="owl-lazy"
                          alt="User Reviews"
                          width="89"
                          height="15"
                          src={stars}
                          style={{ opacity: 1 }}
                        />
                      </span>
                      <span class="color-1 f-11 text-bolder">4.5/5</span>
                    </div>
                  </div>
                </div>
                <p class="user-comments f-14 color-1 mt-20">"{el.message}"</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default JobHeroesSayAboutUs;
