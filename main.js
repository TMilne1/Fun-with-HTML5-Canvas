
window.onload = function(){
const canvas = document.querySelector('#draw');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = '#BADA55';
context.lineJoin = "round";
context.lineCap ="round";
context.lineWidth = 50;

let drawing = false;
let lastX = 0;
let lastY= 0;



function draw(event){
    if(!drawing){return}
    
    context.strokeStyle = `hsl( ${Math.random()*360}, 100% , 50% )`   
    context.beginPath();
    context.moveTo(lastX,lastY);
    context.lineTo(event.offsetX,event.offsetY);
    context.stroke();
    lastX = event.offsetX;
    lastY = event.offsetY;
    
}
canvas.addEventListener('mousemove',draw)
canvas.addEventListener('mouseup', () => drawing = false);
canvas.addEventListener('mouseout', ()=> drawing = false);
canvas.addEventListener('mousedown', (event) => {
    lastX = event.offsetX;
    lastY = event.offsetY;
    drawing = true;
});

console.log("loaded")
}
  