//as we also studied how to join two string
const name="aditya"
const myname="tiwari"
//console.log(name + myname)//ye jo h ye ab purana tarika ho chuka h
console.log(`my name is ${name} but my full name is ${myname}`)//this is better way to print somethins in an order by ${}
//hm is me direct koi operation kr sakte h ${iske under} jesse
console.log(`my name is ${name.toLocaleUpperCase()} but my full name is ${myname.toLocaleUpperCase()}`)//i am applying uppercase function in ${}

const gameName= new String(`adityahhc`)//ye hame bhout saare tarike deta h or me kahu to bhout saare function provide krta h
//for example
console.log(gameName)
//console.log(gameName.toLocaleUpperCase())//or bhi kayi saare functions  jo me direct add kr sakta hu kisi bhi bhi string
//console.log(gameName.length)//it will give me length //same below are the functions of the string
console.log(gameName.charAt(2))//this will tell on which place which char is present
console.log(gameName.indexOf(`t`))//this will tell the char is on which position


const newString = gameName.substring(2,7)//isse substring print ho jayegi 
console.log(newString)
const anotherString = gameName.slice(1,4)//isme slicing hoti h//or isme hm -ve value bhi de sakte h
console.log(anotherString)

const url= "http://aditya%20.com"
console.log(url.replace("%20","-"))//here we see that  %20 hatt gaya "-" iss  cheej se

//if we want to put my string into array
let gamming="ad-it-ya-"
console.log(gamming.split('-'))
//hm dekh sakte h ki ye puri tarah se array me aa gya h