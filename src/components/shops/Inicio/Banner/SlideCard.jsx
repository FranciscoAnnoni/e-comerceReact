import React from "react"
import Sdata from "./Sdata"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "react-router-dom"
import "./Home.css"

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  };
  return (
    <>
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <div className='box d_flexCard top' key={`slide-${index}`}>
              <div className='left'>
                <h1>{value.title}</h1>
                <p>{value.desc}</p>
                <Link to='/productos-relojesPared'>
                <button className='btn-primary cursorPointer'> Ver Productos </button>
                </Link>
              </div>
              <div className='right'>
                <img src={value.cover} alt='' />
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default SlideCard;

