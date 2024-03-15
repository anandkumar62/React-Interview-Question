import React, { useEffect, useState } from 'react'
import Card from './Card';

function GItHubSearch() {

    const [userName, setUserName] = useState("AnandKumar62");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchGithubData() {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${userName}`);
        const data = await res.json();
        console.log(data);
        if (data) {
            setUserData(data);
            setLoading(false);
            setUserName("");
        }
    }

    useEffect(() => {
        fetchGithubData()
        console.log("hello");
    }, []);

    if (loading) return <div>Loading data! Please wait</div>

    function handelSubmit() {
        fetchGithubData()
    }

    return (
        <div className='flex flex-col justify-center items-center text-center h-screen w-full border-2 p-6'>
            <div>
                <input
                    className='border-2 rounded-xl px-4 py-2 text-sm font-bold'
                    type="text"
                    placeholder="Search GitHub Username..."
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                />
                <button
                    className='border-2 rounded-xl px-4 py-2'
                    onClick={handelSubmit}>Search</button>
            </div>
            <br />
            {
                userData !== null ? <Card user={userData} /> : null
            }
        </div>
    );
};

export default GItHubSearch;