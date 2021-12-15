import { Link } from 'react-router-dom';

function CartPage(props) {

    const items = props.items.map((item) => (
        <li key={item}>
            <div><em>{item.quantity}</em> x {item.name} SKU {item.sku}</div>
            <div><button onClick={() => props.onDeleteItem(item)}>delete</button></div>
        </li>                
    ));

    const hasItems = props.items.length > 0;
    
    return (
        <>
            <h1>Cart page</h1>
            <p>{props.items.length} items</p>
            <ul>{items}</ul>
            <button onClick={props.onPlaceOrder} disabled={!hasItems}>Place Order</button>
            <Link to="/">Continue Shopping</Link>
        </>
    );
}

export default CartPage;