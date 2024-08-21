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
    <div className="flex flex-col md:flex-row h-[70vh] lg:h-[50vh] md:h-[50vh]  custom-lg:h-[54vh] xl:h-[68vh]  3xl:h-[48vh] max-3xl:h-[55vh] px-2 pb-11">
      <div className="w-full md:w-2/6 flex flex-col justify-center items-center relative bg-white">
        <div className="relative w-full h-[58vh] sm:h-[72vh]  md:h-[47vh] md:mt-8 lg:h-[48vh] lg:mt-8 custom-lg:h-[52vh] custom-lg:mt-8 xl:h-[64vh] 2xl:[55vh] 3xl:h-[46vh] 3xl:mt-[-0.1vh] ">
          <img 
            src={Image} 
            alt="Explore" 
            className="w-full h-full object-cover  shadow-lg" 
          />
          <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 md:px-6 py-2 md:py-1 border-2 border-white text-white rounded-md shadow-md hover:bg-gray-700 transition duration-300 ease-in-out">
            Explore
          </button>
        </div>
      </div>
      <div className="w-full md:w-4/6 p-1">
        <Carousel 
          showThumbs={false} 
          showStatus={false} 
          infiniteLoop={true}
          autoPlay={true} 
          interval={3000} 
          transitionTime={600}
          emulateTouch={true}
          swipeable={true} // Enables mouse dragging for slides
        >
          <div className="grid grid-cols-2 md:grid-cols-2 gap-2 mt-2 md:mt-[-0.4%]  ">
            <img 
              src={godrej1} 
              alt="Slide 1" 
              className="w-full  h-[40vh] md:h-[47vh] lg:h-[48vh] custom-lg:h-[52vh] xl:h-[64vh] 2xl:h-[55vh] 3xl:h-[46vh] max-3xl:h-[55vh] object-cover shadow-gray-200 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            />
            <img 
              src={godrej2} 
              alt="Slide 2" 
              className="w-full h-[40vh] md:h-[47vh] lg:h-[48vh] custom-lg:h-[52vh]  xl:h-[64vh]  2xl:h-[55vh] 3xl:h-[46vh] max-3xl:h-[55vh] object-cover shadow-gray-200 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-2  mt-2 md:mt-[-0.4%] ">
            <img 
              src={godrej3} 
              alt="Slide 3" 
              className="w-full h-[40vh] md:h-[47vh] lg:h-[48vh] custom-lg:h-[52vh] xl:h-[64vh]  2xl:h-[55vh] 3xl:h-[46vh] max-3xl:h-[55vh] object-cover shadow-gray-200 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            />
            <img 
              src={godrej2} 
              alt="Slide 4" 
              className="w-full h-[40vh] md:h-[47vh] lg:h-[48vh] custom-lg:h-[52vh] xl:h-[64vh] 2xl:h-[55vh] 3xl:h-[46vh] max-3xl:h-[55vh] object-cover shadow-gray-200 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:mt-[-0.4%]  mt-2">
            <img 
              src={godrej5} 
              alt="Slide 5" 
              className="w-full h-[40vh] md:h-[47vh] lg:h-[48vh] custom-lg:h-[52vh] xl:h-[64vh] 2xl:h-[55vh] 3xl:h-[46vh] max-3xl:h-[55vh] object-cover shadow-gray-200 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            />
            <img 
              src={godrej2} 
              alt="Slide 6" 
              className="w-full h-[40vh] md:h-[47vh] lg:h-[48vh] custom-lg:h-[52vh] xl:h-[64vh] 2xl:h-[55vh] 3xl:h-[46vh] max-3xl:h-[55vh] object-cover shadow-gray-200 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default MainSection;
