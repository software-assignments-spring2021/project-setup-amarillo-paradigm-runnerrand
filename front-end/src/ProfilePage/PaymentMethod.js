import './PaymentMethod.css'

const cardTypes = [
    'Visa',
    'MasterCard',
    'AMEX'
]

const PaymentMethod = () =>{
    return (
        <section>
            <h1 className="title">Payment Method</h1>
            <hr></hr>

            <p className="item">Credit Card Type: </p>
            {cardTypes.map(item => (
                <div>
                    <input type="radio" name="selectedCardType"/>
                    <label className="element">{item}</label>
                </div>
            ) )}

            <br></br>
            <label for="cardNumber" className="item">Credit Card Number:</label><br></br>
            <input type="text" id="cardNum"/> <br></br>

            <br></br>
            <label for="cardHolder" className="item">Card Holder Name:</label><br></br>
            <input type="text" id="cardNum"/> <br></br>

            <br></br>
            <label for="expirationDate" className="item">Expiration Date:</label><br></br>
            <input type="text" className="smallBox" placeholder='MM'/>
            <input type="text" className="smallBox" placeholder='YY'/> <br></br>

            <br></br>
            <label for="zipCode" className="item">Zip Code:</label><br></br>
            <input type="text" id="zip"/>

            <br></br><br></br>
            <label for="csv" className="item">CVC:</label><br></br>
            <input type="text" className="smallBox"/>

            <br></br><br></br>
            <button onClick="handleSave"> Save</button>
            <button onClick="handleCancel"> Cancel</button>

        </section>
    )
}

const display = (name) =>{
    return(
        <input type="radio"/>
    )
}
const handleSave =()=>{
    // save all the information
}

const handleCancel =()=>{
    // do not save
}

export default PaymentMethod