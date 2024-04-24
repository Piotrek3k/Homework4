let product = {
    name: "Laptop",
    price: 1000,
    quantity: 5
}

Object.defineProperties(product, { price: {writable: false, enumerable: false},  quantity: {writable: false, enumerable: false}}) 
// making the price and quantity properties non-enumerable and non-writable

const getTotalPrice = (product) => {
    // function that calculates the total price of a product multiplying price by quantity
    // accessing the price and quantity properties using Object.getOwnPropertyDescriptor
    return Object.getOwnPropertyDescriptor(product,'price').value * Object.getOwnPropertyDescriptor(product,'quantity').value 
}

const deleteNonConfigurable = (object, property) => {
    // function that deletes a property from the object if the property is configurable
    if(object.hasOwnProperty(property)){    // checking if the property exists in the object
        if(Object.getOwnPropertyDescriptor(object, property).configurable){ // checking if the property is configurable
            console.log("23424")
            delete object[property];    // deleting the property
        }
        else{
            throw new Error("Property is not configurable")
        }
    }
}
// console.log(getTotalPrice(product))

// product.description = "Lorem Ipsum"
// Object.defineProperty(product, 'description', {
//     configurable: false
// } )
// product.toDelete = "123"
// console.log(product)
// deleteNonConfigurable(product, 'toDelete')
// console.log(product)
// deleteNonConfigurable(product, 'nim2')
// console.log(product)
// deleteNonConfigurable(product, 'description')
// console.log(product)

