function computeSomething(arg) {
  console.log("Computational function :" + arg);
  // Consider this function does lot of computational work
}

function cachingDecorator(wrapper) {
  let cache = new Map(); // Declaring caching Map 

  return function (value) {
    if (cache.has(value)) { // if there's such key in cache
      return cache.get(value); // read the result from it
    }

    let result = wrapper(value); // otherwise call wrapper

    cache.set(value, result); // and cache (remember) the result
    return result;
  };
}

computeSomething = cachingDecorator(computeSomething);

console.log(computeSomething(1)); // Computed first time and cache and returned result 
console.log(computeSomething(1)); // Computed result

console.log(computeSomething(2)); // computed first time and cache and returned result 
console.log(computeSomething(2)); // Computed result