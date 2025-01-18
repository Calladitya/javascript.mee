//in this we see stack and heap type memory only
//#stack(premitive data type)
/*
string,number,boolean,null,undefine,symbol,bigint//these are premitive data type they come in stack memory
*/

// #heap(non premitive data type)
/*
array,function,object etc//these are non preitive data type
*/

//*******************************************************************************
//stack
let myname="aditya"
let yourname=myname//is me hamesha myname ki value copy hoke hi jayegi yourname me
//but if i change the valye of yourname then what happen
yourname="abhishek"//yaha pe yourname ki value vapas change ho gyi 
console.log(myname)//yaha pe hamne check kiya h ki my name me to change nhi huwa //jisse hame clarity mil gyi ki myname ki value change nhi hoti vo khali copy hoti h
console.log(yourname)//ab hm dekhe to iski  vvalue tochnge ho chuki lekin my name ki value abhi bhi bhi vahi h kyuki 
//jb hamne yourname = myname kiya tha to usse jo myname ki value thi vo copy hoke yourname me chaligyi thi /kabhi agar hm (a=b,c=a,c=d,in last a=b always rahega hatega nhi)

//**************************************************************************************************************
//heap
let userOne={
    email :"aditya@gmail.com",
    upi : "slice@tiwari"
}
let userTwo =userOne//ab hm isme dekh sakte  h ki userTwo me userone ki value hi gyi h

userTwo.email = "adityabaik@gmail.com"//yaha pe userTwo ne apni value ko change kr diya h to isse se kya hoga ki jb hm use2 ki value ko change 
//karege to userOne ki value autometically change ho jayegi

console.log(userOne)//yaha pe bhi value change hogyi
console.log(userTwo)//yaha pe bhi value change hogyi