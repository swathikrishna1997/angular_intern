import {Animal} from './inheritance';
var num:number[]=[78,11];
//enum
enum cardType {debit,credit};
let n:cardType=cardType.credit;
console.log(n);
//tuple
var user: [number, string, boolean, number, string];
user = [1, "Steve", true, 20, "Admin"];

//let name:string="swathi";
let value:boolean=true;
//interface
interface person{
    name:string;
    age:number;
    language(a:string):void;
}
let me:person={
    name:"swathi",
    age:23,
    
    language(english){
        console.log(english)
    }
};

console.log(me);
//class
class Car { 
     
    engine:string;  
    color:string;
    constructor(engine:string) { 
       this.engine = engine 
    }  
    disp():void { 
       console.log("Engine is  :   "+this.engine) 
    } 
 }
 let ford=new Car("engine 1");
 ford.disp();
 let cat=new Animal("bella");