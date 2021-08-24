export function domGenerator(boardgame) {

    const li = document.createElement('li');
    const category = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('h2');
    const description = document.createElement('p');
    const price = document.createElement('div');
    const button = document.createElement('button');

    li.classList.add('boardgame');
    category.classList.add('category');
    img.classList.add('game-image');
    name.classList.add('game-name');
    description.classList.add('description');
    price.classList.add('price');
    // button.classList.add('button');

    category.textContent = boardgame.category;
    img.src = boardgame.image;
    name.textContent = boardgame.name;
    description.textContent = boardgame.description;
    price.textContent = `$ ${boardgame.price}`;

    li.append(
        category, 
        img, 
        name, 
        description, 
        price
    );
    return li;
}