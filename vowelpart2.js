var word = process.argv[2];
var wl = word.toLowerCase();
var x = 0;
var nw = "";

while(x < word.length){


  if ((wl.charAt(x) === "a")){
    nw = (nw + word.charAt(x))}
  else if ((wl.charAt(x) === "e")){
    nw = (nw + word.charAt(x))}
  else if ((wl.charAt(x) === "i")){
    nw = (nw + word.charAt(x))}
  else if ((wl.charAt(x) === "o")){
    nw = (nw + word.charAt(x))}
  else if ((wl.charAt(x) === "u")){
      nw = (nw + word.charAt(x))}

      x ++;
}

console.log(nw);
