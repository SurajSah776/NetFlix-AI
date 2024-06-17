import React from 'react'
import Header from './Header';
import { useState, useRef } from 'react';
import { checkValidData } from '../utils/validate'

const Login = () => {

    // Using state variable to handle the signin/signup toggle functionality(Using the same form for login and signup(with some extra fields))
    const [isSignedIn, setIsSignedIn] = useState(true);

    const [errorMsg, setErrMsg] = useState(null);

    const email = useRef(null);
    const password = useRef(null);

    // Function to handle the signin/signup button click
    const handleButtonClick = () => {
        const msg = checkValidData(email.current.value, password.current.value);
        // console.log(msg);
        setErrMsg(msg);

        // Sign In / Sign Up
    }

    // Function to toggle the signin/signup form
    const toggleSigninForm = () => {
        setIsSignedIn(!isSignedIn);
    }

    return (
        <div>
            <Header />

            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="body" />
            </div>

            {/* Login/Signup form */}
            <form onSubmit={(e) => e.preventDefault()} className='flex flex-col shadow-xl text-center mx-auto right-0 left-0 space-y-6 w-1/3 bg-gray-950 p-10 text-white rounded-md absolute my-36 bg-opacity-85'>

                <h1 className='text-2xl text-left'>{isSignedIn ? "Sign In" : "Sign Up"}</h1>

                {/* Extra field for signup form */}
                {
                    !isSignedIn && <input type="text" placeholder='Full Name' className='p-2 bg-gray-800 rounded-md' />
                }

                <input ref={email} type="text" placeholder='Email or mobile number' className='p-2 bg-gray-800 rounded-md' />

                <input ref={password} type="password" placeholder='Password' className='p-2 bg-gray-800 rounded-md' />

                {/* Displaying the Error msg */}
                <p className="text-red-500 font-semibold text-md">{errorMsg}</p>

                <button className='bg-red-600 p-2 rounded-md hover:bg-red-700' onClick={handleButtonClick}>{isSignedIn ? "Sign In" : "Sign Up"}</button>

                <div className='flex space-x-1 justify-center'><p>
                    {isSignedIn ? "New to Netflix?" : "Already a User!"}
                </p>
                    <p className='hover:border-b-[1.5px] cursor-pointer' onClick={toggleSigninForm}>
                        {isSignedIn ? "Sign up now." : "Sign In now."}
                    </p>
                </div>

            </form>
        </div>
    );
}

export default Login;
