import React from "react";
import reviews from "./data";
import Testimonial from "./Components/Testimonial";

const App = () => {
  return (
  <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
    <div className="text-center" >
      <h1 className="font-bold text-4xl">OUR TESTIMONIALS</h1>
      <div className="bg-violet-500 h-[4px] w-1/5 mt-1 mx-auto"></div>
      <Testimonial reviews={reviews}></Testimonial>
    </div>
  </div>
  );
};

export default App;
