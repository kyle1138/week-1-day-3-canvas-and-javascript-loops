var word = process.argv[2];
var wl = word.toLowerCase();
var x = 0


while(x < word.length){


  if ((wl.charAt(x) === "a")){
    console.log(word.charAt(x))}
  else if ((wl.charAt(x) === "e")){
    console.log(wl.charAt(x))}
  else if ((wl.charAt(x) === "i")){
    console.log(word.charAt(x))}
  else if ((wl.charAt(x) === "o")){
    console.log(word.charAt(x))}
  else if ((wl.charAt(x) === "u")){
      console.log(word.charAt(x))}

      x ++;
}
