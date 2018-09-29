
var x, xi;
var y, yi;
var br;  // ball radius
var score = 0;
var lose = 0;

var prev = false;  // 是否已有前次資料
var prev_bx, prev_by, prev_hx, prev_hy;  // 記錄前次點擊的位置 (ball, hit)

function setup()
{
  createCanvas(windowWidth, windowHeight);
  background(80, 120, 90);
  
  init();
  
  noCursor();
}


function init()
{
  x = random(width);
  y = random(height);
  xi = random(2, 5);
  yi = random(2, 5);
  br = random(20, 50);
}


function draw()
{
  x += xi;
  if(x>width || x<0)
  {
    xi *= -1;
  }
  
  y += yi;
  if(y>height || y<0)
  {
    yi *= -1;
  }
  
  
  background(80, 120, 90);
  
  // 顯示前次的點擊
  if(prev)
  {
    noFill();
    stroke(200, 0, 0);
    ellipse(prev_bx, prev_by, br*2, br*2);
    
    stroke(200, 200, 0);
    line(prev_hx-br, prev_hy, prev_hx+br, prev_hy);
    line(prev_hx, prev_hy-br, prev_hx, prev_hy+br);
  }
  
  noStroke();
  fill(255, 255, 0);
  ellipse(x, y, br*2, br*2);
  
  // 加入滑鼠位置
  stroke(255);
  line(mouseX-br, mouseY, mouseX+br, mouseY);
  line(mouseX, mouseY-br, mouseX, mouseY+br);
  
  // 顯示分數
  stroke(255, 0, 0);
  fill(255);
  textSize(32);
  text('Score: ' + score, 20, 40);
  text('Lose: ' + lose, 220, 40);
}


function mousePressed()
{
  // 記錄點擊位置
  prev = true;
  prev_hx = mouseX;
  prev_hy = mouseY;
  prev_bx = x;
  prev_by = y;
  
  // 檢查是否抓到
  if(dist(mouseX, mouseY, x, y)<br)
  {
     score++;
     init();
  }
  else
  {
     lose++;    
  }
  return false;
}