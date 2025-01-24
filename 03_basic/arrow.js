const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);//it is a global value so that s why it can never be return inside any funnction
    }

}

// user.welcomeMessage()
// user.username = "sam"//yaha pe hm username ko  change kr rahe h
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {//ye tarika h arrow function ko return krne ka
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {//agar hamne ye{} lga diya h arrow ke unde to hame return krwana  jaruri hota h
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2//or agar hame iska {} use hi nhi krna h to direct arrow ke under jo bhi cheez hame perform krni h vo hm kr sakte  h

// const addTwo = (num1, num2) => ( num1 + num2 )//hm ese bhi krwa sakte h arrao function me

const addTwo = (num1, num2) => ({username: "hitesh"})//or ye tarika hota h object ko likhne ka arrow functionke under


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()