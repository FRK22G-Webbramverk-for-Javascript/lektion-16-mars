import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Product() {
    const params = useParams(); // useParams används för att hämta vad som står i URL:en
    console.log(params);
    const [products, setProducts] = useState([]);
    const [currentProduct, setCurrentProduct] = useState({});

    useEffect(() => {
        async function getProducts() {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();

            setProducts(data.products); // Hämta alla produkter och spara i ett state
        }

        getProducts();
    }, []);

    useEffect(() => {
        getProduct(); // Filtrera ut rätt produkt baserat på det id som finns i url:en för att kunna visa mer information om den produkten
    }, [products]) // Kör denna useEffect när products uppdateras

    function getProduct() {
        const foundProduct = products.filter((product) => {
            if (product.id === parseInt(params.title)) {
                return product;
            }
        });

        setCurrentProduct(foundProduct[0]);
    }

    return (
        <section>
            { currentProduct ?
            <article>
                <img src={ currentProduct.images[0] } />
                <h2>{ currentProduct.title }</h2>
                <p>{ currentProduct.description }</p>
                <p>Pris: { currentProduct.price } kr</p> 
            </article>: '' }
        </section>
    )
}

export default Product;