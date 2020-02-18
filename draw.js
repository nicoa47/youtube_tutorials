var canvas = document.getElementById("canvas1");
canvas.width = 800;
canvas.height = 600;
var ctx = canvas.getContext("2d");

function draw_circle(pos, radius, color) {
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, radius, 0, 2*Math.PI);
    ctx.strokeStyle = color; // fillStyle
    ctx.stroke(); // ctx.fill();
    ctx.closePath();
}

function draw_rectangle(pos, width, height, color) {
    ctx.beginPath();
    ctx.rect(pos.x, pos.y, width, height);
    ctx.fillStyle = color; // fillStyle
    ctx.fill(); // ctx.fill();
    ctx.closePath();
}

function draw_polygon(coords, color) {
    ctx.beginPath();
    ctx.moveTo(coords[0].x, coords[0].y);
    for (let index = 1; index < coords.length; index++) {
        const coord = coords[index];
        ctx.lineTo(coord.x, coord.y);
    }
    ctx.lineTo(coords[0].x, coords[0].y);
    ctx.strokeStyle = color; // fillStyle
    ctx.stroke(); // ctx.fill();
    ctx.closePath();
}

draw_circle({x: canvas.width/2, y: canvas.height/2}, 30, "red");
draw_rectangle({x: 40, y: 160}, 100, 200, "blue");
var coords = [
    {x: 150, y: 500},
    {x: 540, y: 456},
    {x: 210, y: 360},
];
draw_polygon(coords, "green");