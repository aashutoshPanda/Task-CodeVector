import React, { Component } from 'react';
    import Swiper from 'react-id-swiper';
    const img_url_demo = "https:\/\/static.episodate.com\/images\/tv-show\/thumbnail\/23455.jpg";
    export default class Carousel extends Component {
      render() {
        const params = {
          activeSlideKey:"2",
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
          slidesPerView: 4,
          spaceBetween: 40
        },
        768: {
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
            <div key='0' style={{height:"350px", width:"300px",backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",  backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>Slide 1</div>
            <div  key='1' style={{height:"350px", width:"300px",backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",  backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>Slide 1</div>
            <div  key='2' style={{height:"350px", width:"300px",backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",  backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>Slide 1</div>
            <div  key='3' style={{height:"350px", width:"300px",backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",  backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>Slide 1</div>
            <div  key='4' style={{height:"350px", width:"300px",backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",  backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>Slide 1</div>
            

          </Swiper>
        )
      }
    }