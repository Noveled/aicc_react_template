import React from 'react'
import DDISection from './DDISection'
import MPCSection from './MPCSection'
import BTSection from './BTSection'
import RTPSection from './RTPSection'
import CTSection from './CTSection'
import ADSection from './ADSection'
import StartNowSetion from './StartNowSetion'

const index = () => {
  // 스타일을 정의합니다.
  const hrStyle = {
    border: 'none',
    height: '2px',
    background: 'linear-gradient(to right, rgba(69, 59, 205, 0) 0%, rgba(69, 59, 205, 0.6) 50%, rgba(69, 59, 205, 0) 100%)',
    margin: '20px 0' // 적절한 마진을 추가할 수 있습니다.
  };

  return (
    <div>
      <div className='container'>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl tracking-tight font-semibold font-customFontEn text-center'>Easily Build <span className='bg-gradient-to-r from-indigo-200 to-indigo-800 text-transparent bg-clip-text font-customFontKr'>Your Code</span></h2>
        <p className='text-xl sm:text-2xl lg:text-3xl text-center text-indigo-300 py-2 font-semibold font-customFontKr'>당신을 도와줄 마법같은 기능들을 단 한번의 클릭으로 만나보세요.</p>

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1 className='font-customFontEn'>How Nvidia Grew From Gaming To A.I. Giant, Now Powering ChatGPT</h1>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#000', margin: '0 auto' }}>
            <iframe
                    title="YouTube Video"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/d3L2uPuxOxU?si=ShLAMquweAycki1x"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
                ></iframe>
            </div>
            <div className='pt-6'> </div>
        </div>
        
        <hr style={hrStyle} />
        <DDISection />
        <MPCSection />
        <BTSection />
        <RTPSection />
        <CTSection />
        <ADSection />

        <StartNowSetion />

      </div>
    </div>
  )
}

export default index