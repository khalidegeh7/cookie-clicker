const cookie_img = document.getElementById("cookie_img");
const counter = document.getElementById("Count");
const body = document.body;
const restartBtn = document.getElementById("Restart");
const doubleBtn = document.getElementById("Double");

counter.innerText = 0

cookie_img.addEventListener("click", function(e){
    counter.innerText ++;


    if(counter.innerText>4 && counter.innerText<25){
        body.style.backgroundColor = "aqua";
        restartBtn.removeAttribute ("hidden");
    }
    else if(counter.innerText>24){
        doubleBtn.removeAttribute("hidden");
    }
    })

restartBtn.addEventListener("click", function(e){
    counter.innerText= 0;
    restartBtn.setAttribute ("hidden", "")
    doubleBtn.setAttribute ("hidden", "")
    body.style.backgroundColor ="burlywood"
})   

doubleBtn.addEventListener("click", function(e){
    counter.innerText= counter.innerText*2;
})   

   
   
        