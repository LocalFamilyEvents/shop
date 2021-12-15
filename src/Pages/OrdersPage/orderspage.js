function OrdersPage(props) {

    const orderItems = (items) => items.map((item) => (
        <li key={item.sku}>
            <em>{item.quantity}</em> x {item.name} SKU {item.sku}
        </li>
    ));

    const orders = props.orders.map((order) => (
        <li key={order.ref}>
            <div>
                Order Ref: {order.ref}<br />
                Placed: {order.datePlaced}<br/>
                Items: 
                <ul>
                    {orderItems(order.items)}
                </ul>
            </div>
        </li>                
    ));

    return (
        <>
            <h1>My Orders</h1>
            <p>{props.orders.length} items</p>
            <ul>{orders}</ul>
        </>
    );
}

export default OrdersPage;