import React from 'react'

function Logo() {
  return (
    <a href={process.env.PUBLIC_URL + '/'} className='w-[20%]lg:h-[100%]'><h1 className='text-[1.5rem] xl:text-[2rem] font-pacific'>Shop It</h1></a>
  )
}

export default Logo