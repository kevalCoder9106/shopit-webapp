import React, { useState } from 'react'

import Cart from './Cart'
import SearchProduct from './SearchProduct'
import SelectCategories from './SelectCategories'
import Logo from './Logo'
import InformationBar from './InformationBar'
import Account from './Account'
import { MdDehaze } from 'react-icons/md'
import HeaderModel from './HeaderModel'

function Header() {
  const [isHeaderModelActivated,setHeaderModelActivated] = useState(false)

  async function headerModelActivationHandler(activation_state){
    if (activation_state === false){
      await new Promise((res, rej) => {
        // document.getElementById('header__model').classList.remove('animate__fadeInUp')
        document.getElementById('header__model').classList.add('animate__fadeOutUp')

        setTimeout(function disableButton(){
          setHeaderModelActivated(activation_state)
        }, 500)
      })
    }
    else {
      setHeaderModelActivated(activation_state)
    }
  }

  return (
    <div className='z-10 sticky top-0 bg-white  w-full h-[12%] flex flex-col justify-center items-center'>
      <InformationBar/>

      <div className='w-full lg:w-[66%] h-[70%] hidden lg:flex justify-between flex-row items-center'>
        <Logo/>
        <SelectCategories/>
        <SearchProduct/>
        <Account/>
        <Cart/>
      </div>

      <div className='px-2 w-full lg:w-[66%] h-[70%] flex lg:hidden justify-between flex-row items-center'>
        <Logo/>
        <SearchProduct/>
        <button 
        onClick={
          () => headerModelActivationHandler(!isHeaderModelActivated)
        }
        className='text-xl'><MdDehaze/></button>
      </div>

      { isHeaderModelActivated && <HeaderModel /> }

    </div>
  )
}

export default Header