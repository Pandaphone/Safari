let char = document.getElementById("char");
let enemy10 = document.getElementById("enemy1");
let enemy20 = document.getElementById("enemy2");
let enemy30 = document.getElementById("enemy3");
let popupLogic = document.getElementById("popupB");

//Causes the car to jump when the screen is clicked. Sourced from KnifeCircus
function jumpFunc(){
    char.classList.add("jumpLogic");
    setTimeout(function(){
        char.classList.remove("jumpLogic");
    }, 3000);
    
}

//Makes the popup well, *popup* once the character dies. 
//The popup is always there in reality, but it's z-index is behind everything else to keep the illussion. 
//Also stops the enemies from moving to prevent bugs.
function popupPopup() {
    popupLogic.style.zIndex = "4";
    popupLogic.style.opacity = "1";
    enemy10.style.animation = "none";
    enemy20.style.animation = "none";
    enemy30.style.animation = "none";
  }

  
//Checks how close the enemy is to touching the car. 'Kills' the player if just close enough. Also sourced from KnifeCircus
//Tried tweaking values to make it close enough to look okay and also be fair. 
//The console log is probably not the best idea, 
//but multiple enemies wasn't covered in the code so I had to 
//improvise with if/else/elif statements and there had to be something there.
let statusCheck = setInterval(function(){
    let charTop = parseInt(window.getComputedStyle(char).getPropertyValue('top'));
    let enemyLeft = parseInt(window.getComputedStyle(enemy10).getPropertyValue('left'));
    let enemyLeft2 = parseInt(window.getComputedStyle(enemy20).getPropertyValue('left'));
    let enemyLeft3 = parseInt(window.getComputedStyle(enemy30).getPropertyValue('left'));

    if(enemyLeft > 0 && enemyLeft < 67 && charTop >= 360){
        popupPopup()
    }
    else if(enemyLeft2 > 0 && enemyLeft2 < 67 && charTop >= 360){
        popupPopup()
    }
    else if(enemyLeft3 > 0 && enemyLeft3 < 67 && charTop >= 360){
        popupPopup()
    }
    else{
        console.log('Moving along as usual')
    }
    
}, 10);

//This function is trigged via button click on the popup. 
//Sets the opacity back to zero to prevent it from being seen again.
function removePopup() {
    popupLogic.style.opacity = "0"
  }