// IMPORT MODULES under test here:
import { renderLineItems } from '../shoppingcart/render-line-items.js';

const test = QUnit.test;

test('takes a cart line item, and corresponding product, returns dom that matches static html', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<tr><td>Horrified</td><td>$35</td><td>2</td><td>$70</td></tr>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderLineItems(
        {
            id: 4,
            quantity: 2
        }
    );

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
