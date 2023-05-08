import React from 'react'

function ItemLoadingSlot() {

    return (
        <div className='animate-loading mr-[4rem] my-[1.5rem] w-[12rem] relative'>
            <div className='w-full h-[12rem] md:w-[15rem] md:h-[15rem] bg-slate-300 bg-opacity-60 relative '>
            </div>
            <div className='md:w-[7.6rem]  h-[1rem] w-[7rem] bg-slate-300 my-1 '>
                <h1 className='opacity-60 md:text-sm'></h1>
            </div>
            <div className='w-[5rem] h-[1rem] bg-slate-300 opacity-60 my-2 items-center'>
            </div>
            
        </div>
    )
}

export default ItemLoadingSlot