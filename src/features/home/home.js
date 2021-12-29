import { connect } from "react-redux";
import { useDispatch } from "react-redux";

import Price from "../../components/price/price";

import { addToCart } from '../cart/cartSlice';

import { getProducts } from './selectors';
import { addToCartAction } from '../cart/actions';

function Home(props) {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(addToCartAction(product, 1 )));
  }

  const renderProducts = props.products.map((p) => (
    <li key={p.sku}>
      {p.sku} - {p.name} - <Price value={p.price} />
      <br />
      <button onClick={() => handleAddToCart(p)}>Add to Cart</button>
    </li>
  ));

  return (
    <>
      <div>Home page</div>
      <h3>Products</h3>
      <ul>{renderProducts}</ul>
    </>
  );
}

const mapStateToProps = (state) => {
    return {
        products: getProducts(state)
    }
};

export default connect(mapStateToProps, null)(Home);
