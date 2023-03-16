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
        return <a href={`/produkt/${product.id}`}>{ product.title }</a> });

    return (
        <section>
            <h2>Detta är startsidan.</h2>
            <nav>
                { productComponents }
            </nav>
        </section>
    )
}

export default Home;