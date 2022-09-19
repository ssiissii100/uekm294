let input = prompt("Guess the number", "0");
let rng = Math.floor(Math.random()*100)

alert(rng.toString())
if (rng == input.parseInt()){
    alert("You won! Your Guess: " + input + "RNG: " + rng.toString())
}
else{
    alert("You Lose! Your Guess: " + input + "RNG: " + rng.toString())
    
}