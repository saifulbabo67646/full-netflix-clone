import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import './Nav.css'
const Nav = () => {
    const [show, setShow] = useState(false)
    const changeShow = () => {
        window.scrollY > 100 ? setShow(true) : setShow(false)
    }
    useEffect(() => {
        window.addEventListener('scroll', changeShow)

        return () => {
            window.removeEventListener('scroll', changeShow)
        }
    }, [])
    const history = useHistory()
    return (
        <div className={`navs ${show && 'nav__black'}`}>
            <div className='nav__contents'>
                 <img onClick={() => history.push('/')} src='https://www.stickpng.com/img/download/580b57fcd9996e24bc43c529/image' className='nav__img' />
            
                <img onClick={() => history.push('/profile')} src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='' className='nav__avatar'/>
            </div>
           
        </div>
    )
}

export default Nav
