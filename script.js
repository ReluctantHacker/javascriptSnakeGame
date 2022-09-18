//-------------------game variables.--------------------
// def Game constant color.
const board_border_color = "black";
const board_background_color = "white";
const snake_col_color = "lightblue";
const snake_border_color = "darkblue";

// def snake's initial position
let snake_body_position = [
  {x: 200, y: 200},
  {x: 190, y: 200},
  {x: 180, y: 200},
  {x: 170, y: 200},
  {x: 160, y: 200}
];

// def initial properties of game objects.
let score = 0;
let changing_direction = false;
let food_x_position;
let food_y_position;
let dx = 10;
let dy = 0;

// get canvas element
const snakeboard = document.getElementById("snakeboard");
const snakeboard_ctx = snakeboard.getContext("2d");

//-------------------game functions--------------------
function clear_board(){
  snakeboard_ctx.fillStyle = board_background_color;
  snakeboard_ctx.strokeStyle = board_border_color;
  snakeboard_ctx.fillRect(0, 0, snakeboard.width, snakeboard.height);
  snakeboard_ctx.strokeRect(0, 0, snakeboard.width, snakeboard.height);
}

function draw_snake_part(){
  snakeboard_ctx.fillStyle = snake_col_color;
  snakeboard_ctx.strokeStyle = snake_border_color;
  snakeboard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function draw_snake(){
  snake.forEach(drawSnakePart);
}

function change_snake_direction(event){
  const LEFT_KEY = 37;
  const RIGHT_KEY = 39;
  const UP_KEY = 38;
  const DOWN_KEY = 40;








