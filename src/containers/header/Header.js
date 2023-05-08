import React, { useState } from 'react'

import Cart from '../../components/header/Cart'
import SearchProduct from '../../components/header/SearchProduct'
import SelectCategories from '../../components/header/SelectCategories'
import Logo from '../../components/header/Logo'
import InformationBar from '../../components/header/InformationBar'
import Account from '../../components/header/Account'
import { MdDehaze } from 'react-icons/md'
import HeaderModel from '../../components/header/HeaderModel'

function Header() {
  const [isHeaderModelActivated,setHeaderModelActivated] = useState(false)

  async function headerModelActivationHandler(activation_state){
    if (activation_state === false){
      await new Promise((res, rej) => {
        // document.getElementById('header__model').classList.remove('animate__fadeInUp')
        document.getElementById('header__model').classList.add('animate__fadeOutUpBig')

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