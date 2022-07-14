import React from 'react'
import { useCart } from '../../context/cart-context'
import './HorizontalCard.css'
export  function HorizontalCard({product}) {
  const {increaseQty, decreaseQty, removeFromCart, cart,  addToSave, save, moveToCart,} = useCart()
  console.log(cart)


  return (
    <article className="hz-card  ">
      <div className=" img-wrapper">
        <img src={product.src} alt="jackets" />
        <div className='card-qty'>
            <button style={{padding:"0 0.3rem"}} className=' btn-qty'
            onClick={()=>decreaseQty(product)}
            disabled={product.qty === 1}>-</button>
            <span style={{padding:"0 0.5rem"}}>{product.qty}</span>
            <button style={{padding:"0 0.25rem"}}  className=' btn-qty'
            onClick={()=>increaseQty(product)}
            disabled={product.qty === 10}>+</button>
        </div>
      </div>
      <div className="card-detail gap flex-hz flex-dir">
        <p className="card-name">
          {product.name}
        </p>
        <p>
          <span className="text-grey">size </span>
          {product.size.join(",")}
        </p>
        <span></span>
        <div style={{ fontWeight: "600" }}>
          <span className="mr-half">₹{product.offer_price}</span>
          <del className="mr-half text-grey">₹{product.mrp}</del>
          <span className="text-green">{product.discount}</span>
        </div>
        <div className='flex-hz gap'>

       
      
      {
        save.some(item => item.id === product.id) ? <button className='btn hz-btm-btn' onClick={()=>moveToCart(product)}>move to cart</button> : 
        <button className='btn hz-btm-btn' onClick={()=>addToSave(product)}>save for later</button>
      }

       <button className='btn hz-btm-btn' onClick={()=>removeFromCart(product)}>remove</button>
        </div>
      </div>
   
    </article>
  )
}
