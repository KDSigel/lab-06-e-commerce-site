export function findById(gamesArray, id) {
    for (let game of gamesArray) {
        if (game.id === id) {
            return game;
        }
    }
}

export function calcItemTotal(quantity, price) {
    return quantity * price;
}