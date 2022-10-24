import React, { useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { BookingContext } from "../App";

const Booking = ({id}) => {

  const {setStartDate,setStartDate1,startDate,startDate1,setDestination,setOrigin} =useContext(BookingContext)


  const handleOrigin = (e) => {
    setOrigin(e.target.value);
  }
  const handleDestination = (e) => {
    setDestination(e.target.value);
  }
  
  return (
    <form action=""  className=" mb-0 lg:w-[650px] space-y-4 rounded-lg p-8  bg-white shadow-2xl">
      <div className="w-72">
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Origin
        </label>
        <select
         onChange={handleOrigin}
          name="Origin"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 w-[100%] lg:w-[200%] dark:focus:border-blue-500 appearance-none"
        >
          <option>Dhaka</option>
          <option>Rajshahi</option>
          <option>Rangpur</option>
          <option defaultValue="">Khulna</option>
          <option>Jeshore</option>
          <option>Chattagram</option>
          <option>Barishal</option>
          <option>Noakhali</option>
          <option>Sylhet</option>
        </select>
      </div>
      <div className="w-72">
        <label
          htmlFor="Destination"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Destination
        </label>
        <select
        onChange={handleDestination}
          name="Destination"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 w-[100%] lg:w-[200%] dark:focus:border-blue-500 appearance-none"
        >
          <option>Cox's Baza</option>
          <option>Rajshahi</option>
          <option>Rangamati</option>
          <option defaultValue="">Kuakata</option>
          <option>Saint Martin'</option>
          <option>Sajek</option>
          <option>Sreemongol</option>
          <option>Shundarbans</option>
        </select>
      </div>

      <section className="lg:flex justify-between items-center">
      <div>
      <label
          htmlFor="from"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          from
        </label>
        <DatePicker
        
        className=" bg-gray-200 border border-gray-400 py-2 font-bold rounded pl-5"
          closeOnScroll={true}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          />
      </div>
      <div>
      <label
          htmlFor="to"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          To
        </label>
        <DatePicker
        className=" bg-gray-200 border border-gray-400 py-2 font-bold rounded pl-5"
          closeOnScroll={true}
          selected={startDate1}
          onChange={(date1) => setStartDate1(date1)}
        />
      </div>
      </section>

      <Link to={`../hotel/${id}`}>
      <button
        type="submit"
        className="block w-full mt-10 rounded-lg bg-[#F9A51A] px-5 py-3 text-sm font-medium text-black"
      >
        Start Booking
      </button>
      </Link>
    </form>
  );
};

export default Booking;
