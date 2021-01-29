let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };


set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);


console.log( set.size ); 

for (let user of set) {
  console.log(user.name); // John (then Pete and Mary)
}