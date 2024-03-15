import React, {useState} from 'react'

function SimpleTheme() {
    const [theme, setTheme] = useState("dark");

    function handelToggle () {
        setTheme(theme === "dark" ?  "light" : "dark")
    }
  return (
    <div className={theme === "dark" ? 'bg-black text-white' : 'bg-white text-black' }>
        <div className='flex flex-col justify-center items-center gap-4 h-screen'>
        <h1 className='text-xl'>Anand Kumar</h1>
        <button className='border-2 px-4 py-2 rounded-xl ' onClick={handelToggle}>Clicked</button>
    </div>
    </div>
  )
}

export default SimpleTheme