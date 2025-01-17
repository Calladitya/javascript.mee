 const accountId=4152763//hm log kabhi bhi const ko change nhi kr sakte gar ye ek baar declare ho gya to baad me chnage nhi ho sakta vo baad me error deta h
let accountEmail="aditya@gemail.com"//ye ek tarika ka jisse hm variable declare krte h//or h hm log in sb variable ko baad me bhi chnge kr sakte h sirf const ko chod ke baki sb ko hm vapas change r sakte h
var accountpassword="98989799"//ye bhi ek tarika h jisse hm variable declare declare krte h
accountcity="bombay"
//if your client say that you have to print your acount state
let accountState;//agar hm javascript variable ko bina kuch define kiya choode dete h to vo undefine show krta h


// accountId=3//here we see jb hamne print krwaya to error aagya
console.log(accountId);
//hatho hath ab hm dekh lete h ki or saari cheje print ho rahi h ya nhi lekin agar hm baar baar console.log use krte h usse  hame bhout time lagta h 
//to hm console ,log ki hagah hm console .table us krte h jisse hmme ek baar me hi sb ke output pta chal jaye

/*
prefer only let as variable
because of issue in block scope and functional scope;
*/
console.table([accountId,accountEmail,accountpassword,accountcity,accountState])//isse hm dekh sakte h ki ye saari cheeje ek tabular form me print kr dega