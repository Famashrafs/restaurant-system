import React from 'react';
import Slider from 'react-slick';
import './css/LandingHeaderSlider.css'; // Add custom styles here
import sliderImage from "../images/landing-slider.jpg"
import sliderImage2 from "../images/246791222_304105254553129_1129386980288736572_n.jpg"
import sliderImage3 from "../images/467295323_18011073434652040_9187375838637802599_n.jpg"
const LandingHeaderSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const slides = [
    {
      id: 1,
      title: "Grand Opening Event",
      description: "Join us for the grand opening of our new restaurant branch!",
      image: sliderImage, // Replace with event image
    },
    {
      id: 2,
      title: "Special Holiday Menu",
      description: "Discover our exclusive holiday dishes available now!",
      image: sliderImage2,
    },
    {
      id: 3,
      title: "Live Music Night",
      description: "Experience live performances while enjoying your meal!",
      image: sliderImage3,
    },
  ];

  return (
    <Slider {...sliderSettings}>
      {slides.map((slide) => (
        <div key={slide.id} className="slider-item">
          <img src={slide.image} alt={slide.title} className="slider-image" />
          <div className="slider-content">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default LandingHeaderSlider;
