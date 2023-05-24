import React from 'react'
import ItemSlot from '../../components/cart/ItemSlot'
import { AiOutlineCreditCard } from 'react-icons/ai'
import { HiQrCode } from 'react-icons/hi2'
import Button from '../../ui/Button'

function Cart() {
    return (
        <div className='py-5 w-full lg:w-[70%] h-body flex flex-row font-work_sans'>
            <div className='w-[60%]'>
                <h1 className='text-3xl font-bold'>Shopping Cart</h1>
                <div className='my-5 flex flex-col items-start justify-start'>
                    <ItemSlot/>
                    <ItemSlot/>
                    <ItemSlot/>
                    <ItemSlot/>
                    <ItemSlot/>
                </div>
            </div>
            <div className='hidden lg:block bg-zinc-200 w-[40%] h-fit p-2 rounded-md'>
                <h1 className='text-3xl font-bold'>Payment Info</h1>
                <div className='flex flex-col mt-5'>
                    <h1 className='text-lg text-gray-500 '>Payment Method</h1>
                    <div className='my-2 flex flex-row'>
                        <input type='radio' name='payment_method' value='payment' className='mx-2 rounded-full'/>
                        <h1 className='px-2 text-lg flex flex-row items-center'>{<AiOutlineCreditCard />}<span className='mx-1'>Credit Card</span></h1>
                    </div>
                    <div className='my-2 flex flex-row'>
                        <input type='radio' name='payment_method' value='payment' className='mx-2 rounded-full'/>
                        <h1 className='px-2 text-lg flex flex-row items-center'>{<HiQrCode />}<span className='mx-1'>QR Code</span></h1>
                    </div>
                </div>
            <Button text='Check Out' className='pt-5'/>
            </div>
        </div>    
    )
}

export default Cart