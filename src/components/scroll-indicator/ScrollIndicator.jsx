import React, { useState, useEffect } from 'react';

function ScrollIndicator({ url }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [scrollPercentage, setScrollPercentage] = useState(0);

    async function fetchData(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(getUrl);
            const data = await response.json();

            if (data && data.products && data.products.length > 0) {
                setData(data.products);
            } else {
                setData([]);
            }
            setLoading(false);
            console.log(data.products);
        } catch (error) {
            console.log(error);
            setLoading(false);
            setErrorMessage(error.message);
        }
    }

    useEffect(() => {
        fetchData(url);
    }, [url]);

    useEffect(() => {
        function handleScrollPercentage() {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const newScrollPercentage = (scrollTop / scrollHeight) * 100;
            setScrollPercentage(newScrollPercentage);
        }

        window.addEventListener('scroll', handleScrollPercentage);

        return () => {
            window.removeEventListener('scroll', handleScrollPercentage);
        };
    }, []);

    // function handleScrollPercentage() {
    //     console.log(
    //         document.body.scrollTop,
    //         document.documentElement.scrollTop,
    //         document.documentElement.scrollHeight,
    //         document.documentElement.clientHeight
    //     );
    //     const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
    //     const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    //     setScrollPercentage((howMuchScrolled / height) * 100);
    // }
    // useEffect(() => {
    //     window.removeEventListener('scroll', handleScrollPercentage);
    // }, [])
    console.log(scrollPercentage);
    if (loading) return <p>Loading...</p>;
    if (errorMessage) return <p>Error: {errorMessage}</p>;

    return (
        <div className='flex flex-col justify-center items-center text-center text-xl gap-3'>
            <div className='fixed top-0 z-20 w-full text-center bg-blue-800 text-white'>
                <h1 className='text-5xl'>Custom Scroll Indicator</h1>
                <br />
                <div className='h-3 w-full rounded-2xl bg-blue-400'>
                    <div className='h-3 w-0 rounded-2xl bg-blue-800' style={{ width: `${scrollPercentage}%` }}></div>
                </div>
            </div>
            <div
                className='grid grid-cols-3 lg:grid-cols-6 gap-4 w-full p-6 relative top-20'>
                {
                    data && data.length > 0 ? (data.map((dataItem) => (
                        <div className='flex flex-col items-center h-full border-2 p-2 rounded-xl' key={dataItem.id}>
                            <img className='h-2/4 rounded-xl object-center' src={dataItem.thumbnail} alt={dataItem.titli} />
                            <p className='h-1/4'>${dataItem.price}</p>
                            <p className='flex justify-center items-center h-1/4 text-sm'>{dataItem.title}</p>
                        </div>
                    ))) : (<div> DATA AVAILABLE</div>)
                }
            </div>
        </div>
    );
}

export default ScrollIndicator;
