const observeObject = (object, callbackFunction) => {
    // function that returns a proxy object which wraps the original object and invokes the given callback function whenever any property of the object is accessed or modified.
    const proxy = {}    // initalizing custom proxy object

      for (let key in object) { // for every property in object
        // defining a getter and setter 
        Object.defineProperty(proxy, key, { 
          get() {
            // interpreting property access
            callbackFunction(key, 'get');
          return object[key];
          },
          set(value) {
            // intercepting property assignment
            callbackFunction(key, 'set');
            object[key] = value;
            return true;
          },
        });
      }
    
      return proxy;
}

let person = {  
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
}
const proxy = observeObject(person, (property, action) => {
  console.log(`Property '${property}' was ${action} on the object.`);
});

proxy.firstName; 
proxy.age = 33; 