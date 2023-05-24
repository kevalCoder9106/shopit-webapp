import React, {useRef} from 'react'
import LoginForm from '../../components/forms/LoginForm'

function Login() {
    return (
        <div className='flex flex-row lg:justify-center w-full h-full'>
            <LoginForm />
            
            <div className='w-1/2 h-full hidden lg:flex items-center justify-center'>
                <img src={'signin/vector_1.jpg'}></img>
            </div>
        </div>
    )
}

export default Login