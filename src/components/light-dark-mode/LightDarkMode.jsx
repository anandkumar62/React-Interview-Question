import React from 'react';
import useLocalStorage from './useLocalStorage';

function LightDarkMode() {
    const [theme, setTheme] = useLocalStorage('theme', 'dark');

    function handleToggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <div className={theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}>

            <div className="flex flex-col items-center gap-3 justify-center h-screen">
                <h1 className='text-xl'>ANAND KUMAR</h1>
                <button onClick={handleToggleTheme} className='border-2 px-4 py-2 rounded-xl'>
                    Change Theme
                </button>
            </div>
        </div>
    );
}

export default LightDarkMode;