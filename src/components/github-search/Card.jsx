import React from 'react'

function Card({user}) {
    const  {name, avatar_url, bio, following, followers, login} = user;
  return (
    <div className='flex flex-col justify-center items-center text-center'>
        <h1 className='text-2xl font-bold shadow-lg' >{name}</h1>
        <div>
            <img src={avatar_url} alt="User" />
        </div>
        <div>
            <p className='font-bold text-xl'>Bio</p>
            <p className='text-sm'>{bio}</p>
        </div>
        <div>
            <h1 className='font-bold text-xl'>Following : {following}</h1>
        </div>
        <div>
            <p className='font-bold text-xl'>Followers : {followers}</p>
        </div>
    </div>
  )
}

export default Card;