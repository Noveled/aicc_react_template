import React from 'react'
import { Slack, Headset} from 'lucide-react';
import { Link  } from 'react-router-dom';
import CountdownTimer from '../CountdownTimer';

const StartNowSetion = () => {
  return (
    <div>
        <div className='flex justify-center pt-8 pb-16'>
        <Slack className='w-28 h-28 text-center text-violet-600' />
        </div>
        
        <h2 className='text-2xl sm:text-3xl lg:text-5xl tracking-tight font-semibold font-customFontEn text-center'>지금 <span className=' text-violet-600'>AceDot</span>을 사용해 보세요!</h2>
          
        <p className='text-center py-4'>놀라운 변화를 가져다줄 것입니다.</p>

        <div className='py-4'>
            <Link to="/signin">
            <span className='border-2 border-violet-600 text-white rounded-full w-fit h-14 text-2xl font-semibold px-4 py-2 block m-auto mb-20 hover:bg-violet-600 transition duration-300'>시작하기</span>
            </Link>
            <CountdownTimer targetDate="2024-08-12T23:59:59" />
            <Link to="/pp">
              <div className='flex'>
              <Headset /><h4 className='text-2xl'>상담 연결하기.</h4>
              </div>
            </Link>
        </div>
    </div>
  )
}

export default StartNowSetion