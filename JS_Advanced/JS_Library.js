// JS Library - Reproduce _. underscore functionality

// Had difficulty with this assignment. Mainly because I had a hard time grasping
// what the underscore functions did, especially the passed in data structures, returns,
// etc. Was able to get a couple of them without assistance. But the rest (like reduce)
// required peeking at the solution.

var _ = {
    map: function(list, callback, context) {
      // Initialize new list, to return elements
      let newList = [];
      for(let i=0; i < list.length; i++){
          newList.push(callback.call(context, list[i]));
      }
      return(newList);
    },
    reduce: function(list, callback, memo, context) { 
      let iStart = 0;
      // If memo is not defined, set memo[0] as the receiver
      if (!memo){
        memo = list[0];
        let iStart = 1;
      }
      for(let i=iStart; i < list.length; i++){
          memo = callback.call(context, list[i], memo);
      }
      return(memo);
    },
    find: function(list, callback, context) {   
      for (let i=0; i < list.length; i++) {
        if (callback.call(context, list[i])){
          return list[i];
        }
      }
    },
    filter: function(list, callback, context) { 
      // Initialize new list, to return elements
      let newList = [];
      for(let i=0; i < list.length; i++){
        if (callback.call(context, list[i])){
          newList.push(list[i]);
        }
      }
      return(newList);
    },
    // Essentially the opposite of filter()
    reject: function(list, callback, context) { 
      // Initialize new list, to return elements
      let newList = [];
      for(let i=0; i < list.length; i++){
        if (!callback.call(context, list[i])){
          newList.push(list[i]);
        }
      }
      return(newList);
    }
  }
 // you just created a library with 5 methods!

const testArray = [1,2,3,4,5,6];

// Testing map()
var map = _.map(testArray, function(num){ return num * 2; });
console.log(`Map: [${map}]`);

// Testing reduce()
var reduce = _.reduce(testArray, function(num, memo){ return num + memo; });
console.log(`Reduce: [${reduce}]`);

// Testing find()
var find = _.find(testArray, function callback(num) { return num === 15; });  // Won't find
console.log(`Find: [${find}]`);
var find = _.find(testArray, function callback(num) { return num === 6; }); // Will find
console.log(`Find: [${find}]`);

// Testing filter()
var filter = _.filter(testArray, function(num){ return num % 2 == 0; });
console.log(`Filter: [${filter}]`); // if things are working right, this will return [2,4,6].

// Testing reject()
var reject = _.reject(testArray, function(num){ return num % 2 == 0; });
console.log(`Reject: [${reject}]`); // if things are working right, this will return [2,4,6].
