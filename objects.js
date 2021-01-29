//shallow copy
let employee={
    name:"swathi",
    age:23
}
let newEmployee=employee;
newEmployee.name="krishna";
console.log(employee.name)

//deep copy
let student={
    name:"angel"
}

//let newStudent={
  ///  name:student.name
//}
let oldStudent=JSON.parse(JSON.stringify(student));
oldStudent.name="hari";
//newStudent.name="geo";
console.log(student.name)
