import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from '../assets/image/imagesgodrej.jpeg';
import godrej1 from '../assets/image/godrej1.jpeg';
import godrej2 from '../assets/image/godrej2.jpeg';
import godrej3 from '../assets/image/godrej3.jpeg';
import godrej4 from '../assets/image/godrej4.jpeg';
import godrej5 from '../assets/image/godrej5.jpeg';

const MainSection = () => {
  return (
    <div className="flex flex-col md:flex-row h-[70vh] lg:h-[48vh] md:h-[48vh] custom-lg:h-[54vh] 3xl:h-[47vh]">
      <div className="w-full md:w-2/6 p-4 flex flex-col justify-center items-center relative bg-white">
        <div className="relative w-full h-2/3 md:h-full">
          <img 
            src={Image} 
            alt="Explore" 
            className="w-full h-full object-cover shadow-lg" 
          />
          <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 md:px-6 py-2 md:py-1 border-2 border-white text-white rounded-md shadow-md hover:bg-gray-700 transition duration-300 ease-in-out">
            Explore
          </button>
        </div>
      </div>
      <div className="w-full md:w-4/6 p-2">
        <Carousel 
          showThumbs={false} 
          showStatus={false} 
          infiniteLoop={true}
          autoPlay={true} 
          interval={3000} 
          transitionTime={600}
          emulateTouch={true}
        >
          <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
            <img src={godrej1} alt="Slide 1" className="w-full h-[40vh] md:h-[47vh] lg:h-[47vh] custom-lg:h-[52vh] object-cover shadow-gray-200 shadow-lg" />
            <img src={godrej2} alt="Slide 2" className="w-full h-[40vh] md:h-[47vh] lg:h-[47vh] custom-lg:h-[52vh] object-cover shadow-gray-200 shadow-lg" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
            <img src={godrej3} alt="Slide 3" className="w-full h-[40vh] md:h-[47vh] lg:h-[47vh] custom-lg:h-[52vh] object-cover shadow-gray-200 shadow-lg" />
            <img src={godrej4} alt="Slide 4" className="w-full h-[40vh] md:h-[47vh] lg:h-[47vh] custom-lg:h-[52vh] object-cover shadow-gray-200 shadow-lg" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
            <img src={godrej5} alt="Slide 5" className="w-full h-[40vh] md:h-[47vh] lg:h-[47vh] custom-lg:h-[52vh] object-cover shadow-gray-200 shadow-lg" />
            <img src={godrej2} alt="Slide 6" className="w-full h-[40vh] md:h-[47vh] lg:h-[47vh] custom-lg:h-[52vh] object-cover shadow-gray-200 shadow-lg" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default MainSection;
