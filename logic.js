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

function myFunction() {
    let popupLogic = document.getElementById("popup");
    popupLogic.classList.toggle("show");
  }

  