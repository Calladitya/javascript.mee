//ab hm log singleton object ke baare me padehenge
const tinderuser =  new Object()//hence this will our singleton object
//const tinderusers = {}//this will also return object but this is not single ton object

//now if we want to print about tinderuser
//then 
tinderuser.id ="123abc"
tinderuser.name = "saame"
tinderuser.isloggedIn = "false"
//{ id: '123abc', name: 'saame', isloggedIn: 'false' }//this will our answer of putting all the idies
console.log(Object.keys(tinderuser))//[ 'id', 'name', 'isloggedIn' ]//this will our anser of keys but it all values comming in array


//now we are moving inside and inside of the object
const regularuser = {
    email:"aditya@gmail.com",
    fullname : {
         username : {
            firstname : "aditya",
            lastname : "nath tiwari"
         }
    }
}
//thats how we can take object after obbject
// console.log(regularuser)//email: 'aditya@gmail.com',
// //fullname: { username: { firstname: 'aditya', lastname: 'nath tiwari' } }
// console.log(regularuser.fullname)//{ username: { firstname: 'aditya', lastname: 'nath tiwari' } }
// console.log(regularuser.fullname.username)//{ firstname: 'aditya', lastname: 'nath tiwari' }
// console.log(regularuser.fullname.username.lastname)//nath tiwari


//now we can also combine object after object
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {...obj1,...obj2}
//console.log(obj3)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }//this will our answer after cobining//this process is known as concat


//now we see how we use onbject inside the array
const user = [
    {
        id : 1,
        email : "a@gmail.com"
    },
    {
        id : 2,
        email : "b@gmail.com"
    },
    {
        id : 3,
        email : "c@gmail.com"
    }
]
// console.log(user[2].email)//c@gmail.com//hence we got the email for array element 2
// // if we want to search anything if it is present or not
// console.log(tinderuser.hasOwnProperty('isloggedIn'))//it is giving us true
// //but if i put islogged
// console.log(tinderuser.hasOwnProperty('islogged'))//now it is returning false which mean element is not present


//now from here we study about destructuring
const course= {
    coursename : "js in hindi",
    price : "999",
    courseinstructor : "aditya"
}

// course .courseinstructor

const {courseinstructor} = course//agar hame koi bda name h to hm use chota kr sakte h courseinstructor:instructor to isse kya hoga ki ab se hm khali instructor bolenge courseinstructor ko
console.log(courseinstructor)


//hm isme thoida sa json api ke baare me bhi padhege
// {
//     //ese json api call hoti h//hm direct json formater is kind of tool which tells us what is happening in the api
//     //iske ander keys or value dono ke dono " "ke under hi aata h
//     "name" : "aditya",
//     "email" : " a@gmail.com",
//     "number" : "887388378973" 
// } //this is the way of declaring a json api