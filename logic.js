let char = document.getElementById("char");
let enemy1 = document.getElementById("enemy1");
let enemy2 = document.getElementById("enemy2");
let enemy3 = document.getElementById("enemy3");


function jumpFunc(){
    char.classList.add("jumpLogic");
    setTimeout(function(){
        char.classList.remove("jumpLogic");
    }, 3000);
    
}

let statusCheck = setInterval(function(){
    charTop = window.getComputedStyle('char').getPropertyValue('top');
    enemyLeft = window.getComputedStyle('enemy1').getPropertyValue('left');
    enemyLeft2 = window.getComputedStyle('enemy2').getPropertyValue('left');
    enemyLeft3 = window.getComputedStyle('enemy3').getPropertyValue('left');

    if(charTop == '20px' && enemyLeft == '0px'){
        alert('YOU LOSE LOL');
    }
   /* else if(charTop == '20px' && enemyLeft2 == '0px){

    }
    else if(charTop == '20px' && enemyLeft3 == '0px){
        
    }
    else{

    }
    */
}, 5)

function myFunction() {
    let popupLogic = document.getElementById("popup");
    popupLogic.classList.toggle("show");
  }

  