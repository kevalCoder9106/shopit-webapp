import React from 'react'

function Cart() {
  return (
    <a href='/' className='font-work_sans h-[2.5rem] lg:h-[60%] flex flex-row justify-center items-center rounded-3xl px-3 hover:bg-light-white'>
          <img src={process.env.PUBLIC_URL + '/cart.png'} alt='error' className='pr-2 h-[50%]'/>
          <h1 className=''>Cart</h1>
        </a>
  )
}

export default Cart