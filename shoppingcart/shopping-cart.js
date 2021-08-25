// Import your data (both cart and products), DOM generation function, and any needed utility functions
// locate the tbody element where your line items will go
// loop through your data
// Create a variable based on the current array index.
// Use your findById function to find the corresponding product for this line item
// Pass these to your DOM generation function and capture result in variable
// Append to the table body (tbody)
// git add, commit, push!

import { gamesForSale } from '../products/boardgames.js';
import { findById, calcItemTotal } from './utils.js';
import { renderLineItems } from './render-line-items.js';
import { cart } from '../data/cart.js';

const tBody = document.getElementById('t-body');

for (let X of cart) {
    const tr = renderLineItems;(X);
    tBody.append(tr);
}