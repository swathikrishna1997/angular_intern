//spread operator
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    ssn: '123-456-2356'
};


let job = {
    jobTitle: 'JavaScript Developer',
    location: 'USA'
};

let employee = {
    ...person,
    ...job
};

console.log(employee);

//assign
let person1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    ssn: '123-456-2356'
};


let job1 = {
    jobTitle: 'JavaScript Developer',
    country: 'USA'
};


let employee1 = Object.assign(person1, job1);
console.log(employee1);