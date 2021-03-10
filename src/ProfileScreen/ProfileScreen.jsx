import React from 'react'
import { useSelector } from 'react-redux'
import Banner from '../Banner'
import { selectUser } from '../features/userSlice'
import { Auth } from '../firebase'
import Nav from '../Nav'

import './ProfileScreen.css'
import Stripe from './Stripe'

const ProfileScreen = () => {
    const user = useSelector(selectUser)
    return (
        <div className='profileScreen'>
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                        alt=""
                    />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans</h3>
                            <p>Renewal Date: </p>
                            <div className="profileScreen__plan">
                                <h3>Premium (4k + HDR)</h3>
                                
                                <Stripe price='54' />
                            </div>
                            <button 
                            onClick={() => Auth.signOut()}
                            className='profileScreen__signOut'>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
