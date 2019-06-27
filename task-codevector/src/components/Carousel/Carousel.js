import React, { Component } from 'react';
    import Swiper from 'react-id-swiper';
    const img_url_demo = "https:\/\/static.episodate.com\/images\/tv-show\/thumbnail\/23455.jpg";
    export default class Carousel extends Component {
      render() {
        const params = {
          activeSlideKey:"3",
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        768: {
        },
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
            <div key='0' style={{height:"300px", width:"250px",backgroundImage: "url(" + "https://static.episodate.com/images/tv-show/thumbnail/43467.com" + ")",  backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>Slide 1</div>
            <div  key='1' style={{height:"300px", width:"250px",backgroundImage: "url(" + "https://static.episodate.com/images/tv-show/thumbnail/35624.jpg" + ")",  backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>Slide 1</div>
            <div  key='2' style={{height:"300px", width:"250px",backgroundImage: "url(" +  "https://static.episodate.com/images/tv-show/thumbnail/23455.jpg" + ")",  backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>Slide 1</div>
            <div  key='3' style={{height:"300px", width:"250px",backgroundImage: "url(" +  "https://static.episodate.com/images/tv-show/thumbnail/29560.jpg" + ")",  backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>Slide 1</div>
            <div  key='4' style={{height:"300px", width:"250px",backgroundImage: "url(" + "https://static.episodate.com/images/tv-show/thumbnail/43234.jpg" + ")",  backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>Slide 1</div>
            <div  key='4' style={{height:"300px", width:"250px",backgroundImage: "url(" + "https://static.episodate.com/images/tv-show/thumbnail/43234.jpg" + ")",  backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>Slide 1</div>
            <div  key='4' style={{height:"300px", width:"250px",backgroundImage: "url(" + "https://static.episodate.com/images/tv-show/thumbnail/43234.jpg" + ")",  backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>Slide 1</div>
            

          </Swiper>
        )
      }
    }