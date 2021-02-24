var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

color = "black";
line_width=5;

canvas.addEventListener("mouseup", mouse_up);
function mouse_up(e){
mouseEvent="mouseup";
}

canvas.addEventListener("mousedown", mouse_down);
function mouse_down(e){
    mouseEvent="mousedown";
    color = document.getElementById("color").value;
    line_width= document.getElementById("width").value;
}
canvas.addEventListener("mouseleave", mouse_leave)
function mouse_leave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove", mouse_move);
function mouse_move(e){
current_position_of_x=e.clientX-canvas.offsetLeft;
current_position_of_y=e.clientY-canvas.offsetTop;    

if (mouseEvent=="mousedown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=line_width;
 


console.log("Last Position Of the");
console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
ctx.moveTo(last_position_of_x,last_position_of_y);

console.log("Current Position Of The");
console.log("x = " + current_position_of_x + "y = " + current_position_of_y);
ctx.lineTo(current_position_of_x,current_position_of_y);

ctx.stroke();
}

last_position_of_x=current_position_of_x;
last_position_of_y=current_position_of_y;

}
function cleararea(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
}