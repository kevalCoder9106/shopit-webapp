import React from 'react'

function SearchProduct() {
  return (
    /* 
    TODO
    SEARCH PRODUCTS
    */
    <div className='w-[60%] lg:w-[40%] h-[50%] md:h-[70%] flex flex-row items-center'>
        <input type='text' placeholder='Search' className='w-[80%] h-full my-2 pl-4 rounded-3xl bg-light-white font-work_sans text-[0.8rem] lg:text-xl outline-none'/>
        <button className='search-button w-[10%] sm:w-[15%] lg:w-[10%] xl:w-[7%]  h-full ml-[-45px] xl:ml-[-60  px] border-l-[none]  bg-light-white rounded-3xl flex items-center justify-center my-2'>
            <img src={process.env.PUBLIC_URL + '/search.png'} alt='error' className='h-1/3'></img>
        </button>
    </div>
  )
}

export default SearchProduct