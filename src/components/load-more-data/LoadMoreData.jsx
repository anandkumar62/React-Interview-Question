import React, { useEffect, useState } from 'react';

function LoadMoreData() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false);

    async function fetchdata() {
        try {
            setLoading(true);
            const response = await fetch(
                `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`
            );
            const data = await response.json();
            setProducts((prevData) => [...prevData, ...data.products]);
            setLoading(false);
            console.log(data);
            // if (data && data.products && data.products.length) {
            //     setProducts((prevData) => [...prevData, ...data.products]);
            //   }
        } catch (e) {
            console.log("Error Comes in fetching data");
            setLoading(false);
        }
    }

    useEffect(() => {
      if(products && products.length === 100) setDisableButton(true)
        fetchdata();
    }, [count]);

    if (loading) return <p>Loading please wait.....</p>;

    return (
        <div className='flex flex-col justify-center'>
            <div className='grid grid-cols-3 gap-4'>
                {products && products.length > 0 ? (
                    products.map((item, index) => (
                        <div key={`${item.id}-${index}`} className='w-4/5 h-30 border p-2 m-auto'>
                            <img src={item.thumbnail} alt={item.brand} />
                            <p>{item.brand}</p>
                        </div>
                    ))
                ) : (
                    <div>No Images</div>
                )}
            </div>
            <br />
            <button
                disabled={disableButton}
                className='px-6 py-3 text-center bg-slate-700 text-white rounded-xl'
                onClick={() => setCount(count + 1)}
            >
                More
            </button>
            {
              disableButton ? <p>You reached the end of images.</p> : null
            }
        </div>
    );
}

export default LoadMoreData;
