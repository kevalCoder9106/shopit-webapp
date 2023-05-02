import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='px-1 w-full h-header bg-dark-blue flex justify-center items-center'>
      <a href={process.env.PUBLIC_URL + '/'} className='w-[8%] h-[40%] lg:h-[60%]'><img src={process.env.PUBLIC_URL + '/logo.png'} alt='error' className='h-full object-contain'></img></a>
      
      {/* TODO
          DISPLAY ADDRESS
      */}
      <a href='/' className='w-[10%] h-[30%] lg:h-[30%] flex flex-row justify-center items-end text-vsm text-white '>
        <img src={process.env.PUBLIC_URL + '/location.png'} alt='error' className=' h-full'></img>
        <h1 className='text-[50%] lg:text-[70%]'>Select your address</h1>
      </a>

      {/* 
        TODO
        SEARCH PRODUCTS
      */}

      <div className='w-[60%] h-[50%] md:h-[70%] flex flex-row items-center'>
        <select className='text-vsm w-[10%] h-full my-1 rounded-sm border-r-[none] mr-[-7px] outline-none'>
          <option value='All'>All</option>
        </select>
        <input type='text' placeholder='Search' className='w-10/12 h-full rounded-sm mx-1 my-2 pl-4 text-vsm outline-none'/>
        <button className='search-button w-[20%] sm:w-[15%] lg:w-[10%] xl:w-[7%]  h-full ml-[-20px] xl:ml-[-50px] border-l-[none]  bg-yellow rounded-sm flex items-center justify-center my-2
        '>
          <img src={process.env.PUBLIC_URL + '/search.png'} alt='error' className='h-1/3'></img>
        </button>
      </div>

      <div className='w-[8%] h-[50%] lg:h-[70%] flex flex-col justify-center items-center '>
        <img src={process.env.PUBLIC_URL + '/cart.png'} alt='error' className='h-[70%]'/>
        <h1 className='text-vsm text-white'>Cart</h1>
      </div>

      {/* 
        TODO 

        VIEW PROFILE or SIGN IN
      */}
      <a href='/' className='w-[8%] h-[60%] flex justify-center items-center'>
        {/* 
          TODO

          SIGN IN or PROFILE MALE or PROFILE FEMALE 
        */}
        
        {/* <img src={process.env.PUBLIC_URL + '/profile_male.png'} alt='error' className='h-full'/> */}
        <h1 className='text-vsm text-blue-100'>Hello, sign in</h1>
      </a>

    </div>
  )
}

export default Header