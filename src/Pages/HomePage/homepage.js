function HomePage(props) {

    const renderProducts = props.products.map((p) => (
        <li key={p.sku}>
            {p.sku} - {p.name} - {p.price}<br/>
            <button onClick={() => props.onAddToCart(p.sku)}>Add to Cart</button>
        </li>
    ));

    return (
        <>
            <div>Home page</div>

            <h3>Products</h3>
            <ul>
                {renderProducts}
            </ul>
        </>
    );
};

export default HomePage;