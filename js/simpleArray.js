let squareNums = [25,36,49,64,81,100]
let squarePos = 10;



function setup(){
  createCanvas (windowWidth, windowHeight)
//starts with 0 it refers to for example 25

  fill(200,40,100)
  for (let i=0; i < squareNums.length; i++){
    squarePos +=40;
    rect(0, squarePos, squareNums[i],20)
    print(squarePos);
    text(str(squareNums[i]),squareNums[i],squarePos)

  }



//ellipse (200,200, squareNums[3], squareNums[5])



}


function draw (){




}
