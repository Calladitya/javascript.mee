 //let  us  make a simple function in this
//  function addtwonumbers (number1,number2){
//     console.log(number1+number2)
//  }
//  //addtwonumbers(3,9)//hence it is printing our output as 12
//  const result = addtwonumbers(5,3)//it is returning 8 but if we see the value of result then we got undefined
//  console.log(result)//undefined

//  function addtwonumbers (number1,number2){
// //    let result = number1+number2
// //    return result
//    return number1+number2//agar hamne return kr diya tb vo result ke under value ko jane deta h
//  }
//  const result = addtwonumbers(5,3)
//  console.log("Result:", result) //Result:8


function isloggedin(username){
    if(username===undefined){
      //  console.log("please enter the username")
        return
    }
    return `${username} just logged in`
}
//const result = isloggedin("aditya")//ye kuch return nhi karega kyuki kyuki hamne return kiya h jiske karan hame ye value kisi cheej me daalni padegi or uske baad return krwana h
const result = isloggedin()
//console.log("result:",result)



//now agar hame function ke under object ka istamaal krna ho to 
const user = {
    username : "aditya",
    price : "9999"
}
function handleobject(anyObject){
  //  console.log(`username is ${anyObject.username} and the price is ${anyObject.price}`)
}
handleobject(user)//username is aditya and the price is 9999//this is our output for using object in function

//now implement array in function
const users = [100,200,300,400,500]
function handlearray(anyarray){
   return anyarray[2]
}
console.log(handlearray(users))//now here we are getting our ans