import React, { useState } from 'react';

function App() {
    const [hexColor, setHexColor] = useState('#000000');
    const [rgbColor, setRgbColor] = useState('rgb(0, 0, 0)');

    const getRandomColor = () => {
        const randomColor = () => Math.floor(Math.random() * 255);
        const newHexColor = `#${randomColor().toString(16)}${randomColor().toString(16)}${randomColor().toString(16)}`;
        const newRgbColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
        console.log(randomColor());
        console.log(randomColor().toString(16));
        setHexColor(newHexColor);
        setRgbColor(newRgbColor);
    };
    
    return (
        <div className="min-h-screen bg-gray-200 flex justify-center items-center">
            <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-xl bg-gray-800 flex justify-center text-center items-center mb-4" style={{ backgroundColor: hexColor }}>
                    <p className="text-white">Hex Color: {hexColor}</p>
                </div>
                <div className="w-32 h-32 rounded-xl bg-gray-800 flex justify-center text-center items-center mb-4" style={{ backgroundColor: rgbColor }}>
                    <p className="text-white">RGB Color: {rgbColor}</p>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={getRandomColor}>Get Random Color</button>
            </div>
        </div>
    );
}

export default App;
