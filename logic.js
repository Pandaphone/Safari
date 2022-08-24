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
    let enemyLeft2 = parseInt(window.getComputedStyle(enemy20).getPropertyValue('left'));
    let enemyLeft3 = parseInt(window.getComputedStyle(enemy30).getPropertyValue('left'));

    if(enemyLeft > 0 && enemyLeft < 30 && charTop >= 360){
        alert('YOU LOSE LOL')
    }
    else if(enemyLeft2 > 0 && enemyLeft2 < 30 && charTop >= 360){
        alert('YOU LOSE LOL')
    }
    else if(enemyLeft3 > 0 && enemyLeft3 < 30 && charTop >= 360){
        alert('YOU LOSE LOL')
    }
    else{
        console.log('Moving along as usual')
    }
    
}, 10)

function myFunction() {
    let popupLogic = document.getElementById("popup");
    popupLogic.classList.toggle("show");
  }

  