import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getCartItemCount, getOrdersCount } from './selectors';

import styles from './header.module.css';

function Header(props) {
    return (
        <ul>
            <li className={styles.headerItem}><Link to="/">Home</Link></li>
            <li className={styles.headerItem}><Link to="/cart">Cart</Link> ({props.cartItemCount})</li>
            <li className={styles.headerItem}><Link to="/orders">Orders</Link> ({props.ordersCount})</li>
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