export function findById(myArray, id) {
    for (let item of myArray) {
        if (item.id === id) {
            return item;
        }
    }
}

// This function takes an array and an id, 
// and returns the first item found that 
// has an .id property that matches the 
// passed in id. It can return null if no match is found.