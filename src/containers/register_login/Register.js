import React from 'react'

function Register() {
    return (
        <div className='flex flex-row w-full h-full'>
            <div className='w-full lg:w-1/2 h-full bg-lime-200'>
                
            </div>
            <div className='w-1/2 h-full hidden lg:flex items-center justify-center'>
                <img src={process.env.PUBLIC_URL + 'signin/vector_1.jpg'}></img>
            </div>
        </div>
    )
}

export default Register