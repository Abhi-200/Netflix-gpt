import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setSignInForm(!isSignInForm);
    };
    return (
        <div className=''>
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                    alt="logo"
                />
            </div>
            <form className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0  text-white rounded-sm bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && <input
                    type='text'
                    placeholder='Full Name'
                    className='p-2 my-2 w-full bg-gray-750 rounded-sm'
                />}
                <input
                    type='text'
                    placeholder='Email or phone number'
                    className='p-2 my-2 w-full bg-gray-750 rounded-sm'
                />
                <input
                    type='password'
                    placeholder='Password'
                    className='p-2 my-2 w-full bg-gray-750 rounded-sm'
                />
                <button className='bg-red-600 p-2 my-8 w-full rounded-sm'>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                    {isSignInForm
                        ? "New to Netflix? Sign Up Now."
                        : "Already registered? Sign In Now."}
                </p>
            </form>
        </div>
    )
}

export default Login