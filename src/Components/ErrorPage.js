import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" h-full">
      <div className="flex items-center justify-center py-12">
        <div className="bg-white border rounded-md flex items-center justify-center mx-4 md:w-2/3 ">
          <div className="flex flex-col items-center py-16 ">
            <img
              className="px-4 hidden md:block w-[70%]"
              src="https://i.ibb.co/9wRmWVR/6333074.jpg"
              alt=""
            />
            <img
              className="md:hidden"
              src="https://i.ibb.co/9wRmWVR/6333074.jpg"
              alt=""
            />
            <h1 className="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-gray-800">
              OOPS!{" "}
            </h1>
            <p className="px-4 pb-10 text-base leading-none text-center text-gray-600">
              No signal here! we cannot find the page you are looking for{" "}
            </p>
            <Link to="/">
              <button className="mx-4 h-10 w-44 border rounded-md  text-base  text-black bg-[#F9A51A] hover:bg-white hover:border-2 hover:border-[#F9A51A] hover:text-[#F9A51A] focus:outline-none focus:ring-2 focus:ring-opacity-50 ">
                Go Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
