import React, { useEffect, useState } from 'react';
import './Testimonial.css';
import Quinten from "./Quintey.png"
import Nikki from "./Nikki.png"
import Robert from "./Robert.png"
import Spencer from "./Spencer.png"

const testimonials = [
  {
    text: "Printify has been an incredible service for us musicians unable to keep large amount of inventory - 1,000 shirts in our jam space. Thanks Printify! ",
    name: "Robert A. Voltaire",
    img: Robert,
  },
  {
    text: " We chose Printify because of their offerings as well as their incredibly low prices. After several years, and their platform just keeps getting better and better. ",
    name: "Quinten Barney",
    img: Quinten,
  },
  {
    text: " Printify has been a amazing partner to work with as we grow our business, from the range of merch we can make for our customers to working with our Customer Service team ",
    name: "Nikki",
    img: Nikki,
  },
  {
    text: " Using Printify has been a great experience. Customer service is always very quick to respond and handle any issues that our customers may have.",
    name: "Spencer, Brett, and Kyle",
    img: Spencer,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollTo = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
        <div class="bg-white">
  <div class="container mx-auto px-10 py-12">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="flex items-center">
        <h1 class="text-4xl md:text-5xl font-semibold text-gray-800">Trusted by over 8M sellers around the world</h1>
      </div>
      <div class="flex items-center md:justify-end">
        <p class="text-lg md:text-xl text-gray-600">
          Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.
        </p>
      </div>
    </div>
  </div>
</div>
<div className='testiMain'>
      <ul className="slider" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
        {testimonials.map((testimonial, index) => (
          <li key={index} className={`item ${index === currentIndex ? 'animation' : ''}`}>
            <div className="testimonial">
              <p>"{testimonial.text}"</p>
              <p>{testimonial.name}</p>
              <p>{testimonial.title}</p>
            </div>
            <img className="image" src={testimonial.img} alt={testimonial.name} />
          </li>
        ))}
      </ul>
      <nav>
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`btn ${index === currentIndex ? 'expand' : ''}`}
            data-index={index}
            onClick={() => scrollTo(index)}
          ></button>
        ))}
      </nav>
      </div>
    </main>
  );
};

export default Testimonial;
