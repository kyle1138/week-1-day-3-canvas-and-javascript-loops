var word = process.argv[2];
var lgt = word.length;
var side = 1;
var loop = 1;
var wrong = 0;


if(lgt%2 === 0){side = lgt/2}
  else{side = (lgt-1)/2};

if(word.slice(0,1) === word.slice(-1)){}
  else
{wrong ++}

while (loop < side){
  if(word.slice(loop,(loop+1)) === word.slice(-(loop+1),-(loop))){}
    else
  {wrong ++}

  loop ++

};

if(wrong > 0){console.log("That is not a palindrome.")}

  else

    {console.log("PALINDROME")}
