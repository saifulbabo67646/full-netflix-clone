import React, { useState } from 'react'
import './LoginScreen.css'
import SignInScreen from '../SignInScreen/SignInScreen'
const LoginScreen = () => {
    const [signIn, setSignIn] = useState(false)
    return (
        <div className='LoginScreen'>
            <div className='login__background'>
                <img className="login__logo" src="https://www.stickpng.com/img/download/580b57fcd9996e24bc43c529/image" alt=""/>

                <button className='login__button' onClick={() => setSignIn(true)}>Sign In</button>

                <div className='login__gradient' />
                <div className="loginScreen__body">
                    {signIn ? (
                        <SignInScreen />
                    ): (
                        <>
                        <h1 className='loginScreen__title'>Unlimited movies, TV shows, and more.</h1>
                        <h2 className='loginScreen__subtitle'>Watch anywhere. Cancel anytime.</h2>
                        <h3 className='loginScreen__subsubtitle'>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <form className='d-flex justify-center align-center' >
                            <input type="email" placeholder='Email Address'/>
                            <button className='login__submit' onClick={()=> setSignIn(true)}>Get Started</button>
                        </form>
                        </>
                    )} 
                </div>
            </div>  
        </div>
    )
}

export default LoginScreen
