import React from 'react'
import ItemLoadingSlot from '../../components/home/ItemLoadingSlot'

function LoadingItemsContainer() {
    return (
        <div className='w-full pt-[4rem] lg:pt-[2rem] p-4 font-work_sans '>
            <div className='overflow-auto custom_scroll w-full pt-[2rem] flex flex-row '>
                <ItemLoadingSlot />
                <ItemLoadingSlot />
                <ItemLoadingSlot />
            </div>
        </div>
    )
}

export default LoadingItemsContainer