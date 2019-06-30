import React, { Component } from "react";
import reduced_tv_shows from "./carousel-data";
import Swiper from "react-id-swiper";

export default class Carousel extends Component {
  render() {
    const params = {
      activeSlideKey: `${Math.floor(reduced_tv_shows.length / 2)}`,
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      autoplay: {
        delay: 500,
      },
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
          768: {},
          slidesPerView: 3,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      }
    };

    return (
      <Swiper {...params}>
        {reduced_tv_shows.map((tv_show, index) => {
          return (
            <div
              key={index}
              style={{
                height: "300px",
                width: "250px",
                backgroundImage: "url(" + tv_show.image_thumbnail_path + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
            >
              {" "}
            </div>
          );
        })}
      </Swiper>
    );
  }
}
