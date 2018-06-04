var musicians
var instruments
var facts

function theBeatlesPlay(musicians,instruments){
var newarray=[]
var i
for(i=0;i<musicians.length;i++){
newarray[i] = `"${musicians} plays ${instruments}"`
}

return newarray
  
}

function johnLennonFacts(facts){
  var i
  while(i<facts.length){
    facts[i]=+"!!!"
  }
  return facts
}