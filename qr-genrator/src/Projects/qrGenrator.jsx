import React, { useState } from 'react'

const qrgenrator = () => {
    const [input, setInput] = useState('Muhammad Siddique');
    const [qrCodeUrl, setQrCodeUrl] = useState('');
    const API_URL = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='

    const generateQrCode = () => {
        if (input.trim() === '') {
            alert('Please enter a valid URL');
            return;
        } else {
            setQrCodeUrl(`${API_URL}${encodeURIComponent(input)}`);
        }
    }
    return (
        <div className=' min-h-[90vh] flex justify-center items-center bg-gradient-to-br from-gray-300 via-gray-500 to-gray-700'>
            <div className="bg-white min-w-[400px] min-h-[400px] flex flex-col  items-center rounded-lg shadow-lg">
                <h1 className='text-3xl font-bold mt-20 mb-5'>QR Code Generator</h1>
                <input value={input}
                 onChange={(e) => setInput(e.target.value)} type="text" placeholder='Enter your URL' className='border-2 border-gray-300 p-2 rounded-md w-3/4 mb-5 focus:outline-none focus:border-blue-500' />
                {qrCodeUrl && <img src={qrCodeUrl} alt="QR Code" className='mb-5' />}
                <button onClick={generateQrCode} className='bg-blue-500 text-white px-4 py-2  mt-4 mb-4 rounded-md hover:bg-blue-600 transition'>Generate QR Code</button>
            </div>
        </div>
    )
}

export default qrgenrator
