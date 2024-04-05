let randomNum = Math.floor(Math.random()*100+1)

const inputfield = document.getElementById('guessField')
const submit = document.querySelector('#subt')
// the above are for the inputfie and the submit button 
let playgame = true
const mainDisplay = document.querySelector("#guess")
const guessPrev = document.querySelector(".guesses")
const guessLeft = document.querySelector(".lastResult")
const LowHi = document.querySelector(".lowOrHi")

let Stage = 1 ;  
if (playgame)
{
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(inputfield.value)
        validate(guess)
    })
}

const validate = (guess) => {
    if (!isNaN(guess)) 
    {
        mainDisplay.innerHTML = 'Please enter a valid number '
    }else if (guess < 100 && guess > 0)
    {
        mainDisplay.innerHTML = 'Please enter a number below 100 and above 0 '
    }
    else {
        mainDisplay.innerHTML = ' Guess a number'
        checker(guess)
    }
}
const checker = (guess) => {
    if (randomNum == guess)
    {
        LowHi.innerHTML = 'You Have guessed it right'
        msgFunction(guess) // to showcase guesses and lastVal
        endl() // a function i will use to end
    }
    else if (randomNum > guess) {
        LowHi.innerHTML = 'TOO low'
        msgFunction(guess)
    }else if (randomNum < guess)
        LowHi.innerHTML = 'TOO high'
        msgFunction(guess)
}

const msgFunction = (guess) => {
    Stage++
    guessPrev.innerHTML += `${guess}`
    guessLeft.innerHTML = `${11-Stage}`
    
} 

const endl= ()=> {

}