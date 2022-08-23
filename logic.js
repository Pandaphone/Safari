let char = document.getElementById("char");
let enemy10 = document.getElementById("enemy1");
let enemy20 = document.getElementById("enemy2");
let enemy30 = document.getElementById("enemy3");


function jumpFunc(){
    char.classList.add("jumpLogic");
    setTimeout(function(){
        char.classList.remove("jumpLogic");
    }, 3000);
    
}

let statusCheck = setInterval(function(){
    let charTop = parseInt(window.getComputedStyle(char).getPropertyValue('top'));
    let enemyLeft = parseInt(window.getComputedStyle(enemy10).getPropertyValue('left'));
    //enemyLeft2 = window.getComputedStyle('enemy2').getPropertyValue('left');
    //enemyLeft3 = window.getComputedStyle('enemy3').getPropertyValue('left');

    if(enemyLeft > 0 && enemyLeft < 30 && charTop >= 380){
        alert('YOU LOSE LOL')
    }
   /* else if(charTop == '20px' && enemyLeft2 == '0px){

    }
    else if(charTop == '20px' && enemyLeft3 == '0px){
        
    }
    else{

    }
    */
}, 10)

function myFunction() {
    let popupLogic = document.getElementById("popup");
    popupLogic.classList.toggle("show");
  }

  