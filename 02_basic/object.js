//singleton//this we have to study after this
//object create//this we have to study after this


//object letrals//this we are studing

//generaly object declare by key,value pair 

const mysymbol= Symbol("key")
const jsuser={
    name : "aditya",//here we see name it covert directly in string
    "full name" : "aditya nath tiwari",//now we can not accase it with .
    //mysymbol : "mykey",//it will give as string
    [mysymbol] : "mykey",//this is the real way to define a symbole and now if we see its type then we get symbol as an datatype 
    email : "aditya@tiwari@gmail.com",
    age : "19",
    location : "channai",
    isloggedin : "false",
    //wecan also declare array type
    lastloginday : ["monday","wednesday"] 
}
// we want to print the object
// newFunction()//this is retairning the output but if we see the type of this then we get string as the data type but we have already declared input as a symbol
// //and in this we can not apply samicoloumn
// jsuser.email = "aditya@chatgpt"//through this we can change any thing in the object
// //but if we want to freeze all the value
// Object.freeze(jsuser)

function newFunction() {//this is how we can acsses object through function
    console.log(jsuser.email) //this is how we can acccess the email but it is not valid way to declare an object
    console.log(jsuser["email"]) //this the valid reasonn for declaring an array

    //console.log(jsuser.full name)//hence it is giving error to us
    console.log(jsuser["full name"]) //this is the way of returning 
    console.log(jsuser[mysymbol])
}

//if we want to do greeting 
jsuser.greeting = function(){
    console.log("hello js user")//here if we print it it will simplely return hello js user
}
//but if we want to  print greeting to object elements
jsuser.greetingtwo =function(){
    console.log(`hello js user , ${this["full name"]}`)//in this (`,${}`)//this is how we have to use greeting
}
console.log(jsuser.greeting)//if we print this then we get[Function (anonymous)]
console.log(jsuser.greetingtwo)//[Function (anonymous)]
//thatswhy we apply()
console.log(jsuser.greeting())//hello js user//this is the output 
console.log(jsuser.greetingtwo())//hello js user , aditya nath tiwari//this is the output