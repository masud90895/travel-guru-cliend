import React from "react";
import { Link } from "react-router-dom";
import bg from '../assist/images/Rectangle1.png'
import { FaArrowRight } from 'react-icons/fa';
import Carousel from "./Carousel";
import toast from "react-hot-toast";





const Home = () => {  

  return (
    <section style={{ backgroundImage: `url(${bg})` }}  className="relative lg:flex bg-cover bg-center bg-no-repeat ">
      <div className="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/75 sm:to-black/25"></div>

      <div className="relative mx-auto  max-w-screen-2xl text-white px-4 py-22 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl lg:w-[650px] lg:ml-[110px] text-center sm:text-left">
          <h1 className="text-[98px] font-serif font-bold text-white">
          Cox's bazar         
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
          Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <p
              onClick={()=>toast.error('please selected place')}
              className="w-[45%]  mx-auto md:mx-0 rounded bg-[#F9A51A] px-12 py-3 text-sm font-medium text-black shadow hover:border hover:border-[#F9A51A] hover:bg-white focus:outline-none focus:ring active:bg-rose-500 sm:w-auto flex items-center"
            >
              <span>Booking</span> < FaArrowRight className="ml-2"/>
            </p>
            

            
          </div>
        </div>
      </div>
      {/* carousel  */}
     <div>
      <Carousel/>
     </div>
    </section>
  );
};

export default Home;
