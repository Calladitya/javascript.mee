const score=400
//console.log(score)//ab agar hm iske input me dekte h to hame khali 400 print huwa dikhta h lekin vo hame pta h ki vo ek number h
//lekin vo javascript batata nhi h
//console.log(typeof score)//isse to hame to hame pta chal chal gya h ki ye ek no h lekin niche vale tarike ke se hame puri tarah se pta chal gya h ki ye ek no h


const balance= new Number(100)
//console.log(balance)//ab hm isme dekhe to ye print krta h ki ye ek no h//issme new lagana jaruri h nhi to vo khali 100 prit karega


//ab hm is no ko direct string me change kr sakte h or uske baad string ke saare functions us pe apply kr sakte h
//console.log(typeof balance.toString())//ab hm iska output dekhe to hame pta chalta h ki ye to 100 print kr raha h lekin agar hm ab iska typeof print krte h 
//to hame pta chal jayega ki ye ek string h
//ab hm isme vosaare operations ko perform krenge jo string me hote h jese split,length,slice,substring etc
//console.log(balance.toString().length)//ab hm dekhe to hmme dikh raha h ki kya string ki length h
//isme hm ek precision value function ko use karenge jo aage bhout kaam karega jese  
//12.8989 ab mujhe iska teen no vala precesion value chahiye to hame ye print kr ke dega 12.9

const newbalance=12.8989
//console.log(newbalance.toPrecision(3))
//ab agar newbalance ki value decimal se pehele teen digit ya 4 digit le to 
// const new1balance=112.8989
// const new2balance=1112.8989
// const new3balance=12.8989
// console.log(new1balance.toPrecision(3))
// console.log(new2balance.toPrecision(4))
// console.log(new3balance.toPrecision(1))//h to ye ek precise value deta h hame


//*********************************************************************************************************************/
const hundered=10000000000
//console.log(hundered.toLocaleString());//but this is the way of american writing
//console.log(hundered.toLocaleString('en-IN'))//this is the way of writing in indian form
//****************************************************[Maths]**************************************************************** */

// console.log(Math)//maths ek khud ba khud ek library h                

// console.log(Math.abs(-4))//ye hame ek appsolute value deta h -4=4,-5=5 and etc;
// console.log(Math.round(4.3))//ye hamara round fig nikalta h
// console.log(Math.round(4.9))//'''''''''''''''''''''''''''''
// console.log(Math.ceil(4.6))//ye largest closest value nikalta h
// console.log(Math.floor(4.3))//ye smallest closest value nikalta h

//console.log(Math.random());//this will always select a random no between 0 to 1 always
console.log(Math.random()*10)//iska example dekhe agar to=>
    /*
agar me math.random() leta hu to randomly mere pass 0 se 1 ke beech me kuch bhi aa sakta h jese 
0.1023982923394803483,0.918908293123,any value will comme
but if i take math.random()*10 then kya hoga ki 0.127897321*10=1.27897321 this will our ans
*/
console.log((Math.random()*10)+1)//ye bhi upper vala hi kaam karega lekin kabhi bhi 0 output nhi dega

//ab hm floor or ceil ka istamaal karege iske under
console.log(Math.floor(Math.random()*10)+1)//ab ye decimal me value vaues ko nhi lega kabhi bhi//ye smallest closest value nikalta h 
console.log(Math.ceil(Math.random()*10)+1)//ab ye bhi decimal value kabhi bhi nhi//ye largest closest value nikalta h


//ab agar mujhe khud ko kisi min no se laker kisi max no ke beech me koi no chahiye to hamare pass ek formula h or kaheh ek tarika

const min=10
const max=20

 console.log(Math.random()*max-min+1 + max-min)//lekin ye  bhi bhi hame point me value de raha h
 console.log(Math.floor((Math.random()*(max-min+1) )+ max-min))//ab agar hm dekhege to hame point value nhi milega or iska range hamesha min se max ke beech me hi rahega