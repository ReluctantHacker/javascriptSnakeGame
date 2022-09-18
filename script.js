//-------------------game variables.--------------------
// def Game on or off
let game_status = 1;

// def Game constant color.
const board_border_color = "black";
const board_background_color = "white";
const snake_col_color = "lightblue";
const snake_border_color = "darkblue";

// def snake's initial position
let snake_move_switch = 1; // 1 means you can change snake's move, 0 means you can't
let snake_body_size = [10, 10]
let snake_body_position = [
  {x: 200, y: 200},
  {x: 200-snake_body_size[0], y: 200},
  {x: 200-snake_body_size[0]*2, y: 200},
  {x: 200-snake_body_size[0]*3, y: 200},
  {x: 200-snake_body_size[0]*4, y: 200}
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

function draw_snake_part(snake_part){
  snakeboard_ctx.fillStyle = snake_col_color;
  snakeboard_ctx.strokeStyle = snake_border_color;
  snakeboard_ctx.fillRect(snake_part.x, snake_part.y, 10, 10);
  snakeboard_ctx.strokeRect(snake_part.x, snake_part.y, 10, 10);
}

function draw_snake(){
  for (i in snake_body_position){
    draw_snake_part(snake_body_position[i]);
  }
}

function change_snake_direction(event){
  if(snake_move_switch === 0){
    return
  }
  const LEFT_KEY = 37;
  const RIGHT_KEY = 39;
  const UP_KEY = 38;
  const DOWN_KEY = 40;

  if(event.keyCode === LEFT_KEY && dx != 10){
    dx = -10;
    dy = 0;
  }
  if(event.keyCode === RIGHT_KEY && dx != -10){
    dx = 10;
    dy = 0;
  }
  if(event.keyCode === UP_KEY && dy != -10){
    dx = 0;
    dy = 10;
  }
  if(event.keyCode === DOWN_KEY && dy != 10){
    dx = 0;
    dy = -10;
  }
  snake_move_switch = 0;
}

function move_snake(){
  // Snake's body
  for(let i = snake_body_position.length - 1; i>0; i--){   
    snake_body_position[i].x = snake_body_position[i-1].x;
    snake_body_position[i].y = snake_body_position[i-1].y;
  }
  // Snake's head
  snake_body_position[0].x += dx;
  snake_body_position[0].y -= dy;
}

//this piece of blocked script doesn't work very well.
/*function main(){
  setTimeout(function runGame(){
    clear_board();
    move_snake();
    draw_snake();
    main();
  }, 100);
} */

function main(){
  setInterval(function runGame(){
    clear_board();
    move_snake();
    draw_snake();
    snake_move_switch = 1;
  }, 100);
}

document.addEventListener("keydown", change_snake_direction);
main();







