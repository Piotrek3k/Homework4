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

let array = ["John", "Doe", 30]
// let person1 = createImmutableObject(person)
// console.log(Object.getOwnPropertyDescriptor(person1,'age'))
// let newArray = createImmutableObject(array)
// console.log(Object.getOwnPropertyDescriptor(newArray,[2]))

let company = {
    companyName: "a name",
    yearOfFoundation: 1995,
    buildings: [{
        bulidingName: "building A",
        revenue: 56000
    },{
        buidlingName: "building B",
        revenue: 64000
    }] 
}

let pet = {
    petName: "elgo",
    petObject: {
        petObjectName: "petObjName"
    }
}
// let company1 = createImmutableObject(company)
// console.log(Object.getOwnPropertyDescriptor(company1.buildings,[1]))

// let pet1 = createImmutableObject(pet)
// console.log(Object.getOwnPropertyDescriptor(pet1.petObject,'petObjectName'))
// console.log(Object.getOwnPropertyDescriptor(pet1,'petName'))
// console.log(Object.getOwnPropertyDescriptor(pet1,'petObject'))