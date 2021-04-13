import React from 'react'
import './PaymentConfirmation.css'



const PaymentConfirmation = (props) => {
    return(
        <article>    
            <button onClick={handleGoBack}> Go Back </button>
            <h1>Welcome!</h1>
            <p>Congratulations! Your payment method has been saved.</p>
            </article>
    )
}

const handleGoBack =() =>{
    window.location.href = './Profile'
}

export default PaymentConfirmation
