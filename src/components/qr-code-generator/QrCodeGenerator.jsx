import React, { useEffect, useState } from 'react'
// install npm i react-qr-code
import QRCode from "react-qr-code"
function QrCodeGenerator() {

    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');
    const [title, setTitle] = useState("QR Code generator")

    function handelQrCode() {
        setQrCode(input)
    }

    function ConvertUpperCase() {
        // setTitle(title.toUpperCase())
        setTitle((title) => title.toUpperCase())
    }

    // function ConvertUpperCase() {
    //     setTitle((prev) => prev.toUpperCase());
    // }

    useEffect(() => {
        ConvertUpperCase();
    });

    return (
        <div className='flex flex-col justify-center items-center gap-3 h-screen font-bold'>
            <h1 className='underline decoration-2'>{title}</h1>
            <div>
                <input className='text-sm px-2 py-2 rounded-3xl ' onChange={(e) => setInput(e.target.value)} type='text' name='Qr Code' placeholder='Enter Your Value here' />
                <button disabled={input && input.trim() !== "" ? false : true} onClick={handelQrCode} className='border-2 px-4 py-2 rounded-3xl cursor-pointer hover:scale-105'>Generate</button>
            </div>
            <div>
                <QRCode
                    id="qr-code-value"
                    value={qrCode}
                />
            </div>
        </div>
    )
}

export default QrCodeGenerator