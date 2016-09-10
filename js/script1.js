var base=prompt("Insert base" , "");
var exponent=prompt("Insert exponent" , "");


function pow(base, exponent) {
  var result = 1;
  for (i = 0; i < exponent; i++){
    result *=base;
  }
  console.log("Result: "+base +" ^ "+exponent +" is "+result);
  return alert("Result: "+base +" ^ "+exponent +" is "+result);

}

pow(base,exponent);
