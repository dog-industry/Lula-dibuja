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





function add(imagen1){
    estampa1=new Image()
    estampa1.onload=estampa
    estampa1.src=imagen1
}
function estampa() {
    console.log(ultima_posicion_de_x+"/"+ultima_posicion_de_y)
    ctx.drawImage(estampa1,ultima_posicion_de_x,ultima_posicion_de_y, 40,40)
}
window.addEventListener("keydown",teclapresionada)
function teclapresionada(f) {

    keyPressed=f.keyCode
    console.log(keyPressed)
    if (keyPressed=="65"){
        var Lula_imagen1 ="Lula_estampa1.png"
        add(Lula_imagen1)
    }
    if (keyPressed=="66"){
        var Simona_imagen1 ="Simona_estampa1.png"
        add(Simona_imagen1)
    }
}