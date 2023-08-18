var time = 6;
var rv = 0;
var score = 0;

function increaseScore(){
    score += 10;
    document.querySelector(".scoreval").textContent = score;
}

function runTimer(){
   var timer = setInterval(() => {
    if (time>0) {
        time--
     document.querySelector(".timecount").textContent = time;    
    }
    else{
        clearInterval(timer);
        document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
    }
   }, 1000);
}

function HitVal(){
     rv = Math.floor(Math.random()*10)
    document.querySelector(".val").textContent = rv;
}


    document.querySelector("#pbtm")
    .addEventListener("click",function(details){
            var clickedNum = (Number(details.target.textContent));
            if(rv === clickedNum){
                increaseScore()
                HitVal()
                makeBubble()
            }
    })
        
    


function makeBubble(){
    var clutter = " ";

for (let i = 1; i <= 90; i++) {
    var rm = Math.floor(Math.random()*10)
   clutter += `<div id="bubble">${rm}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

makeBubble()
runTimer()
HitVal()
increaseScore()