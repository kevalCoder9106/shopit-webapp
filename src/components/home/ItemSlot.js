import React, { useState } from 'react'
import { MdStar, MdStarOutline, MdStarHalf } from 'react-icons/md'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

function ItemSlot() {
    const [heartIcon,heartIconHandler] = useState(<AiOutlineHeart/>)

    const heartHoverHandler = (hoverState) => {
        return hoverState === false ? <AiOutlineHeart /> : <AiFillHeart/>
    }

    return (
        <div className='mr-[4rem] my-[1.5rem] w-[12rem] relative'>
            <div className='w-full h-[12rem] md:w-[15rem] md:h-[15rem] bg-slate-300 bg-opacity-60 relative'>
                <img src={process.env.PUBLIC_URL + 'sample/3/1.png'} className='absolute inset-0 h-full'></img>
            </div>
            <div className='absolute w-fit h-fit inset-0 top-[.5rem] left-[85%] md:left-[110%] text-sm lg:text-lg hover:' 
            onMouseEnter={() => {
                heartIconHandler(heartHoverHandler(true))
            }}
            onMouseLeave={() => {
                heartIconHandler(heartHoverHandler(false))
            }}
            >
                { heartIcon }
            </div>
            <div className='w-[12rem] md:w-[14.6rem] font-bold flex items-center justify-between'>
                <h1 className='text-vsm md:text-sm'>Logitech MX Master 3S</h1>
                <h1 className='text-sm '>10,045 ₹</h1>
            </div>
            <div className='flex flex-row text-sm md:text-lg my-2 items-center'>
            {
                [...Array(Math.floor(2.5))].map((x, i) => {
                    return <MdStar/>
                })
            }
            {
                2.5 - Math.floor(2.5) > 0
                &&
                <MdStarHalf/>
            }
            {
                2.5 - Math.floor(2.5) > 0
                ?
                [...Array(5-Math.floor(2.5 + 1))].map((x, i) => {
                    return <MdStarOutline />
                })
                :
                [...Array(5-Math.floor(2.5))].map((x, i) => {
                    return <MdStarOutline />
                })
            }
                <h1 className='text-sm px-1'>(500)</h1>
            </div>
            <button className='text-vsm md:text-sm p-1 md:p-2 rounded-full border-[1px] border-black hover:bg-gray-500 hover:text-white hover:border-white transition-all duration-500 '>Add to Cart</button>
        </div>
    )
}

export default ItemSlot