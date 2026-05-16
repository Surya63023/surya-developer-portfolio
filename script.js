/* =========================================================
   TYPING EFFECT
========================================================== */

const roles = [
  "Java Full Stack Developer",
  "Spring Boot & REST API Developer",
  "Backend Developer",
];

let i = 0,
  j = 0;

const el = document.getElementById("typed");

function type() {
  if (j < roles[i].length) {
    el.textContent += roles[i][j++];

    setTimeout(type, 70);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (j > 0) {
    el.textContent = roles[i].substring(0, --j);

    setTimeout(erase, 40);
  } else {
    i = (i + 1) % roles.length;

    setTimeout(type, 400);
  }
}

type();

/* =========================================================
   REVEAL ANIMATION
========================================================== */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

/* =========================================================
   MATRIX RAIN
========================================================== */

const canvas = document.getElementById("codeRain");

const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;

  canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

const chars = "01";

const fontSize = 38;

const columns = Math.floor(canvas.width / fontSize);

const drops = Array(columns).fill(0);

const fallSpeed = 0.1;

function drawCodeRain() {
  ctx.fillStyle = "rgba(5, 7, 15, 0.12)";

  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#7FFF00";

  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const char = chars[Math.floor(Math.random() * chars.length)];

    const x = i * fontSize;

    const y = drops[i] * fontSize;

    ctx.fillText(char, x, y);

    if (y > canvas.height && Math.random() > 0.99) {
      drops[i] = 0;
    }

    drops[i] += fallSpeed;
  }

  requestAnimationFrame(drawCodeRain);
}

drawCodeRain();

/* =========================================================
   CUSTOM CURSOR
========================================================== */

const cursor = document.querySelector(".cursor");

const cursorDot = document.querySelector(".cursor-dot");

window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";

  cursor.style.top = e.clientY + "px";

  cursorDot.style.left = e.clientX + "px";

  cursorDot.style.top = e.clientY + "px";
});

/* =========================================================
   PARTICLES
========================================================== */

const particles = document.getElementById("particles");

for (let i = 0; i < 60; i++) {
  const span = document.createElement("span");

  const size = Math.random() * 6 + 2;

  span.style.width = size + "px";

  span.style.height = size + "px";

  span.style.left = Math.random() * 100 + "%";

  span.style.bottom = "-20px";

  span.style.animationDuration = Math.random() * 10 + 8 + "s";

  span.style.animationDelay = Math.random() * 5 + "s";

  particles.appendChild(span);
}

/* =========================================================
   3D CARD EFFECT
========================================================== */

const cards = document.querySelectorAll(".glass-card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;

    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 18;

    const rotateY = (centerX - x) / 18;

    card.style.transform = `perspective(1000px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    translateY(-8px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = `perspective(1000px)
    rotateX(0deg)
    rotateY(0deg)
    translateY(0px)`;
  });
});

/* =========================================================
   NAVBAR EFFECT
========================================================== */

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "rgba(5,8,22,0.85)";
  } else {
    navbar.style.background = "rgba(5,8,22,0.45)";
  }
});

/* =========================================================
   EMAIL JS
========================================================== */

(function () {
  emailjs.init("8497qhfTVx4tYVdM9");
})();

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const params = {
    name: document.getElementById("name").value,

    email: document.getElementById("email").value,

    message: document.getElementById("message").value,
  };

  emailjs.send("service_dkeibij", "template_y24er3o", params).then(
    function () {
      alert("Message sent successfully!");

      form.reset();
    },

    function (error) {
      console.error(error);

      alert("Failed to send message. Please try again.");
    },
  );
});
