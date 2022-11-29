let player = document.getElementById("player");
let obstacle1 =document.getElementById("obstacle1");
let obstacle2 =document.getElementById("obstacle2");
let obstacle3 =document.getElementById("obstacle3");
let count=0;

obstacle2.style.animation="none";
obstacle2.style.display="none";
obstacle3.style.animation="none";
obstacle3.style.display="none";

function jump(){
    if(player.classList != "animate") {
        player.classList.add("animate");
    }
    setTimeout(function(){
        player.classList.remove("animate")
    },500);
}
function obJump(){

}

let checkDead = setInterval(function(){
    if(count<5&&count>=0){
        let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
        let obstacleLeft1 = parseInt(window.getComputedStyle(obstacle1).getPropertyValue("left"));
        if(obstacleLeft1<20 && obstacleLeft1>0 && playerTop>=130){
            obstacle1.style.animation="none";
            obstacle1.style.display="none";
            alert("GAME OVER! Refresh to try again.");
        }
    }
    else if(count<10&&count>=5){
        obstacle1.style.animation="none";
        obstacle1.style.display="none";
        obstacle2.style.display="block";
        obstacle2.style.animation ="obstacle2 1s infinite";
        let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
        let obstacleLeft2 = parseInt(window.getComputedStyle(obstacle2).getPropertyValue("left"));
        if(obstacleLeft2<20 && obstacleLeft2>0 && playerTop>=130){
            obstacle2.style.animation="none";
            obstacle2.style.display="none";
            alert("GAME OVER! Refresh to try again.");
        }
    }
    else if(count<15&&count>=10){
        obstacle2.style.animation="none";
        obstacle2.style.display="none";
        obstacle3.style.display="block";
        obstacle3.style.animation ="obstacle2 1s infinite";
        let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
        let obstacleLeft3 = parseInt(window.getComputedStyle(obstacle3).getPropertyValue("left"));
        if(obstacleLeft3<20 && obstacleLeft3>0 && playerTop>=120){
            obstacle3.style.animation="none";
            obstacle3.style.display="none";
            alert("GAME OVER! Refresh to try again.");
        }
    }
}, 10);

let incDiff = setInterval(function(){
    count++;
    console.log(count);
},1000);