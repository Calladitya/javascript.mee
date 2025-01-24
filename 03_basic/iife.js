// Immediately Invoked Function Expressions (IIFE)
//ye ek tarika hota h function ko jaldi run krwane ka
//global scope me jo pulution hoti kyi baar to us global scope ko hatne ke liye hamne iife ka use kiya:

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
//ek iifi ke baad ye; lagana bhout jaruri hota h

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
