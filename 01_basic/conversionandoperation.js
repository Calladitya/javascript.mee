//let score=33

//console.log(typeof score);
//console.log(typeof(score));
/*
if i put score = sting 
*/
//let score="33abd"

//console.log(typeof score);
//console.log(typeof(score));

//if i take score = "33" and i take valuein =number then what happen

//let valueInNumber=Number(score);
//console.log(typeof valueInNumber);//here we see it is printing that 33 is the number not string
//console.log(valueInNumber)//now it is giving us nan(not a number) javascript hame dikyaega ki ye ek no h lekin vo ek number nhi h jb isne print kr diya allready nan


/*let scored=null 
let valueInNumber=Number(scored);
console.log(typeof valueInNumber)
console.log(valueInNumber)//in this  we  are geeting 0as output
*/

/*let scored=undefined
let valueInNumber=Number(scored);
console.log(typeof valueInNumber)
console.log(valueInNumber)//in  this we are again getting NaN(not a Number)
*/

/*let scored=true
let valueInNumber=Number(scored);
console.log(typeof valueInNumber)
console.log(valueInNumber)//iska output ayega 1 kyuki ye sahi h or agar hm false use krte h to hamara output 0 ayega
*/


/*let isLoggedIn=1//ye hame   bta rahha h ki agar hm boolean me 1 lete h to hamara output true ayegq kyuki boolean jo true hota h vo 1 hota h 
//or agar hm 0 lete h to hamara ans false aayega

let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);*/

/*let isLoggedIn=""//agar hm ek empty string ko boolean me print krwate h to vo false deta h
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
*/

/*let isLoggedIn="aditya"//agar hm ek string ko boolean me print krwate h to vo true deta h
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);*/

/*ye hamara output h boolean function me
1=>true
""=>false
"aditya"=>true
*/

//ab hm string ka conversion karenge
let someNumber=90
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)//now we see that we chages the number into string
