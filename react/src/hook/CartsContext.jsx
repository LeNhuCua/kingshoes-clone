import React, { createContext, useState } from "react";
export const CartsContext = createContext();

const CartsProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, id) => {
        const newItem = { ...product, amount: 1 };
        const cartItem = cart.find((item) => {
            return item.id === id;
        });

        //nếu đã tồn tại
        if (cartItem) {
            const newCart = [...cart].map((item) => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount + 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart);
       
        } else {
            setCart([...cart, newItem]);
           

        }
    };

    const removeFromCart = (id) => {
        const newCart = cart.filter((item) => {
            return item.id !== id;
        });
        setCart(newCart);
    };

    const increaseAmount = (id) => {
        const cartItem = cart.find((item) => {
            return item.id === id;
        });
        addToCart(cartItem, id);
    };

    const reduceAmount = (id) => {
        const cartItem = cart.find((item) => {
            return item.id === id;
        });

        //nếu đã tồn tại
        if (cartItem) {
            const newCart = cart.map((item) => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount - 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart);
        }
        if(cartItem.amount < 2) {
          removeFromCart(id)
        }
    };

    return (
        <CartsContext.Provider
            value={{ cart, addToCart, increaseAmount, reduceAmount,removeFromCart }}
        >
            {children}
        </CartsContext.Provider>
    );
};

export default CartsProvider;
