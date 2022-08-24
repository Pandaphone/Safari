let char = document.getElementById("char");
let enemy10 = document.getElementById("enemy1");
let enemy20 = document.getElementById("enemy2");
let enemy30 = document.getElementById("enemy3");
let popupLogic = document.getElementById("popupB");


function jumpFunc(){
    char.classList.add("jumpLogic");
    setTimeout(function(){
        char.classList.remove("jumpLogic");
    }, 3000);
    
}

function popupPopup() {
    popupLogic.style.zIndex = "4";
    popupLogic.style.opacity = "1";
    enemy10.style.animation = "none";
    enemy20.style.animation = "none";
    enemy30.style.animation = "none";
  }

  

let statusCheck = setInterval(function(){
    let charTop = parseInt(window.getComputedStyle(char).getPropertyValue('top'));
    let enemyLeft = parseInt(window.getComputedStyle(enemy10).getPropertyValue('left'));
    let enemyLeft2 = parseInt(window.getComputedStyle(enemy20).getPropertyValue('left'));
    let enemyLeft3 = parseInt(window.getComputedStyle(enemy30).getPropertyValue('left'));

    if(enemyLeft > 0 && enemyLeft < 20 && charTop >= 360){
        popupPopup()
    }
    else if(enemyLeft2 > 0 && enemyLeft2 < 20 && charTop >= 360){
        popupPopup()
    }
    else if(enemyLeft3 > 0 && enemyLeft3 < 20 && charTop >= 360){
        popupPopup()
    }
    else{
        console.log('Moving along as usual')
    }
    
}, 10);

function removePopup() {
    popupLogic.style.opacity = "0"
  }