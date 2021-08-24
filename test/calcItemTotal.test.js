// IMPORT MODULES under test here:
import { calcItemTotal } from '../shoppingcart/utils.js';
// import { cargamesForSalet } from 'products/boardgames.js';

const test = QUnit.test;

test('takes quantity and an amount and returns the total', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 30;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcItemTotal(3, 10);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
