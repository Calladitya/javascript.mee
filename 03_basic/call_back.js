//in this we simply study how to call back back function 
function sum(num1,num2,/*i will make one more input*/ fntocall){
    let result = num1 + num2;
   fntocall(result);
}

function displayResult(data){
    //console.log("sum result is :" + data);
}

function displayResultpassive(data){
    //console.log("sum result is : " +data)
}
//we can also do it with calling two function
//const ans = sum(1,2)//1st function
//displayResult(ans)//this is our second function
//but if we have to it  with only calling one function
//which is known as call_back_function
//const ans = sum(1,2,displayResult)//now here onwardi call any function without calling it twice
//sum result is :3//and here is our output
//const ans = sum(1,2,displayResult)//and this is called call_back function



//2nd example
//this is our simple function

// function calculateArithmetic(a,b,type){
//     if(type=="sum"){
//         return a+b;
//     }
//     if(type=="minus"){
//         return a - b;
//     }
//     if(type=="mul"){
//         return a*b;
//     }
//     if(type == "divide"){
//         return a/b;
//     }
// }
// const value= calculateArithmetic(1,8,"sum")
// const values= calculateArithmetic(1,8,"minus")
// const valuer= calculateArithmetic(1,8,"mul")
// const valuess= calculateArithmetic(1,8,"divide")
// console.table({value,valuer,values,valuess})

function calculateArithmetic(a,b,Arithmeticfinalfunction){
      const ans= Arithmeticfinalfunction(a,b);
      return ans;
}

function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
// const value = calculateArithmetic(1,2,sum)//this function first call Arithmeticfinalfunction and replce this with Arithmeticfinalfunction to sum so that it is calling sum and then implementation is happen
// const values = calculateArithmetic(1,2,sub)//similarly//this is known as call back
// const valuer = calculateArithmetic(1,2,mul)//similarly
// const valuess= calculateArithmetic(1,2,div)//similarly
// console.table({value,valuer,values,valuess})

//3rd example
function square(n){
    return n*n;//here a*a and b*b is happening
}
function sumofsquares(a,b){
    const val1=square(a);//here we see that now it  is calling square so that we can find sq of a and b
    const val2 = square(b);//similarly
    return val1+val2;//here we are doing sum
}

console.log(sumofsquares(1,2))//here we see it is calling sumofsquares after that is moving upper function
//hence this is our call_back function who is calling first sumofsquare and 2nd calling val1 and val2

//here is the example



//impllementation for cube
function square(n){
    return n*n;//here a*a and b*b is happening
}
function cube(n){
    return n*n*n;//here a*a*a and b*b*b is happening
}
function sumofsomething(a,b,call_back){//this is the call back for upper functionn//if we put cube then we have  to written that function cube(n),return n*n*n; and we have to declare each val for cube which is not good 
    //hence we here call the sumofsomething which any functionand we see the 3rd input which is fntocall means whenever i put cube,sq,sum,it will call fntocall and then it perform the function
    const val1=call_back(a);//here we see that now it  is calling square so that we can find sq of a and b
    const val2 = call_back(b);//similarly
    return val1+val2;//here we are doing sum
}

console.log(sumofsomething(1,2,cube))//we are  also geting our ans as 5//we only have to change input in console and not anywere