var guess = process.argv[2];
guess = parseInt(guess);

var target = Math.floor(10 * Math.random() + 1)

if (guess == target)
  {
  console.log("You guessed correct!")
}else{
  console.log ("You are WRONG!")
};

console.log (guess);
console.log (target);
