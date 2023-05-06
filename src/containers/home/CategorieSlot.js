import React from 'react'

function CategorieSlot(props) {
    const { image, text } = props

    return (
        <div className='animate__animated animate__fadeInLeftBig mx-2 min-w-[10rem] max-w-[20rem] text-white relative font-bold group overflow-hidden rounded-md'>
            <img src={image} className='rounded-md transition-all block group-hover:scale-125 group-hover:origin-[50% 50%]'/>
            <h1 className='absolute inset-0 left-[50%] translate-x-[-20%]  md:translate-x-[-23%] lg:translate-x-[-29%]  text-lg md:text-lg xl:text-xl py-2'>{text}</h1>
        </div>
    )
}

export default CategorieSlot