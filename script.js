const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let particlesArray = [];
const numberOfParticles = 200;
ctx.lineCap = 'round';

const mouse = {
  x: null,
  y: null
}
window.addEventListener('mousemove', function(e){
  mouse.x = e.x;
  mouse.y = e.y;
})

const pumpkin = new Image();
pumpkin.src = './images/pumpkin123.png'

class Particle {
  constructor(){
    this.radius = Math.random() * 200 + 20;
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + this.radius * 2;
    this.speedY = Math.random() * 5 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.angle = Math.random() * 360;
    this.spin = Math.random() < 0.5 ? 1 : -1;
    this.frameX = Math.floor(Math.random() * 3);
    this.frameY = Math.floor(Math.random() * 3);
    spriteSize = 900/3
  }
  update(){
    this.angle += 5;
    this.y -= this.speedY;
    this.x += this.speedX;
    if (this.radius > 1) this.radius -=0.5;
  }
  draw(){
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle, Math.PI/360 * this.spin);
    ctx.drawImage(pumpkin, this.frameX * this.spriteSize, this.frameY * this.spriteSize, this.spriteSize, this.spriteSize, 0 - this.radius/2, this.radius, this.radius);
    ctx.translate(-this.x, -this.x);
    ctx.restore();
  }
}

function init() {
  for(let i = 0; i < numberOfParticles; i++){
    particlesArray.push(new Particle);
  }
}
init();

function animate(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for(let i = 0; i < particlesArray; i++){
    particlesArray[i].update();
    particlesArray[i].draw();

  }

  requestAnimationFrame(animate);
}
animate();












