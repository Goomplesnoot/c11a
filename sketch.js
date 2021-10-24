var weight = [35,38,42,45,43,34,36,41,48,32];
var value=0
function setup() {
  createCanvas(400,400);
  avg_weight()
}
function avg_weight(){
  for(var i=0; i<weight.length;i++){
    value=value+weight[i]
  }
  var avg = value/weight.length
  console.log(avg)
}

function draw() 
{
  background("blue");
}

 

