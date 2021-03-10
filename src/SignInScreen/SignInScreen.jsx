import React, { useRef } from 'react'
import { Auth } from '../firebase'
import './SignInScree.css'
const SignInScreen = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const register = (e) => {
        e.preventDefault()
        Auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=> {
            console.log(authUser)
        }).catch((error) => {
            alert(error.message)
        })
    }
    const signin = (e) => {
        e.preventDefault()
        Auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(authUser => {
            console.log(authUser)
        }).catch(error => alert(error.message))
    }
    
    return (
        <div className='signin__screen'>
            <div className='signin__main'>
                <h2 className='signin__title'>Sign In </h2>
                <form className='signin__form'> 
                    <input ref={emailRef} type="email" placeholder='Enter Your email'/>
                    <input ref={passwordRef} type="password" placeholder='Password'/>
                    <button className='btn__submit' onClick={signin}>Sign In</button>
                </form>
                <h4 className='signup'>New to Netflix? <span className='signup__link' onClick={register}>Sign up now.</span></h4>
            </div>
        </div>
    )
}

export default SignInScreen
