// Sparkle effect on mouse move
const sparkles = [];
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.style.position = "fixed";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.zIndex = "0";
canvas.style.pointerEvents = "none";
document.body.appendChild(canvas);

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function createSparkle(x, y) {
  sparkles.push({
    x,
    y,
    size: Math.random() * 3 + 1,
    alpha: 1,
    dx: (Math.random() - 0.5) * 1.5,
    dy: (Math.random() - 0.5) * 1.5,
  });
}

document.addEventListener("mousemove", (e) => {
  for (let i = 0; i < 3; i++) {
    createSparkle(e.clientX, e.clientY);
  }
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = sparkles.length - 1; i >= 0; i--) {
    const s = sparkles[i];
    s.x += s.dx;
    s.y += s.dy;
    s.alpha -= 0.02;
    if (s.alpha <= 0) {
      sparkles.splice(i, 1);
      continue;
    }
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 255, 213, ${s.alpha})`;
    ctx.fill();
  }
  requestAnimationFrame(animate);
}
animate();
