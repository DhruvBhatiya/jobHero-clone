import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { trustpilotData } from "./trustpilotData";
import "./trustpilot.scss";
import { trustpilot } from "../../../../comman/images";



const Trustpilot = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
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
          slidesToShow: 2,
          slidesToScroll: 2,
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
  return (
    <div className="trustpilot-with-carousal ">
      <div className="tp-widget-joshua">
        <div class="container tpilot">
          <div class="summary">
            {/* <p class="excellent dis-none">
              <strong>EXCELLENT</strong>{" "}
              <img
                width="230"
                src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg"
                alt="Star Summary"
              />
            </p> */}
            <div class="trust-left-wrap">
              <p class="excellent">
                <span class="top-content">We're on</span>{" "}
                {/* <a
                  class="dis-none"
                  href="https://www.trustpilot.com/review/jobhero.com"
                  target="_blank"
                >
                  {" "}
                  113 reviews{" "}
                </a> */}
                <img
                  id="tile-star-alignment"
                  class="svg-logo"
                  src={trustpilot}
                  alt="logo"
                  width="90"
                  height="22"
                />
                <span class="bottom-content">Share your experience</span>
              </p>
            </div>
          </div>
          <div class="reviews" >
            <div
              class="wrap-slides"
              // style={{width: '1500%', transform: translateX('0px')}}
            >
              <Slider {...settings}>
                {trustpilotData.map((el) => (
                  <div class="tile">
                    <div class="summary-text">
                      <img
                        class="rendered"
                        id="tile-star-alignment"
                        src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg"
                        alt="tpstars"
                        width="100"
                      />
                      <div class="timeago">
                        <span>2 weeks ago</span>
                      </div>
                      <a
                        class="review-link"
                        target="_blank"
                        href="https://www.trustpilot.com/reviews/63a13a7f4d0773066a1f332d"
                      >
                        {el.title}
                      </a>
                      <p class="full-review">{el.description}</p>
                      <strong class="user-name">{el.name}</strong>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trustpilot;
