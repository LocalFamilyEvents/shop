import { connect } from 'react-redux';
import Price from '../../components/price/price';
import { getOrders } from './selectors';

function Orders(props) {

    const orderItems = (items) => items.map((item) => (
        <li key={item.sku}>
            <em>{item.quantity}</em> x {item.name} SKU {item.sku} = <Price value={item.price * item.quantity} />
        </li>
    ));

    const orderLines = props.orders.map((order) => (
        <li key={order.ref}>
            <div>
                Order Ref: {order.ref}<br />
                Placed: {order.datePlaced}<br/>
                Total: <Price value={order.total} /><br/>
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
            <ul>{orderLines}</ul>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        orders: getOrders(state)
    };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);