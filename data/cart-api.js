import { findById } from '../shoppingcart/utils.js';

export function getCart() {
    const stringCart = localStorage.getItem('CART');
    if (!stringCart) {
        return [];
    }
    const actualCart = JSON.parse(stringCart);
    return actualCart;
}

export function setCart(cartArray) {
    const stringCart = JSON.stringify(cartArray);
    
    localStorage.setItem('CART', stringCart);
}

export function addToCart(addedItemsId) {

    const cart = getCart();
    
    const itsInCart = findById(cart, addedItemsId);

    if (itsInCart) {
        itsInCart.quantity++;
    }
    else {
        const newCartItem = {
            id: addedItemsId, quantity: 1
        };
        cart.push(newCartItem);
    }
    setCart(cart);
}

// Place order with alert, 
// remove cart, 
// and redirect

// export function clear