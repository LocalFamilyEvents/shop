import { Link } from 'react-router-dom';

import './component.css';

function Header(props) {
    return (
        <ul>
            <li className='header-item'><Link to="/">Home</Link></li>
            <li className='header-item'><Link to="/cart">Cart ({props.cartItemCount})</Link></li>
            <li className='header-item'><Link to="/orders">Orders ({props.ordersCount})</Link></li>
        </ul>
    );
};

export default Header;