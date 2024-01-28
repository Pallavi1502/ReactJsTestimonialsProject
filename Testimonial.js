import React, { useState } from 'react'
import Card from './Card';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';

const Testimonial = (props) => {
    let reviews = props.reviews;
    let [index, setIndex] = useState(0);

    function leftHandler(){
      if(index-1 <0){
        setIndex(reviews.length-1);
      }
      else{
        setIndex(index-1);
      }
    }
    function rightHandler(){
      if(index+1 >= reviews.length){
        setIndex(0);
      }
      else{
        setIndex(index+1);
      }
    }
    function surpriseHandler(){
      let randomIndex=Math.floor(Math.random() * reviews.length);
      setIndex(randomIndex);
    }

  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 hover:shadow-xl rounded-md'>
      <Card review={reviews[index]}></Card>

      <div className='  text-3xl gap-3 mt-5 text-violet-400 font-bold '>
        <button 
        onClick={leftHandler}
        className='cursor-pointer hover:text-violet-500'>
          <FiChevronLeft></FiChevronLeft>
        </button>
        <button 
        onClick={rightHandler}
        className='curser-pointer hover:text-violet-500'>
          <FiChevronRight></FiChevronRight>
        </button>
      </div>
      <div className='mt-5'>
        <button 
        onClick={surpriseHandler}
        className='  bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
          Suprise me
        </button>
      </div>
    </div>
  )
}

export default Testimonial
