let person = {  
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
}

Object.defineProperties(person, { firstName: {writable: false},  lastName: {writable: false}, age: {writable: false}, email: {writable: false}}) 
// making the properties read-only and not writable

person.updateInfo = function (info) {
    // updating person object
    for (var key in info) {
      // trying to update every key in info
      if(this.hasOwnProperty(key))
      {
        if (!Object.getOwnPropertyDescriptor(this, key).writable) {
          console.log(`${key} property is not writable`)  // if property is not writable
        }
        else{
          this[key] = info[key]  
        }
      }
    }
    return(this)
}

Object.defineProperty(person, "address", {
  value: {},
  configurable: false,
  writable: false,
})

let info = {
    firstName: "Jane",
    lastName: "Smith",
    age: 23,
    email: "jane.smith@example.com",
}

console.log(person)
console.log(person.updateInfo(info))
