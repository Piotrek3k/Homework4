const createImmutableObject = (object) => {
    // function that takes an object as an argument and returns a new object
    // with all its properties made read-only and non-writable using property descriptors
    let newObject = {} // declaring new object
        for(let key in object) {    // for every key in object function makes the same key in new object 
            if(typeof object[key] === 'object'){    // if object[key] is an array or a nested object function works recursively
                newObject[key] = createImmutableObject(object[key])
            }
            else {
                newObject[key] = object[key]
            }
            Object.defineProperty(newObject, key, {writable: false})    // defining property as non-writable
        }
    return newObject
}



let person = {  
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
}

