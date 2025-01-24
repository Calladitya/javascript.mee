//var c = 300
let a = 300//function or if else ke bahar jo bhi value hoti h unhe global scope kehte h
if (true) {//iske under mtlb ki function ke under or if , else ke under  inke undeer jo bhi value hoti h unhe local scope kehte h
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);//ye error isliye de raha h kyu wepsite ek local scope h jo ki bahar console nhi ho sakti 

     two()//hm yaha pe dekh sakte h ki ye error de raha jb tk hamne wepsite ko console nhi kiya kyu ki jb hamne wepsite ko console kiya usne error de diya

}

// one()//jb uper ne error de diya h to ye to vese bhi nhi chalega 

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);//hm ya dekhe to ye wepsite or username dono local scope ke under mtlb if ke unde hi h mtlb inko console kr sakte h lekin inke under bs
    }
    // console.log(website);//ye phir line 24 vala kaam kr raha 
}

// console.log(username);//similarly line 38


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))//yaha pe dekhe to hame pta chalega ki hamne yaha pe khali function hi liya h jisko hm kahi pe bhi call kr ke return krwa sakte h

function addone(num){
    return num + 1
}



addTwo(5)//ye intersting isliye h kyuki hmne is function ko kisi  variable me daal diya h to hame isse uske nihe hi likhna hoga vrna ye error dega
const addTwo = function(num){
    return num + 2
}
