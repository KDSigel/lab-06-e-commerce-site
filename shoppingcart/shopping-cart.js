import { gamesForSale } from '../products/boardgames.js';
import { calcOrderTotal } from './utils.js';
import { renderLineItems } from './render-line-items.js';
import { getCart } from '../data/cart-api.js';

const cart = getCart();

const tBody = document.getElementById('t-body');

for (let item of cart) {
    const tr = renderLineItems(item);
    tBody.append(tr);
}

const totalCart = document.querySelector('#cart-total');

const total = calcOrderTotal(gamesForSale, cart);

totalCart.textContent = total;