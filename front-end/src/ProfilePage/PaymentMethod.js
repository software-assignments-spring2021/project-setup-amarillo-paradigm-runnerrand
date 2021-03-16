import './PaymentMethod.css'

const cardTypes = [
    'Visa',
    'MasterCard',
    'AMEX'
]

const PaymentMethod = () =>{
    return (
        <section>
            <h1>Payment Method</h1>
            {/* {cardTypes.map(item => (
                <input type="checkbox"/>
            ) )} */}
            <p>Credit Card Type: </p>
            <input type="radio" name="selectedCardType"/> {cardTypes[0]}
            <br></br>
            <input type="radio" name="selectedCardType"/> {cardTypes[1]}
            <br></br>
            <input type="radio" name="selectedCardType"/> {cardTypes[2]}
            
            <h4></h4>
            <label for="cardNumber">Credit Card Number:</label><br></br>
            <input type="text"/> <br></br>

            <h4></h4>
            <label for="cardHolder">Card Holder Name:</label><br></br>
            <input type="text" id="name"/> <br></br>

            <h4></h4>
            <label for="expirationDate">Expiration Date:</label><br></br>
            <input type="text" id="month"/>
            <input type="text" id="year"/> <br></br>

            <h4></h4>
            <label for="csv">CSV:</label><br></br>
            <input type="text" id="month"/>

            <h4></h4>
            <button onClick="handleSave"> Save</button>
            <button onClick="handleCancel"> Cancel</button>

        </section>
    )
}

const handleSave =()=>{
    // save all the information
}

const handleCancel =()=>{
    // do not save
}

export default PaymentMethod;