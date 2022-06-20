let count = 0;
function colorMix(colors)
{
  var temp = [];
  var iterations = numberToPower(2, colors.length); 

  for (var i = 0; i < iterations; i++)
  {
      temp = [];
      for (var j = 0; j < colors.length; j++)
      {
          if ((i & numberToPower(2, j)))
          {
              temp.push(colors[j]);
          }
      }
      if (temp.length > 1)
      {
          count++;
      }
  }
}

function numberToPower(number, power){
  let total = 1;
  for (let i = 1; i <= power; i++) { 
    total = total * number;
  }
  return total;
}

colors = ["Piros"]
colorMix(colors)
console.log("Ezekből: " + colors)
console.log("Ennyi szín keverhető ki: " + count)
count = 0;

colors = ["Piros", "Kék"]
colorMix(colors)
console.log("Ezekből: " + colors)
console.log("Ennyi szín keverhető ki: " + count)
count = 0;

colors = ["Piros", "Kék", "Zöld"]
colorMix(colors)
console.log("Ezekből: " + colors)
console.log("Ennyi szín keverhető ki: " + count)