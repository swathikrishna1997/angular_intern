//typing functions
function add(x: number, y: number): number {
    return x + y;
  }
  
  let myAdd = function (x: number, y: number): number {
    return x + y;
  };
  //optional parameter
  function buildName(firstName: string, lastName?: string) {
    if (lastName) return firstName + " " + lastName;
    else return firstName;
  }
  
  let result1 = buildName("Bob");
  //default parameter
  function buildName1(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
  }
  
  let result2 = buildName1("Bob");
  let result3 = buildName1("Bob", undefined);
  console.log(result2);
  //rest parameter
  function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}
console.log(getTotal(10,20,30,));