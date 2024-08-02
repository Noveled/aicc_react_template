import { Link } from 'react-router-dom';
import React from 'react';
import { heroLinks } from '../../constants/data';

import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';

const HeroSection = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
      <h1 className='text-4xl sm:text-6xl lg:text-7xl font-customFontEn tracking-tight text-neutral-700 dark:text-neutral-300 font-semibold text-center'>AceDot Build Tools{' '}
      <span className='bg-gradient-to-r from-indigo-200 to-indigo-800 text-transparent bg-clip-text font-customFontKr'>for Developers</span></h1>
      <p className='mb-10 text-center text-base text-neutral-400 max-w-4xl lg:text-lg sm:text-sm mb:text-sm'>국무총리는 국무위원의 해임을 대통령에게 건의할 수 있다. 국무총리는 국회의 동의를 얻어 대통령이 임명한다. 국민경제의 발전을 위한 중요정책의 수립에 관하여 대통령의 자문에 응하기 위하여 국민경제자문회의를 둘 수 있다.

국가의 세입·세출의 결산, 국가 및 법률이 정한 단체의 회계검사와 행정기관 및 공무원의 직무에 관한 감찰을 하기 위하여 대통령 소속하에 감사원을 둔다.</p>
    
      <div className='flex gap-4'>
        {
          heroLinks.map((item, idx)=>(
            <Link key={idx} to={item.to} className={`font-customFontEn border border-neutral-500 py-1 px-4 rounded-md ${
              idx === 0 &&
              'bg-gradient-to-r from-indigo-500 to-indigo-700 text-white'
            }`}>
            {item.text}
            </Link>
          ))
        }
      </div>
      <div className='flex mt-10 gap-4 justify-center items-center flex-col md:flex-row'>
        <video autoPlay muted loop className='.vid md:w-1/3 '>
          <source src={video1}></source>
        </video>
        <video autoPlay muted loop className='.vid md:w-1/3 '>
          <source src={video2}></source>
        </video>
      </div>
    </div>
  )
}

export default HeroSection