var player = document.getElementById("player");
var obstacle =document.getElementById("block");
function jump(){
    if(player.classList != "animate") {
        player.classList.add("animate");
    }
    setTimeout(function(){
        player.classList.remove("animate")
    },500);
}

var checkDead = setInterval(function(){
    //var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    //var obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    //if(obstacleLeft<20 && obstacleLeft>0 && playerTop>=130){
    if(player.top>=130 && obstacle.left<20 &&obstacle.left>0){
        obstacle.style.animation="none";
        obstacle.style.display= "none";
        alert("YOU LOSE!");
    }
}, 10);