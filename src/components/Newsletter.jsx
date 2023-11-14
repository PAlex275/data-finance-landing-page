import React from "react";
const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className=" lg:col-span-2 my-4">
          <h2 className="md:text-3xl sm:text-2xl text-lg font-bold ">
            Want tips & tricks to optimize your flow?
          </h2>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="flex flex-col sm:flex-col items-center justify-between w-full">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="flex p-3 w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium sm:ml-4 ml-0 mx-auto my-6 py-3 text-black">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our{" "}
            <span className="text-[#00df9a]">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
