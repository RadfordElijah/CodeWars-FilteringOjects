// refactored option

function myLanguages(results) {
  return Object.keys(results).filter(r => results[r] > 59).sort((a,b) => results[b] - results[a]);
}

const obj1 = {"Java" : 10, "Ruby" : 80, "Python" : 65};
const obj2 = {"Hindi" : 60, "Greek" : 71, "Dutch" : 93};
const obj3 = {"C++" : 50, "ASM" : 10, "Haskell" : 20};

myLanguages(obj1);
myLanguages(obj2);
myLanguages(obj3);
