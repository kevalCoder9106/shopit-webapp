import React from 'react'
import ItemSlot from '../../components/home/ItemSlot'

function ItemsContainer(props) {
    const { title, items } = props

    return (
        <div className='w-full pt-[4rem] lg:pt-[2rem] p-4 font-work_sans '>
            <h1 className='font-[600] text-2xl md:text-3xl '>{title}</h1>
            <div className='overflow-auto custom_scroll w-full pt-[2rem] flex flex-row '>
                <ItemSlot />
            </div>
        </div>
    )
}

export default ItemsContainer