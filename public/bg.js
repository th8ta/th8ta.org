// TEMP
const particles = [];
const numberOfParticles = 400;
const noiseScale = 1.2e11;
const backgroundColor = `rgb(17, 10, 20)`;
const particleSize = 1.4;
const pickSpeed = () => random([0.2, 0.5, 0.5, 0.8, 1, 2]);
const bothDirections = true;

window.addEventListener("resize", setup);

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(backgroundColor);
  for (var i = 0; i < numberOfParticles; i++) {
    particles[i] = new Particle(random(width), random(height));
  }
  noiseDetail(8, 0.65);
  strokeCap(SQUARE);
  strokeWeight(particleSize);
  smooth();
}

function draw() {
  if (mouseIsPressed)
    particles[floor(random(particles.length - 1))] = new Particle(
      mouseX,
      mouseY,
      particles.length - 1
    );

  for (let i = 0; i < numberOfParticles; i++) {
    particles[i].move();
    particles[i].display();
  }

  if (frameCount % 10 === 0) {
    noStroke();
    fill(backgroundColor);
    rect(0, 0, 40, 40);
    fill(255);
  }
}

class Particle {
  constructor(x, y) {
    this.prevPos = createVector(x, y);
    this.pos = createVector(x, y);
    this.speed = pickSpeed();
    this.speed *= bothDirections && random() < 0.5 ? -1 : 1;
    this.changeColor();
  }

  move() {
    this.prevPos = this.pos.copy();
    const direction = curlNoise(
      this.pos.x / noiseScale,
      this.pos.y / noiseScale
    );
    this.pos.add(direction.mult(this.speed));

    if (
      this.pos.x > width ||
      this.pos.x < 0 ||
      this.pos.y > height ||
      this.pos.y < 0
    ) {
      this.pos.x = random(width);
      this.pos.y = random(height);
      this.prevPos = this.pos.copy();
      this.changeColor();
    }
  }

  display() {
    stroke(this.color);
    line(this.prevPos.x, this.prevPos.y, this.pos.x, this.pos.y);
  }

  changeColor() {
    let alpha =
      random() ** 0.8 * random(random(140, 160), random(160, random(160, 255)));
    alpha = map(alpha, 0, 255, 0, 200);
    const weightings = [
      {
        chance: 0.36,
        color: color(103, 197, 218, alpha),
      },
      {
        chance: 0.08,
        color: color(255, 255, 255, alpha),
      },
      {
        chance: 0.28,
        color: color(131, 113, 161, alpha),
      },
      {
        chance: 0.28,
        color: color(193, 56, 135, alpha),
      },
      {
        chance: 0.16,
        color: lerpColor(
          color(0, 241, 214, alpha),
          color(255, 0, 110, alpha),
          random()
        ),
      },
    ];
    const totalWeights = weightings.reduce((acc, val) => acc + val.chance, 0);
    let w = random(totalWeights);

    for (let o of weightings) {
      w -= o.chance;
      if (w < 0) {
        this.color = o.color;
        break;
      }
    }
  }
}

function curlNoise(x, y) {
  const eps = 0.0000001;
  let n1, n2, a, b;
  x = x / eps;
  y = y / eps;
  n1 = noise(x, y + eps);
  n2 = noise(x, y - eps);
  a = (n1 - n2) / (2 * eps);

  n1 = noise(x + eps, y);
  n2 = noise(x - eps, y);

  b = (n1 - n2) / (2 * eps);

  const curl = createVector(a, -b);
  curl.normalize();
  return curl;
}
