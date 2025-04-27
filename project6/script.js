let randomnumber= parseInt(Math.random() * 100+1);

const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessfield')
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultparas');

const p = document.createElement('p')

let prevGuess=[]
let numGuess=1

let playGame=true;

if (playGame){
    submit.addEventListener('click',function(e){
     e.preventDefault()
     const guess=parsevalue(userInput.value)
     validateGuess(guess)
    })
}

function validateGuess(guess){
  if (isNaN(guess)){
    alert('please enter a valid number')
  }else if(guess < 1){
    alert('please enter a valid number')
  }else if(guess > 100){
    alert('please enter a valid number')
  }else{
    prevGuess.push(guess);
    if(numGuess===11){
        displayGuess(guess)
        displaymessage(`game over.random no ${`random`}`)
        endgame()
    }else{
        displayGuess(guess)
        checkguess(guess)
    }
  }

}

function checkguess(guess){
 if(guess===randomnumber){
   displaymessage('u guessed it right')
   endgame()
 }else if(guess < randomnumber){
   displaymessage('no is toooo low')
 }else if(guess > randomnumber){
  displaymessage('no is toooo high')
 }
}

function displayGuess(guess){//it is also called clen up method
  userInput.value=''
  guessSlot.innerHTML+=`$(guess)`//ye hame batata h ki guess sahi h ya nhi agar nhi h numguees ki value increse ho jti h 
  numGuess++;
  remaining.innerHTML=`${11-numGuess}`
}

function displaymessage(message){
lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endgame(){
userInput.value=''
userInput.setAttribute('disabeled','')
p.classList.add('button')
p.innerHTML = `<h2>id="newgame">start new game</h2>`
startOver.appendChild(p)
playGame=false
newgame()
}

function newgame(){
 const newgamebutton=document.querySelector('#newgame')
 newgamebutton.addEventListener('click',function(e){
    randomnumber=parseInt(Math.random() * 100+1);
    prevGuess=[]
    numGuess=1
    guessSlot.innerHTML=''
    remaining.innerHTML=`${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    playGame=true
 })
}



