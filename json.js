let employee=`{
    "name":"swathi",
    "age":23
}`
let obj=JSON.parse(employee);
let json=JSON.stringify(obj)
console.log(json)
//tojson
let room={
    name:"swathi",
    toJSON(){
        return this.name;
    }
}
let room2={
    name:"tinu",
    room
}
console.log(JSON.stringify(room2))

//getters
let obj2={
    firstname:"swathi",
    lastname:"krishna",
    get fullname(){
        return this.firstname+' '+this.lastname;
    }
}
console.log(obj2.fullname);
//setters
let obj3={
    name:"swathi",
    language:'',
    set lang(lang) {
        this.language = lang;
      }

}
obj3.lang="english";
console.log(obj3)
var d = new Date();
var n = d.toJSON();
console.log(n)