import { Sun } from 'lucide-react'
import { Moon } from 'lucide-react'
import React, { useEffect, useState } from 'react'

// 버튼 클릭할 때 마다 다크/라이트 모드 변경
const ModeCtrl = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(()=>{
    console.log('ModeChange');
  }, [darkMode]);

  return (
    <button onClick={()=>setDarkMode(!darkMode)}>
      {darkMode ? <Sun /> : <Moon />}
    </button>
  )
}

export default ModeCtrl