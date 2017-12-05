// Set
let set = new Set();
set.add("hello").add("goodbye").add("hello");
console.log(set.has("hello")); 
for (let key of set.values()) // insertion order
    console.log(key);

// Map
let map = new Map();
map.set("hello", 42);
map.set('test', 34);
for (let [ key, val ] of map.entries())
    console.log(`${key} = ${val}`);
    