// IMPORT MODULES under test here:
import { findById } from '../shoppingcart/utils.js';
import { gamesForSale } from '../products/boardgames.js';

const test = QUnit.test;

test('takes an array and an id, and returns the first item found that has an .id property that matches the passed in id', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        id: 2,
        name: 'Takenoko',
        image: './product-assets/takenoko.png',
        description: 'Cultivate plots, irrigate them, and grow bamboo.',
        category: 'Territory Building',
        price: 50
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(gamesForSale, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
