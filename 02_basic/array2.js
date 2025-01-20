const marval_heros= ["thor","spiderman","ironman"]
const dc_heros = ["batman","flash","supperman"]
// marval_heros.push(dc_heros)
// console.log(marval_heros)//agar hm isme dekhe to hame pta chalega ki ek array ko dusre array ke saath jod to dega lekin vo usko treat karega ek array ke element ke jese
// //example  [ 'thor', 'spiderman', 'ironman', [ 'batman', 'flash', 'supperman' ] ]as we see there is 4 element but if we wannt to print any index of array2 then
// console.log(marval_heros[3][2])//isme kya huwa ki pehele index 1 se start huwa or index 3 tk gya uske baad index 3 ke under 2 elemnt ko print kr diya jo ki hamara output h
//lekin ye sahi tarika nhi h isliye hm concat ka istamaal krege


// const all_heros= marval_heros.concat(dc_heros)
// console.log(all_heros)//ab hm dekhe to hm dekh sakte h ki saare element jo h dc_heros ke vo  marval ke saath collab ho gye h
//lekin iske aalawa ek or tarika h jisse hm dono ko jod dete h 
//or vo tarika jada prefer  kiya jata h industries me//spread
// const all_heros= [...marval_heros,...dc_heros]//isme ek se jada arrays ko ek saath daal sekte h
// console.log(all_heros)

// const this_array= [1,2.,3,[4,5,6],7[8,9,[10,11,12]]]//ab agar istarah ki situation aati h to jo ki miskil h ek ek element ko prit krna to hm  ek kaam 
// //karege jo ki flat
// const this2_array= this_array.flat(Infinity)//iske under hm depth de sakte h ki kitne under jana h lekin agar hm infinity p ejate h to ye eke ek element ko seprate kr deta h
// console.log(this2_array)

//if we want to make array of any string  then we directly apply .from
console.log(Array.from("aditya"))//[ 'a', 'd', 'i', 't', 'y', 'a' ]this  is how it is created  In array
//if you want to create array

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))//ye hamara of jo h vo create krta h more than 2  inputs ko ek array me  
//console.log(Array.from(score1,score2,score3))//lekin vahi agar hm from lete h to hmme ye error dega kyuki ye sirf ek element ko convert krta h