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

export function calcOrderTotal(whatever, cart) {

    let accumulator = 0;

    for (let item of cart) {

        const X = findById(whatever, item.id);

        const total = X.price * item.quantity;

        accumulator = accumulator + total;
    }
    return accumulator.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}