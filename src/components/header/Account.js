import React from 'react'

function Account() {
  return (
    <a href='/' className='font-work_sans p-1 h-[2.5rem] lg:h-[60%] flex justify-center items-center rounded-3xl px-3 hover:bg-light-white'>
        {/* 
        TODO

        SIGN IN or PROFILE MALE or PROFILE FEMALE 
          */}
          
        <img src={process.env.PUBLIC_URL + '/profile.png'} alt='error' className='pr-2 h-[60%] lg:h-[50%]'/>
        <h1 className='text-md'>Account</h1>
    </a>
  )
}

export default Account