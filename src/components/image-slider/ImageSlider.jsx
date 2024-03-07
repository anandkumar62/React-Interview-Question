import React, { useState, useEffect } from 'react';

function ImageSlider({ url, page, limit }) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages() {
        try {
            setLoading(true);

            const response = await fetch(`${url}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if (data) {
                setImages(data);
                setLoading(false);
            }
        } catch (e) {
            setErrorMsg('Error fetching images');
            setLoading(false);
        }
    }
    
    useEffect(() => {
        if (url !== "" && page > 0 && limit > 0) {
            fetchImages()
        }
    }, [url, page, limit]);

    const forward = () => {
        if (currentSlide < images.length - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const backward = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1)
        }
    };

    if (loading) return <p>Loading...</p>;

    if (errorMsg !== null) return <div>{errorMsg}</div>

    return (
        <div className="relative w-full h-full">
            {images && images.length > 0 ? (
                <div className="relative">
                    <img
                        key={images[currentSlide].id}
                        alt={images[currentSlide].author}
                        src={images[currentSlide].download_url}
                        className="h-screen w-screen"
                    />
                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-4">
                        <button className="bg-blue-200 px-6 rounded-xl m-2" onClick={backward}>←</button>
                        <button className="bg-blue-200 px-6 rounded-xl m-2" onClick={forward}>→</button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                className={`inline-block w-2 h-2 mx-1 rounded-full ${index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
                                    }`}
                                onClick={() => setCurrentSlide(index)}
                            ></button>
                        ))}
                    </div>
                </div>
            ) : (
                <p>No Images</p>
            )}
        </div>
    );
}

export default ImageSlider;