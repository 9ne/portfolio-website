// Stars animation
const n_stars = 150;
const colors = ["#176ab6", "#fb9b39"];
for (let i = 0; i < 98; i++) colors.push("#fff");

const canvas = document.querySelector("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
const c = canvas.getContext("2d");

canvas.style.background = "#000";

const randomInt = (max, min) => Math.floor(Math.random() * (max - min) + min);

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  stars = [];
  init();
});

class Star {
  constructor(x, y, radius, color) {
    this.x = x || randomInt(0, canvas.width);
    this.y = y || randomInt(0, canvas.height);
    this.radius = radius || Math.random() * 1.5;
    this.color = color || colors[randomInt(0, colors.length)];
    this.dy = -Math.random() * 0.5;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    c.shadowBlur = randomInt(3, 15);
    c.shadowColor = this.color;
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }

  update(arrayStars = []) {
    if (this.y - this.radius < 0) this.createNewStar(arrayStars);
    this.y += this.dy;
    this.draw();
  }

  createNewStar(arrayStars) {
    let i = arrayStars.indexOf(this);
    arrayStars.splice(i, 1);
    arrayStars.push(new Star(false, canvas.height + 5));
  }
}

let stars = [];

const init = () => {
  for (let i = 0; i < n_stars; i++) {
    stars.push(new Star());
  }
};

const animate = () => {
  c.clearRect(0, 0, canvas.width, canvas.height);

  const bg = c.createRadialGradient(
    canvas.width / 2,
    canvas.height / 2,
    canvas.height * 0.1,
    canvas.width / 2,
    canvas.height / 2,
    canvas.height * 2
  );

  bg.addColorStop(0, "#32465E");
  bg.addColorStop(0.4, "#000814");
  bg.addColorStop(0.8, "#000814");
  bg.addColorStop(1, "#000");
  c.fillStyle = bg;
  c.fillRect(0, 0, canvas.width, canvas.height);

  stars.forEach((star) => star.update(stars));
  requestAnimationFrame(animate);
};

init();
animate();

// Handlig form animation / about animation / projects animation
window.addEventListener("DOMContentLoaded", () => {
  const contactText = document.querySelector(".contact-me-text");
  const formContainer = document.querySelector(".container-contact-form-flex");

  if (!contactText || !formContainer) {
    console.error("Missing elements for the contact form or loading text");
    return;
  }

  let dotCount = 0;
  const maxDots = 3;

  const dotInterval = setInterval(() => {
    dotCount = (dotCount + 1) % (maxDots + 1);
    contactText.textContent = `Form loading${".".repeat(dotCount)}`;
  }, 1000);

  setTimeout(() => {
    contactText.classList.add("loading-text");
    clearInterval(dotInterval);
    setTimeout(() => {
      contactText.style.display = "none";
      formContainer.style.display = "block";
    }, 2500);
  }, 3000);

  if (!header || !cards) {
    console.error("header or card conatiner not found");
    return;
  }
});
