import { connect } from "react-redux";
import { useDispatch } from "react-redux";

import Price from "../../components/price/price";
import ProductImage from "../../components/productImage/productImage";
import AddToCartButton from "../../components/addToCartButton/addToCartButton";

import { addToCart } from '../cart/cartSlice';

import { getProducts } from './selectors';
import { addToCartAction } from '../cart/actions';


import styles from './home.module.css';

function Home(props) {
  const dispatch = useDispatch();

  const handleAddToCart = (product, quantity) => {
    const action = addToCartAction(product, quantity);
    dispatch(addToCart(action));
  }

  const renderProducts = props.products.map((p) => (
    <li key={p.sku} className={styles.product}>
      <ProductImage url={p.imageUrl} name={p.name} />
      {p.sku} - {p.name} - <Price value={p.price} />
      <br />
      {/* <button onClick={() => handleAddToCart(p)} className={styles.addToCart}>Add to Cart</button> */}
      <AddToCartButton Product={p} AddToCart={
        (p, q) => handleAddToCart(p, q)
      } />
    </li>
  ));

  return (
    <>
      <div>Home page</div>
      <h3>Products</h3>
      <ul className={styles.productList}>{renderProducts}</ul>
    </>
  );
}

const mapStateToProps = (state) => {
    return {
        products: getProducts(state)
    }
};

export default connect(mapStateToProps, null)(Home);
