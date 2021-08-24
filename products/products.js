import { gamesForSale } from './boardgames.js';
import { domGenerator } from './render.js';

const ul = document.getElementById('board-games');

for (let boardgame of gamesForSale) {
    const li = domGenerator(boardgame);
    ul.append(li);
}