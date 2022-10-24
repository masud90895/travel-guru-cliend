import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import bg from '../assist/images/Rectangle1.png'
import { FaArrowRight } from 'react-icons/fa';
import Booking from './Booking';

const SelectedPlace = () => {
    const seleted = useLoaderData()
    const {id,place,ditailes} = seleted;
    return (
        <section style={{ backgroundImage: `url(${bg})` }}  className="relative lg:flex bg-cover bg-center bg-no-repeat ">
        <div className="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/75 sm:to-black/25"></div>
  
        <div className="relative mx-auto lg:w-[650px]  max-w-screen-2xl text-white px-4 py-22 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl lg:w-[650px] text-center sm:text-left">
            <h1 className="md:text-[98px] text-[60px] font-serif lg:w-[650px] font-bold text-white">
            {place}         
            </h1>
  
            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
           {ditailes[0].ditaile}
            </p>
  

          </div>
        </div>
       {/* date  */}
       <div className='relative lg:mt-[250px] mt-[50px] md:mt-[0px] lg:w-2/4 z-50'>
       <Booking id={id}/>
       </div>
      </section>
    );
};

export default SelectedPlace;