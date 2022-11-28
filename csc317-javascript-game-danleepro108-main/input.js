addEventListener("keydown", function(move){
    if(move.code=='KeyD') vx=1;
    if(move.code=='KeyA') vx=-1;
    if(move.code=='KeyW') vy=-1;
    if(move.code=='KeyS') vy=1;
})
addEventListener("keyup", function(move){
    if(move.code=='KeyD') vx=0;
    if(move.code=='KeyA') vx=0;
    if(move.code=='KeyW') vy=0;
    if(move.code=='KeyS') vy=0;
})