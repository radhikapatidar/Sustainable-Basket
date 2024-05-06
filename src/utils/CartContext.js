// import React, { createContext, useContext, useState, useEffect } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {

//   // Load cart data from localStorage on component mount
//   const initialCartItems = JSON.parse(localStorage.getItem('cart')) || [];
//   const [cartItems, setCartItems] = useState(initialCartItems);

//   // Update localStorage whenever the cartItems state changes
//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cartItems));
//   }, [cartItems]);

//   const addToCart = (product) => {
//   setCartItems((prevItems) => {
//     const newCart = [...prevItems, product];
//     return newCart;
//   });
// };

//   const removeFromCart = (productId) => {
//     setCartItems((prevItems) =>
//       prevItems.filter((product) => product.productId !== productId)
//     );
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
// export const useCart = () => useContext(CartContext);
