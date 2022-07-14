import { createContext, useContext, useState } from "react";
import data from "../data/data.json";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [save, setSave] = useState([])
  const addToCart = (item) => {
    let itemToBeAdded = data.products.find(
      (product) => product.id === item.id
    );
    itemToBeAdded = {...itemToBeAdded, qty:1}
    setCart([...cart, itemToBeAdded]);
  };

  const removeFromCart = (item) => {
    const updatedCart = cart.filter((product) => product.id !== item.id);
    setCart(updatedCart);
  };

  const increaseQty = (product) => {
    let newCart = [...cart]
     const currProduct = newCart.find(item => item.id === product.id);

     currProduct.qty += 1;

     setCart(newCart)

  }

  const decreaseQty = (product) => {
    let newCart = [...cart]
    const currProduct = newCart.find(item => item.id === product.id);

    currProduct.qty -= 1;

    setCart(newCart)

  }

  const addToSave = (product) => {
    const itemTobeSaved = cart.find(item => item.id === product.id);
    removeFromCart(product)
    setSave([...save, itemTobeSaved])
  }

const moveToCart = product => {
    const itemToBeAdded = save.find(item => item.id === product.id);
    setSave(save.filter(item => item.id !== product.id))
    setCart([...cart, itemToBeAdded])
}

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQty, decreaseQty, addToSave, moveToCart, save }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
