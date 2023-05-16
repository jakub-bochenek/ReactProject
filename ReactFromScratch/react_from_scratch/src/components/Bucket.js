import React from "react";
import "./Bucket.css"; // Importujemy plik CSS

function Bucket({ cart }) {
    if (!cart) {
        return <p></p>;
    }

    return (
        <div>
            <h2>Bucket content</h2>
            <table className="bucket-table"> {/* Dodajemy klasę CSS do tabelki */}
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {cart.map((product) => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.price} zł</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Bucket;

