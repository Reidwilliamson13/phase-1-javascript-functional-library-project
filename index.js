function myReduce(collection, callback, acc) {
  let newCollection = standardizeInput(collection);
  //adc results ? = accresults: newCollection?
  if (!acc) {
    acc = newCollection[0];
    newCollection = newCollection.slice(1);
  }
  console.log(acc);
  for (let i = 0; i < newCollection.length; i++) {
    acc = callback(acc, newCollection[i], newCollection);
    console.log("ACC in the FOR loop" + acc);
  }
  return acc;
}

class dog {
  constructor(age, name, breed) {
    this.age = age;
    this.name = name;
    this.breed = breed;
  }
}

console.log(new dog(12, Betsy, Tamarok));
