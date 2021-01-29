//foreach
var fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

function myFunction(item) {
  return item;
}

//map
var numbers = [65, 44, 12, 4];
var newarray = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}

//reduce
var numbers = [175, 50, 25];
let f= numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}


//filter
var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}
let d=ages.filter(checkAdult);


//every
var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 10;
}
let g=ages.every(checkAdult);


//some
var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 60;
}
let e=ages.some(checkAdult);


//indexof
var str = "Hello world, welcome to the universe.";
var n = str.indexOf("welcome");

//lastindexof
var strr = "Hello planet earth, you are a great planet.";
var t = strr.lastIndexOf("planet");


//find
var ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}


  let m = ages.find(checkAdult);


  //spread operator
  function add(a,b,c){
      console.log(a+b+c);
  }
  let a=[2,3,4];
  add(...a)

  //rest operator

  function multiply(multi,...arg)
  {
      return arg.map(function(element)
      {return multi*element;
    })
  }let arr=multiply(2,3,4,5);
  console.log(arr);

  //iife
  (function add(){
      console.log(2+3);
  })()