function myLanguages(results) {
    let arr = []
    for (let key in results){
        //console.log("key: " + key)
        //console.log("results[key]: " +results[key])
        
      if (results[key] >= 60){
        arr.push(key)
      }
    }
    //console.log(arr.sort((a, b) => results[b] - results[a]))
    return arr.sort((a, b) => results[b] - results[a])
}
const obj1 = {"Java" : 10, "Ruby" : 80, "Python" : 65};
const obj2 = {"Hindi" : 60, "Greek" : 71, "Dutch" : 93};
const obj3 = {"C++" : 50, "ASM" : 10, "Haskell" : 20};

myLanguages(obj1);
myLanguages(obj2);
myLanguages(obj3);
