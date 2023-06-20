window.onscroll = function () {
  showScrollToTopButton();
};

function showScrollToTopButton() {
  var scrollToTopButton = document.getElementById("scrollToTopButton");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.classList.add("show");
  } else {
    scrollToTopButton.classList.remove("show");
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Função para calcular o score
function calcularScore() {
  const age = parseInt(document.getElementById('age').value);
  const headache = document.getElementById('headache').value;
  const stomachPain = document.getElementById('stomachPain').value;
  const earPain = document.getElementById('earPain').value;
  const backPain = document.getElementById('backPain').value;
  const musclePain = document.getElementById('musclePain').value;
  const anxiety = document.getElementById('anxiety').value;
  const physicalActivity = document.getElementById('physicalActivity').value;
  const weeklyFrequency = document.getElementById('weeklyFrequency').value;
  const familyCardiacIssues = document.getElementById('familyCardiacIssues').value;
  const familyCancer = document.getElementById('familyCancer').value;

  let score = 0;
  let multiplicadorIdade = 5;
  let multiplicadorSintomas = 5;
  let multiplicadorAtividade = 1;
  let multiplicadorParentes = 1;

  if (age < 10 || age > 60) {
    score += 10;
    multiplicadorIdade = 1.5;
  } else {
    score += 5;
  }

  if (headache === 'yes') {
    score += 10;
  } else {
    score += 5;
  }

  if (stomachPain === 'yes') {
    score += 10;
  } else {
    score += 5;
  }

  if (earPain === 'yes') {
    score += 10;
  } else {
    score += 5;
  }

  if (backPain === 'yes') {
    score += 10;
  } else {
    score += 5;
  }

  if (musclePain === 'yes') {
    score += 10;
  } else {
    score += 5;
  }

  if (anxiety === 'yes') {
    score += 10;
  } else {
    score += 5;
  }

  if (physicalActivity === 'yes') {
    multiplicadorAtividade = 1.5;
  }

  if (weeklyFrequency === '3-5' || weeklyFrequency === '6+') {
    multiplicadorAtividade *= 1.5;
  }

  if (familyCardiacIssues === 'yes') {
    multiplicadorParentes *= 1.5;
  }

  if (familyCancer === 'yes') {
    multiplicadorParentes *= 1.5;
  }

  score = score * multiplicadorIdade * multiplicadorSintomas * multiplicadorAtividade * multiplicadorParentes;

  const modal = document.getElementById('scoreModal');
  const scoreValue = document.getElementById('scoreValue');

  scoreValue.textContent = score;

  const bootstrapModal = new bootstrap.Modal(modal);
  bootstrapModal.show();
}

const calcularBtn = document.querySelector('.btn-success-w');
calcularBtn.addEventListener('click', calcularScore);
