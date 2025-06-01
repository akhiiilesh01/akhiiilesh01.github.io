
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");
let width, height;
let particles = [];

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

for (let i = 0; i < 50; i++) {
  particles.push({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 3 + 1,
    speed: Math.random() * 1 + 0.5,
    angle: Math.random() * 2 * Math.PI
  });
}

function draw() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "rgba(147, 197, 253, 0.8)";
  particles.forEach(p => {
    p.x += Math.cos(p.angle) * p.speed;
    p.y += Math.sin(p.angle) * p.speed;
    if (p.x < 0 || p.x > width || p.y < 0 || p.y > height) {
      p.x = Math.random() * width;
      p.y = Math.random() * height;
    }
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(draw);
}
draw();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
    else entry.target.classList.remove('visible');
  });
}, { threshold: 0.2 });

document.querySelectorAll('.fadein').forEach(el => observer.observe(el));

const toggleSwitch = document.getElementById('theme-switch');

toggleSwitch.addEventListener('change', () => {
  document.body.classList.toggle('light');
});
 
