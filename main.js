var canvas=document.getElementById("mi_canvas");
var ctx=canvas.getContext("2d");
var color="purple"
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",mi_mousedown);

function mi_mousedown(l){
    mouse_x=l.clientX-canvas.offsetLeft;
    mouse_y=l.clientY-canvas.offsetTop;
    circle(mouse_x, mouse_y)
}
function circle(mx,my){
    ctx.beginPath();
    ctx.arc(mx,my,40,0,2*Math.PI);
    ctx.stroke();
}