var phon = process.argv[2];
var char = parseInt(phon);
var str = char.toString();
var lgt = str.length;


if (lgt === 10){
  console.log("Valid")
}else{
  console.log("invalid entry meow")
};

console.log("");
console.log("");
console.log(phon);
console.log(char);
console.log(str);
console.log(lgt);
