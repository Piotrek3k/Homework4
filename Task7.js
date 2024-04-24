const validateObject = (object, schema) => {
    // function to validate an object basing on provided schema
    // in order to return true object must have all the properties that schema has, 
    // the properties must be the same type as in the schema and the descriptors of each property must be the same 

    // checking every key in schema
    for (let key in schema) {      
        // checking if a key exists in object
        if (object.hasOwnProperty(key)) {        
            // checking if the type of key in schema is the same as the type of key in object
            if(schema[key].type === typeof object[key] || schema[key].type === undefined) {
                // checking if the validation condition is met
                if(schema[key].validation !== undefined && schema[key].validation(object[key]) === false){
                    return false
                }
                // checking if the descriptors of every key in schema are the same in the object
                if(Object.getOwnPropertyDescriptor(schema, key).writable !== Object.getOwnPropertyDescriptor(object,key).writable ||
                   Object.getOwnPropertyDescriptor(schema, key).enumerable !== Object.getOwnPropertyDescriptor(object,key).enumerable ||
                   Object.getOwnPropertyDescriptor(schema, key).configurable !== Object.getOwnPropertyDescriptor(object,key).configurable ){
                    return false
                }
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    return true;    // if all conditions are met, the object is validated and function returns true
}

let person1 = {  
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
}
const personValidator1 = {
    firstName: { type: "string" , validation: value => value.length > 2 && value.length < 26},
    age: { type: "number" , validation: value => value > 18 && value < 130},
    email: {validation: value => value.includes("@")}
}
const personValidator2 = {
    firstName: { type: "string" , validation: value => value.length > 2 && value.length < 26 },
    age: { type: "number" },
    email: { validation: value => value.includes("@")}
}
Object.freeze(personValidator2)

const personValidator3 = {
    firstName: { type: "string" , validation: value => value.length > 2 && value.length < 26 },
    age: { type: "number" },
    email: {type: "boolean"}
}
const personValidator4 = {
    firstName: { type: "string" , validation: value => value.length > 2 && value.length < 26 },
    age: { type: "number" },
    email: {},
    address: {type: "string"}
}
const personValidator5 = {
    firstName: { type: "string" , validation: value => value.length > 10 && value.length < 26},
    age: { type: "number" },
    email: {},
    address: {type: "string"}
}

console.log(validateObject(person1,personValidator1)) // true
console.log(validateObject(person1,personValidator2)) // false
console.log(validateObject(person1,personValidator3)) // false
console.log(validateObject(person1,personValidator4)) // false
console.log(validateObject(person1,personValidator5)) // false