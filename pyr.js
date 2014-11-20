var sz = process.argv[2];
var egypt = 1;
var block = "^";
var space = sz;
var air = "";
var neg = 0;

while (egypt <= sz){
neg = 0;
air = "";

while (neg < space){
  air = air + " "
  neg ++

}


  console.log(air + block + air)
  block = "^" + block + "^"
  space --
  egypt ++;
}
