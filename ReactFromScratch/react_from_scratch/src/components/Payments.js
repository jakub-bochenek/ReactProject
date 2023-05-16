
import React, {useState} from "react";

function Payments() {
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:8080/payments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name, cardNumber: cardNumber })
        })
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }

    return (
        <div>
            <h2>Payment form</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Owner name:
                    <input type="text" value={name} onChange={event => setName(event.target.value)} />
                </label>
                <label>
                    Card number:
                    <input type="text" value={cardNumber} onChange={event => setCardNumber(event.target.value)} />
                </label>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}


export default Payments;