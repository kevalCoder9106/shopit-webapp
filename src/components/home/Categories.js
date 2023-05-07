import React from 'react'
import CategorieSlot from './CategorieSlot'
import 'animate.css';
import '../../App.css'

const categoriesPictures = [
    {path:'categories/furniture.png', name:'Furniture'},
    {path:'categories/books.png', name:'Books'},
    {path:'categories/cloths.png', name:'Cloths'},
    {path:'categories/snekers.jpg', name:'Sneakers'},
    {path:'categories/tech.jpg', name:'Tech'},
]

function Categories() {
    return (
        <div className='w-full lg:w-[70%] font-work_sans  flex flex-col'>
            <h1 className='text-3xl font-[600] pt-[5rem]'>Shop Our Best Categories</h1>
            <div className='overflow-auto custom_scroll flex flex-row py-10'>
                {
                    categoriesPictures.map((picture, index) => {
                        return <div key={index} className='flex flex-row '>
                                    <CategorieSlot image={process.env.PUBLIC_URL + picture.path} text={picture.name}/>
                                </div>
                    })
                }
            </div>
        </div>
    )
}

export default Categories