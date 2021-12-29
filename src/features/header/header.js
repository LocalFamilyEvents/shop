import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './component.css';
import { getCartItemCount, getOrdersCount } from './selectors';

function Header(props) {
    return (
        <ul>
            <li className='header-item'><Link to="/">Home</Link></li>
            <li className='header-item'><Link to="/cart">Cart</Link> ({props.cartItemCount})</li>
            <li className='header-item'><Link to="/orders">Orders</Link> ({props.ordersCount})</li>
        </ul>
    );
};

const mapStateToProps = (state) => {
    return {
        cartItemCount: getCartItemCount(state),
        ordersCount: getOrdersCount(state),
    };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Header);