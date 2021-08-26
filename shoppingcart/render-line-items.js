import { gamesForSale } from '../products/boardgames.js';
import { findById, calcItemTotal } from './utils.js';

export function renderLineItems(cartItem) {

    const tr = document.createElement('tr');
    const name = document.createElement('td');
    const price = document.createElement('td');
    const quantity = document.createElement('td');
    const total = document.createElement('td');

    // tr.classList.add('boardgames');
    // name.classList.add('name');
    // price.classList.add('price');
    // quantity.classList.add('quantity');
    // total.classList.add('total');

    const game = findById(gamesForSale, cartItem.id);

    name.textContent = game.name;
    price.textContent = `$${game.price}`;
    quantity.textContent = cartItem.quantity;
    total.textContent = `$${calcItemTotal(cartItem.quantity, game.price)}`;

    tr.append(
        name,
        price,
        quantity,
        total
    );
    return tr;
}