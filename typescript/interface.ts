//optional properties
interface SquareConfig {
    color?: string;
    width?: number;
  }
let obj:SquareConfig={color:"red"}  ;
//readonly properties
interface Point {
    readonly x: number;
    readonly y: number;
  }
  let p1: Point = { x: 10, y: 20 };
//p1.x = 5; // error!
//implements
interface PersonInterface {
    name: string;
    age:number;
    work();
  }
  class Person implements PersonInterface {
    name: string = 'Mary'; 
    age=22; 
    work(){
      console.log("")
    }
  }
//type assertion
interface Employee { 
    name: string; 
    code: number; 
} 

let employee = <Employee> { }; 
employee.name = "John"; 
employee.code = 123;

