import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';


const Card = (props) => {

    let review =props.review;
  return (
    <div className=' md:relative'>
      <div className='absolute top-[-7rem] z-[15] mx-auto'>
        <img
        className='rounded-full h-[140px] w-[140px]' 
        src={review.image}></img>
        <div className='bg-violet-500 h-[140px] w-[140px] rounded-full absolute top-[-6px] left-[10px] z-[-1]'></div>
      </div>

      <div className='mt-7'>
        <p className='font-bold text-2xl capitalize tracking-wider'>{review.name}</p>
      </div>

      <div className='mt-1'>
        <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
      </div>

      <div className='text-violet-400 mx-[49%] mt-5 '> <FaQuoteLeft/></div>

      <div className='text-center mt-5 text-slate-500'>{review.text}</div>
      <div className='text-violet-400 mx-[49%] mt-5 '> <FaQuoteRight/></div>

      
    </div>
  )
}

export default Card
