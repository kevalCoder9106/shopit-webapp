import React, { useState } from 'react'
import { GrClose } from 'react-icons/gr'
import Button from '../../ui/Button'

function ItemSlot() {
    const [totalItems, setTotalItems] = useState(0)

    return (
        <div className='my-[1rem] w-full h-fit flex flex-row justify-between items-start'>
            <div className='flex flex-row w-[30%] h-full justify-start items-center'>
                <img src={'sample/3/1.png'} className='w-[20%]'></img>
                <div className='w-fit mx-5 font-bold flex flex-col'>
                    <h1 className='text-vsm md:text-sm'>Logitech MX Master 3S</h1>
                    <h1 className='text-sm '>10,045 ₹</h1>
                </div>
            </div>
            <div className='mx-2 flex flex-row bg-zinc-200 lg:w-[15%] w-[30%] justify-between p-2 rounded-full'>
                <button className='mx-3'>+</button>
                <h1>{totalItems}</h1>
                <button className='mx-3'>-</button>
            </div>
            <Button text={<GrClose/>} className="w-[10%] text-vsm"/>
        </div>
    )
}

export default ItemSlot