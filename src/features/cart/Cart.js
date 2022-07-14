import React from "react";
import { Header } from "../../component/header/Header";
import { HorizontalCard } from "../../component/horizontal-card/HorizontalCard";
import { useCart } from "../../context/cart-context";
import './Cart.css'
export function Cart() {
  const { cart, save } = useCart();
  return (
    <div>
      <Header />
      <main style={{display:"flex"}}>
        <section className="box-shadow" style={{flex:"1", display:"flex", flexDirection:"column"}}>
          <h3 style={{borderBottom:"1px solid var(--text-grey)", fontSize:"0.5rem", padding:"0.5rem"}}>My Cart</h3>
          <ul style={{padding:"0.5rem"}}>
            {cart.map((product) => (
              <li>
                <HorizontalCard product={product} />
              </li>
            ))}
          </ul>
          <button className="btn btn-add ml-auto">place order</button>
        </section>
        <section className="card-price box-shadow" >
          <h3 style={{borderBottom: "1px solid"}} className="text-grey">Price details</h3>
          <p>Price <span className="ml-auto">({cart.length} item)</span></p>
          <p>discount <span className="ml-auto">{cart.reduce((acc,curr)=> acc + (curr.mrp * curr.qty) - (curr.offer_price * curr.qty),0)}</span></p>
          <p>delivery charges  <span className="ml-auto">FREE</span></p>
          <h3 className="bt">Total amount <span className="ml-auto">{cart.reduce((acc,curr)=> acc + (curr.offer_price * curr.qty),0)}</span></h3>
          <h3 className="text-green bt">You have save {cart.reduce((acc,curr)=> acc + (curr.mrp * curr.qty) - (curr.offer_price * curr.qty),0)} on this order</h3>
        </section>
      </main>
      <section className="box-shadow" style={{flex:"1", display:"flex", flexDirection:"column", padding:"0.5rem"}}>
          <h3 style={{borderBottom:"1px solid var(--text-grey)", fontSize:"0.5rem", padding:"0.5rem", maxWidth:"50%"}}>Save Later</h3>
          <ul>
            {save.map((product) => (
              <li>
                <HorizontalCard product={product} />
              </li>
            ))}
          </ul>
        </section>
    </div>
  );
}
