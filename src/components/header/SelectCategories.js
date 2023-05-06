import React from 'react'

function SelectCategories() {
  return (
    /* 
    TODO
    LIST OF CATEGORIES
    */
    <select className='font-work_sans text-[1rem] lg:text-lg px-2 h-[50%] lg:font-bold outline-none rounded-3xl hover:bg-light-white'>
        <option value='electronics'>Electronics</option>
        <option value='cosmatics'>Cosmatics</option>
        <option value='furniture'>Furniture</option>
        <option value='cloths'>Cloths</option>
    </select>
  )
}

export default SelectCategories