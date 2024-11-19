let score = 0;

function updateScore(points) {
  score += points;
  document.getElementById("score").textContent = "Pontos: " + score;
}

function lookAround() {
  document.getElementById("story").textContent = "Você vê uma sala cheia de sombras, mas há um baú no canto.";
  document.getElementById("message").textContent = "Você olhou ao redor e percebeu algo estranho!";
  updateScore(5);
}

function openChest() {
  document.getElementById("story").textContent = "Você abriu o baú e encontrou uma joia brilhante!";
  document.getElementById("message").textContent = "Parabéns! Você encontrou uma joia e ganhou pontos!";
  updateScore(10);
}

function exitRoom() {
  if (score >= 15) {
    document.getElementById("story").textContent = "Você sai da sala vitorioso!";
    document.getElementById("message").textContent = "Parabéns! Você completou o jogo!";
    document.getElementById("actions").style.display = "none";
  } else {
    document.getElementById("message").textContent = "Você precisa de mais pontos para sair da sala!";
  }
}
