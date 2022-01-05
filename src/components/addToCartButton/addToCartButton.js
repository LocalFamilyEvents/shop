import { useState } from "react";

import styles from "./addToCartButton.module.css";

function AddToCartButton(props) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (e) => {
    props.AddToCart(props.Product, quantity);
  };

  const handleChangeQuantity = (e) => setQuantity(parseInt(e.target.value));

  return (
    <>
      <input
        type="number"
        className={styles.input}
        value={quantity}
        onChange={handleChangeQuantity}
        maxLength={2}
        min={1}
        max={99}
      />
      <button onClick={handleAddToCart} className={styles.button}>
        Add to Cart
      </button>
    </>
  );
}

export default AddToCartButton;
