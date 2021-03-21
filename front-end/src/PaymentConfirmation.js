import React from 'react'
import './PaymentConfirmation.css'



const PaymentConfirmation = (props) => {
    return(
        <article>    
            <button onClick={handleGoBack}> Go Back </button>
            <h1>Welcome!</h1>
            <p1>Congratulations! Your payment method has been saved.</p1>
            </article>
    )
}

const handleGoBack =() =>{
    window.location.href = './Profile'
}

export default PaymentConfirmation
