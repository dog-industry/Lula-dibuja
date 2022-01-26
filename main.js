var canvas=document.getElementById("mi_canvas");
var ctx=canvas.getContext("2d");
var color="red"
var mouseEvent="empty"
var ultima_posicion_de_x
var ultima_posicion_de_y
var ancho_de_linea=1
canvas.addEventListener("mousedown",mi_mousedown);

function mi_mousedown(l){
    mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",mi_mousemove);
function mi_mousemove(c){
    posicion_actual_de_mouse_x=c.clientX-canvas.offsetLeft
    posicion_actual_de_mouse_y=c.clientY-canvas.offsetTop
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=ancho_de_linea;
        ctx.moveTo(ultima_posicion_de_x, ultima_posicion_de_y);
        ctx.lineTo(posicion_actual_de_mouse_x, posicion_actual_de_mouse_y);
        ctx.stroke();
    }
    ultima_posicion_de_x=posicion_actual_de_mouse_x
    ultima_posicion_de_y=posicion_actual_de_mouse_y
}
canvas.addEventListener("mouseup",mi_mouseup);
function mi_mouseup(l){
    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave",mi_mouseleave);
function mi_mouseleave(l){
    mouseEvent="mouseLeave";
}
function borrar(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
function rojito(){
    color="red"
}
function azulito(){
    color="blue"
}
function verdesito(){
    color="green"
}
function amarillito(){
    color="yellow"
}
function negrito(){
    color="black"
}
function blancito(){
    color="white"
}
function rosita(){
    color="pink"
}
function moradito(){
    color="purple"
}