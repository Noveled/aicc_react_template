import React, { useState } from 'react'
import { ctDetails } from '../../constants/data';

const CTSection = () => {
  const [moreInfo, setmoreInfo] = useState(false);
  // 스타일을 정의합니다.
  const hrStyle = {
      border: 'none',
      height: '2px',
      background: 'linear-gradient(to right, rgba(69, 59, 205, 0) 0%, rgba(69, 59, 205, 0.6) 50%, rgba(69, 59, 205, 0) 100%)',
      margin: '20px 0' // 적절한 마진을 추가할 수 있습니다.
  };

  return (
      <>
      {moreInfo ? (
          <div className='mt-12'>
              <div className='flex-col flex-wrap items-center'>
                  <div className='p-2 w-full text-center'>
                      <div className='text-4xl font-customFontKr mb-8'>견고한 협업 툴</div>
                      <p className='text-base font-customFontEn'>Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.</p>
                  </div>
                  {
                      ctDetails.map((content, idx) => (
                      <div key={idx} className={idx !== 0 && 'pt-1'}>
                          <h2 className='my-5 text-2xl text-indigo-400 font-semibold'>{content.title}</h2>
                          <div className='flex flex-col items-center w-4/5 mx-auto'>
                              <img src={content.image} alt={content.alt}></img>
                              <p className='text-sm text-center'>&lt; {content.alt} &gt;</p>
                          </div>
                          <p className='my-4 text-base font-customFontEn'>
                          {content.description}
                          </p>
                      </div>
                      ))
                  }
              </div>
              <div className='py-4'>
                  <span onClick={()=>{setmoreInfo(!moreInfo)}}
                  className='bg-neutral-800 text-indigo-500 rounded-full w-fit h-8 text-sm font-medium px-4 py-1 uppercase block m-auto mb-20 hover:bg-indigo-200 transition duration-300'>Close Details</span>
                  <hr style={hrStyle} />
              </div>
          </div>
      ) : (
          <div className='mt-12'>
          <div className='flex flex-wrap items-center'>
              <div className='p-2 w-full text-center'>
                  <div className='text-4xl mb-8 font-customFontKr'>견고한 협업 툴</div>
                  <p className='text-base font-customFontEn'>Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.</p>
              </div>
          </div>
          <div className='py-4'>
              <span onClick={()=>{setmoreInfo(!moreInfo)}}
              className='bg-neutral-800 text-indigo-500 rounded-full w-fit h-8 text-sm font-medium px-4 py-1 uppercase block m-auto mb-20 hover:bg-indigo-200 transition duration-300'>More Details</span>
              <hr style={hrStyle} />
          </div>
      </div>
      )}
      </>
)
}

export default CTSection