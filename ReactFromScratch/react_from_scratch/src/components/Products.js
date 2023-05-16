import React, { useEffect, useState } from "react";
import Bucket from "./Bucket";

function Products() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setIsLoading(false);
            })
            .catch((error) => console.log(error));
    }, []);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div>
            <h2>Products list</h2>
            {isLoading ? (
                <p>Data loading...</p>
            ) : (
                <div>
                    <ul>
                        {products.map((product) => (
                            <li key={product.id}>
                                {product.name} - {product.price} zł
                                <button onClick={() => addToCart(product)}>Add to bucket</button>
                            </li>
                        ))}
                    </ul>
                    <Bucket cart={cart} />
                </div>
            )}
        </div>
    );
}

export default Products;