import { useState } from "react";

function Product({ productName, price }) {
  const [currentPrice, setCurrentPrice] = useState(price);

  const applyDiscount = () => {
    setCurrentPrice((prevPrice) => Math.max(0, prevPrice - 200));
  };

  return (
    <div className="product-card">
      <h2>{productName}</h2>
      <p>Original Price: ₹{price}</p>
      <p className="price">Current Price: ₹{currentPrice}</p>

      <button onClick={applyDiscount}>
        Apply ₹200 Discount
      </button>
    </div>
  );
}

export default Product;