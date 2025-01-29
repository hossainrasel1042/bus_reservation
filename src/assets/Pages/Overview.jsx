import React, { useState, useEffect } from 'react';
import Discount from '../components/Discount';
import Header from '../components/Header';
import { useNavigate } from 'react-router';
import useAuthRedirect from '../components/useAuthRedirect';
const Overview = () => {
    useAuthRedirect();
    const navigate=useNavigate();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ticketPrice = 500;
  const discount = 20;
  const originCity = "Dhaka";
  const destinationCity = "Chittagong";

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop', 
      title: 'Coming soon!',
      description: 'The new level of comfort',
      buttonText: 'Explore More',
    },
    {
      image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop',
      title: 'Luxury Travel',
      description: 'Experience premium comfort',
      buttonText: 'Learn More',
    },
    {
      image: '/image1.jpg',
      title: 'Special Offers',
      description: 'Book now and save big',
      buttonText: 'View Offers',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlideIndex]); // Important: Add currentSlideIndex to the dependency array

  const moveSlide = (direction) => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + direction + slides.length) % slides.length);
  };

  const currentSlide = (index) => {
    setCurrentSlideIndex(index);
  };

  return (
    <div className="flex h-screen bg-black">
      <main className="flex-1 overflow-auto bg-white">
        <Header/>

        <div className="p-6">
          <h2 className="text-2xl mb-6">
            <span className="text-[#FF8E48] font-medium"> Good Evening!! </span>
            <span className="text-gray-500 text-[15px]">, Hossain Rasel</span>
          </h2>
<Discount
price={ticketPrice}
discountPercentage={discount}
origin={originCity}
destination={destinationCity}
/>
<div className='mb-4'></div>
          <div className="relative mb-6 rounded-[20px] overflow-hidden h-[358px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-item absolute w-full h-full transition-opacity duration-500 ease-in-out ${currentSlideIndex === index ? 'opacity-100' : 'opacity-0'}`} // Corrected classes
                style={{display: currentSlideIndex === index ? 'block' : 'none'}}
              >
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center px-8">
                  <h3 className="text-3xl font-bold text-white mb-2">{slide.title}</h3>
                  <p className="text-xl text-white mb-4">{slide.description}</p>
                  <button className="w-fit px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            ))}

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    currentSlideIndex === index ? 'bg-white' : 'bg-white/60'
                  } hover:bg-white`}
                  onClick={() => currentSlide(index)}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-lg bg-zinc-800">
              <div className="relative h-[200px]">
                <img src="/image3.jpg" alt="Bus Interior" className="h-full w-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center object-bottom">
                  <button onClick={()=>{navigate('/user/booking')}} className="rounded-md bg-orange-500 px-6 py-2 font-medium text-white hover:bg-orange-600">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-gray-100">
              <div className="relative h-[200px]">
                <div className="absolute inset-0 p-4"></div>
                <div className="h-full rounded-lg bg-gray-200">
                  <img src="/image2.png" alt="" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Overview;