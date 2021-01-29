 export class Animal {
    name:string;
    constructor(name:string){
this.name=name;
console.log(this.name)
    }
    move(distanceInMeters: number = 0) {
      console.log(`Animal moved ${distanceInMeters}m.`);
    }
  }
  
  class Dog extends Animal {
      constructor(name:string){
          super(name);
          console.log("hi")
      }
    bark() {
      console.log("Woof! Woof!");
    }
  }
  
  const dog = new Dog("toby");
  dog.bark();
  dog.move(10);
  //union
  let code: (string | number );
code = 123;   
code = "ABC";
//code = false; // Compiler Error
//structural type system
interface Named {
  
    name: string;
    age:number;
  }
  
  let x: Named;

  let y = { name: "Alice", location: "Seattle" ,age:45};
  x = y;
  console.log(x.age)
  
  