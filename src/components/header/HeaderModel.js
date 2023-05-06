import React from 'react'
import Account from './Account'
import Cart from './Cart'
import SelectCategories from './SelectCategories'

function HeaderModel() {
    return (
        <div id='header__model'  className='mx-4 w-[95%] h-[150%] p-2 top-[100%] -z-10 bg-white shadow-md absolute flex flex-col justify-center items-center animate__animated animate__fadeInDown'>
            <SelectCategories/>
            <Account/>
            <Cart/>
        </div>
    )
}

export default HeaderModel