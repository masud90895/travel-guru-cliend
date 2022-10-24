import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { BookingContext } from "../App";

const Hotels = () => {
  const { startDate, startDate1, destination, origin } =
    useContext(BookingContext);
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  //   const d = new Date();
  let month = months[startDate.getMonth()];
  let month1 = months[startDate1.getMonth()];

  const Hotels = useLoaderData();
  const { hotels, map } = Hotels;
  return (
    <>
      <div className="xl:mx-auto xl:container py-20 2xl:px-0 px-6">
        <div className="lg:flex items-center justify-between">
          <div
            className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8"
            role="list"
          >
            <img
              src="https://i.ibb.co/0n6DSS3/bgimg.png"
              className="absolute w-full -ml-12 mt-24"
              alt="background circle images"
            />
            <div className="mb-4">
              <mark className="text-lg font-bold">
                You Stays Here {startDate?.getDate()} {month} to{" "}
                {startDate1?.getDate()} {month1} {startDate1.getFullYear()}
              </mark>
              <h2></h2>
              <h1 className="text-2xl font-bold">
                Stay in <span className="text-[#F9A51A]">{Hotels.place}</span>
              </h1>
            </div>
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                role="listitem"
                className="bg-white cursor-pointer flex gap-4 shadow-lg rounded-lg  relative z-30 mb-5"
              >
                <div className="md:flex items-center justify-between">
                  <img
                    className="lg:w-[330px] w-[405px] h-[300px] lg:h-[214px]"
                    src={hotel.image}
                    alt=""
                  />
                </div>
                <div className="lg:p-8 p-2">
                  <h3 className="text-2xl font-bold text-mono mb-2">
                    {hotel.title}
                  </h3>
                  <p className="text-gray-500">{hotel.opportunity}</p>
                  <div className="mt-2 flex justify-between">
                    <p className="flex items-center">
                      <AiFillStar className="text-[#F9A51A]" />
                      {hotel.star}
                    </p>
                    <p>
                      <span className="font-bold">${hotel.price}/</span>night
                    </p>
                    <p>
                      <span className="font-bold">${hotel.total}/</span>total
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <iframe
              src={map}
              className="lg:w-[800px] lg:h-[700px] w-[95%] h-[400px]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotels;
