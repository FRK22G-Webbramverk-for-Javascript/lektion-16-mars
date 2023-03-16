import './Home.css';

import { useState, useEffect } from 'react'; 

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();

            setProducts(data.products);
        }

        getProducts();
    }, []);

    const productComponents = products.map((product) => {
        return <a href={`/produkt/${product.id}`} key={ product.id }>{ product.title }</a> });

    return (
        <section>
            <h2>Produkter</h2>
            <p>Välj en produkt för att läsa mer om den.</p>
            <nav className='products'>
                { productComponents }
            </nav>
        </section>
    )
}

export default Home;