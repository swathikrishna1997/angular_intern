var num=45;
var string=String(num);
console.log(typeof(num));
var b=78;
var c=string+b;
if(typeof(c)==Number)
{
console.log(c)
}
else
console.log(typeof(c))
//const d=null ?? 'null value';
//const h=8 ?? 'not null';  
var g=8;
do{
    console.log(g);
    g--;
}
while(g>=0){
    
}
console.log(g)
for(i=0;i<10;i++){
    for(j=0;j<10;j++)
    {
        console.log(i+j);
    }
}
var value="cat";
switch(value){
    case "cat":
        console.log("cat");
        break;
        case "dog":
            console.log("dog");
            break;
            default:
                console.log("none")
}