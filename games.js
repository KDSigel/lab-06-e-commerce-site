// You need at least 5 products.
// Jaws of The Lion
// Ex Libris
// Mysterium
// Jaipur
// Patchwork
// Horrified
// Write out object literals for each product, storing in a variable with same name as product id. These objects are key/value pairs whose values uniquely describe each product. All products should have exactly the same keys!
// Create a variable that is an array of all of your products
// Export this array.

export const gamesForSale = [
    {
        id: 291457,
        category: 'Adventure',
        name: 'Jaws of the Lion',
        image: './products/product-assets/gloomJOTL.png',
        description: 'A cooperative campaign game of tactical combat.',
        price: 50,
    },
    {
        id: 70919,
        category: 'Territory Building',
        name: 'Takenoko',
        image: './products/product-assets/takenoko.png',
        description: 'Cultivate plots, irrigate them, and grow bamboo.',
        price: 50,
    },
    {
        id: 181304,
        category: 'Deduction',
        name: 'Mysterium',
        image: './products/product-assets/mysterium.png',
        description: 'Make contact with a ghost and unlock an old mystery',
        price: 55,
    },
    {
        id: 282524,
        category: 'Horror',
        name: 'Horrified',
        image: './products/product-assets/horrified.png',
        description: 'Work against the monsters to save the village.',
        price: 35,
    },
    {
        id: 54043,
        category: 'Economic',
        name: 'Jaipur',
        image: './products/product-assets/jaipur.png',
        description: 'Sell your goods, grow your camel herd, visit the Maharaja.',
        price: 25,
    },
    {
        id: 163412,
        category: 'Abstract',
        name: 'Patchwork',
        image: './products/product-assets/patchwork.png',
        description: 'Make the most beautiful patchwork quilt.',
        price: 35,
    }
];