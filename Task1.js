const person = {  
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
}

Object.defineProperties(person, { firstName: {writable: false},  lastName: {writable: false}, age: {writable: false}, email: {writable: false}}) 
// making the properties read-only and not writable

person.updateInfo = function (info) {
    for (let key in info) {
      Object.defineProperty(person, key, {writable: true})  // defining properties as writable
    }
    // updating person object
    for (let key in info) {
      // trying to update every key in info
      if(this.hasOwnProperty(key))
      {
          this[key] = info[key]  // updating key
      }
    }
    for (let key in info) {
      Object.defineProperty(person, key, {writable: true}) // defining properties as non-writable
    }
    return(this)
}

Object.defineProperty(person, "address", {
  value: {},
  configurable: false,
  enumerable: false,
})

const info = {
    firstName: "Jane",
    lastName: "Smith",
    age: 23,
    email: "jane.smith@example.com",
}

console.log(person)
console.log(person.updateInfo(info))
