const deepCloneObject = (object, clonedObjects = new Map()) => {
    // function used to deep clone objects handling nested objects and circular references
    // using Map to map keys that has already been cloned in order to prevent circular references
    // checking if the object has already been cloned
        if (clonedObjects.has(object)) {
            // returning the object if it has already been cloned
            return clonedObjects.get(object);
        }
    let newObject = {} // declaring new, cloned object

    clonedObjects.set(object, newObject);   // setting original object and cloned object to handle circular references

    // for every key in object function makes the same key in new object    
    for (let key in object) {
        if (object.hasOwnProperty(key)) {   
            if(object[key] !== null && typeof object[key] === 'object') { // if object[key] is an object function works recursively
                newObject[key] = deepCloneObject(object[key], clonedObjects)
            }
            else {
                newObject[key] = object[key]
            }
        }   
    }
    return newObject // returning cloned object
}


