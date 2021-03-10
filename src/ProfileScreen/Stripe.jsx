import React from 'react'
import { useState } from 'react'
import StripeCheckOut from 'react-stripe-checkout'
import './ProfileScreen.css'

const Stripe = ({price}) => {
    const [isSubscribe, setIsSubscribe] = useState('')
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51ITKfrKNOH6gd3cZaVH1OSuoMkzCdPqU5vbiSwulpikLCLeRNcV3zZwV3cwEF2wwypFe7XIixEOOMPJqPu27Pkmu00OGV5Q7gA'
    const onToken = token => {
        alert('Payment Successful')
        setIsSubscribe(token.card.id)
    }
    return (
        <StripeCheckOut 
            label='Subscribe'
            name='Full Netflix Clone'
            billingAddress
            description={`Your Total is ${price}`}
            amount = {priceForStripe}
            panelLabel='Subscribe'
            token={onToken}
            stripeKey={publishableKey}
        >
          {isSubscribe === '' ? <button className='plan__btn'>Subscribe</button> : <button className='plan__btn__disable'>UnSubscribe</button>}  
        </StripeCheckOut>
    )
}

export default Stripe
