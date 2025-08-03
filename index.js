let count = 0;

const cookie= document.getElementById('cookie');
const counter= document.querySelector('.counter');
const restartBtn= document.querySelector('.restart-btn');
const doubleBtn= document.querySelector('.double-btn');
const body= document.body;

counter.innerText= count;

// ********************* Counter *****************
cookie.addEventListener('click', () =>{
   count ++;
   counter.innerText= count;
   
    if(count >= 25){
        document.body.style.backgroundColor = 'hsl(0, 100%, 87%)';
        doubleBtn.hidden= false;
        };

    if(count >= 100){
        document.body.style.backgroundColor = 'hsl(239, 98%, 59%)';
        };
})


// ********************* Double-Button *****************

doubleBtn.addEventListener('click', () =>{
    count *= 2;
    counter.innerText= count;
    if(count >= 100){
        document.body.style.backgroundColor = 'hsl(239, 98%, 59%)';
        };
 });


 // ********************* Restart-Button *****************

restartBtn.addEventListener('click', () =>{
    count= 0;
    counter.innerText= count;
    document.body.style.backgroundColor = 'hsl(214, 41%, 78%)';
    doubleBtn.hidden= true;

});



