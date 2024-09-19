import { Point } from 'Assets/svgs';
import React from 'react';

const PageHeader = () => {
  return (
    <div className="flex flex-row justify-between w-full h-[6rem]">
      <h1 className="text-white font-thin text-[2.5rem] leading-[3rem] ">Today’s leaderboard</h1>
      <div className="bg-[#1D1D1D] space-x-3 pt-[1rem] top-2 text-[1rem] font-[100] leading-[1.25rem] flex h-[3.5rem] w-[26.125rem] px-[1.5rem] py-[0.75rem] rounded-[0.5rem]">
        <p className='font-thin text-[1rem] leading-[1.25rem] text-white'>30 May 2022</p>
        <Point className='mt-[0.5rem]'/>
        <button className="bg-[#9BFF00] text-[0.875rem] font-thin leading-[1.05875rem] h-[1.563rem] w-[9.75rem]  rounded-[0.5rem]">
        Submissions OPEN </button>
        <Point className='mt-[0.5rem]'/>
        <p className='text-white font-thin text-[1rem] leading-[1.25rem]'>11:34</p>
      </div>
    </div>
  )
}

export default PageHeader