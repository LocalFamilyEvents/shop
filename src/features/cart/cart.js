import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import Price from "../../components/price/price";
import { getItemsTotal } from "../../shared/moneyUtils";

import { getCartItems } from "./cartSelectors";
import { deleteCartItem, updateCartItemQuantity } from "./cartSlice";
import { deleteCartItemAction, updateCartItemQuantityAction } from "./actions";

import { placeOrderAction } from "../orders/actions";
import { placeOrder } from "../orders/ordersSlice";

import './component.css';

const Cart = (props) => {
  const dispatch = useDispatch();

  const handleDeleteCartItem = (sku) => {
    dispatch(deleteCartItem(deleteCartItemAction(sku)));
  };

  const handleChangeQuantity = (sku, event) => {
    const newQuantity = parseInt(event.target.value);
    dispatch(updateCartItemQuantity(updateCartItemQuantityAction(sku, newQuantity)));
  };

  const handlePlaceOrder = () => {
      dispatch(placeOrder(placeOrderAction(props.items)));
  }

  const items = props.items.map((item) => (
    <li key={item.sku}>
      <div>
        <input
            className="quantity"
          type="number"
          min="0"
          max="99"
          maxLength={2}
          length={2}
          value={item.quantity}
          onChange={(event) => handleChangeQuantity(item.sku, event)}
        />
        {" "}
        x {item.name} SKU {item.sku} - 
        {" "}
        <Price value={item.price} />
        {" "}
        <FontAwesomeIcon icon={faTrash} onClick={() => handleDeleteCartItem(item.sku)} />
      </div>
    </li>
  ));

  const hasItems = props.items.length > 0;

  return (
    <>
      <h1>
        Cart page (Total <Price value={getItemsTotal(props.items)} />)
      </h1>
      <p>{props.items.length} items</p>
      <ul>{items}</ul>
      <button onClick={() => handlePlaceOrder()} disabled={!hasItems}>
        Place Order
      </button>
      {" "}
      <Link to="/">Continue Shopping</Link>
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  items: getCartItems(state),
});

const mapDispatchToProps = {
  deleteCartItem,
  updateCartItemQuantity,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
