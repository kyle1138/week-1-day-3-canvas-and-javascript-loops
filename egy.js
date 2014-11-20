var sz = process.argv[2];
var egypt = 1;
var block = "^";
var space = (sz-1)/2;
var air = "";
var neg = 0;

while (egypt <= sz){
neg = 1;
air = "";

while (neg <= (sz-egypt-1)/2){
  air = air + " "
  neg ++

}


  console.log(air + block + air)
  block = "^" + block + "^"
  egypt ++;
}
