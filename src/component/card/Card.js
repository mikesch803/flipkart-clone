import React from "react";
import { CartIcon } from "../../assets/icons/CartIcon";
import { useCart } from "../../context/cart-context";
import "./Card.css";
export function Card({ product }) {
  const { addToCart, cart } = useCart();
  return (
    <article className="card-container card-relative">
      <div className="card-relative img-wrapper">
        <img src={product.src} alt="jackets" />
        <button className="btn btn-wishlist text-grey">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="_1l0elc"
            width="10"
            height="10"
            viewBox="0 0 20 16"
          >
            <path
              d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
              className="eX72wL"
              stroke="#FFF"
              fill-rule="evenodd"
              opacity=".9"
            ></path>
          </svg>
        </button>
      </div>
      <div className="card-detail">
        <h3 className="card-brand text-grey">{product.brand}</h3>
        <p className="card-name">
          {product.name.length > 35
            ? product.name.substring(0, 35) + "..."
            : product.name}
        </p>
        <div style={{ fontWeight: "600" }}>
          <span className="mr-half">₹{product.offer_price}</span>
          <del className="mr-half text-grey">₹{product.mrp}</del>
          <span className="text-green">{product.discount}</span>
        </div>
        <p>
          <span className="text-grey">size </span>
          {product.size.join(",")}
        </p>
      </div>
      <div className="btn-add-wrapper hide">
        <button disabled={cart.some(item => item.id === product.id)} className="btn flex btn-add" onClick={() => addToCart(product)}>
          <CartIcon /> add to cart
        </button>
      </div>
    </article>
  );
}
