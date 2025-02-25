const clock = document.querySelector("#clock");

setInterval(function(){
    let date = new Date();
    
    // Fix: Add parentheses to toLocaleDateString()
    clock.innerHTML = date.toLocaleTimeString() + "<br>" + date.toLocaleDateString();
    
}, 1000);


