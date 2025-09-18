// animación de corazones
function spawnHeart() {
  const container = document.getElementById("floating");
  if (!container) return;

  const el = document.createElement("div");
  el.className = "heart-bubble";
  el.textContent = ["💖", "💗", "💕", "❤", "💘", "❣️"][
    Math.floor(Math.random() * 6)
  ];

  const size = 20 + Math.random() * 34;
  el.style.fontSize = size + "px";
  el.style.left = Math.random() * 100 + "%";
  el.style.top = "100%";

  const duration = 8 + Math.random() * 8; // entre 8s y 16s
  el.style.animationDuration = duration + "s";

  container.appendChild(el);

  // Cuando termine su animación, se borra y se crea otro
  el.addEventListener("animationend", () => {
    el.remove();
    spawnHeart(); // genera el siguiente
  });
}

// iniciar con varios corazones al comienzo
for (let i = 0; i < 35; i++) {
  spawnHeart();
}

// función para index.html
function startTyping(messages) {
  let typedEl = document.getElementById("typed");
  let msgIdx = 0,
    charIdx = 0;
  function typeNext() {
    if (msgIdx >= messages.length) return;
    let text = messages[msgIdx];
    typedEl.innerHTML =
      text.slice(0, charIdx) +
      (charIdx % 2 === 0 ? '<span style="opacity:0.6">|</span>' : "");
    if (charIdx < text.length) {
      charIdx++;
      setTimeout(typeNext, 40 + Math.random() * 30);
    } else {
      msgIdx++; 
      charIdx = 0;
      setTimeout(typeNext, 3000);
    }
  }
  typeNext();
}

function surprise() {
  const typedEl = document.getElementById("typed");
  typedEl.innerHTML = "¿Quieres salir conmigo este sabado? — ¿aceptarias mi wawa?";
  document.getElementById("controls").innerHTML = `
    <button class="primary" onclick="yes()">Sí 💕</button>
    <button onclick="nope()">No 😢</button>
  `;
}
function yes() {
  window.location.href = "plan.html";
}
function nope() {
  document.getElementById("typed").innerHTML = "Oh... me dejas triste 😔";
  document.getElementById("sad").style.display = "block";
  document.getElementById("controls").innerHTML = "";
}

// función para plan.html
function enableCards() {
  const cards = document.querySelectorAll(".card");
  let revealed = 0;
  cards.forEach((c) => {
    c.addEventListener("click", () => {
      if (!c.classList.contains("revealed")) {
        c.classList.add("revealed");
        revealed++;
        if(revealed===cards.length){
          document.getElementById('final').innerHTML = `
            <p>¿Qué dices? ¿te parece un buen plan? 💖</p>
            <button onclick='alert("Sabía que dirías que sí 💕")'>Sí 😍</button>
            <button onclick="window.location.href='video.html'">Sorpresa doble 🎁</button>
          `;
        }
      }
    });
  });
}
