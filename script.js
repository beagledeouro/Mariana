const questions = [
  {
    text: 'Sexta à noite chegou. Qual é a sua cena perfeita?',
    answers: [
      { letter: 'A', text: 'Maratona de série até meu cérebro pedir férias.', profile: 'A' },
      { letter: 'B', text: 'Rolê com a galera. Se ninguém postar, nem aconteceu.', profile: 'B' },
      { letter: 'C', text: 'Um plano bem montado, com hora para chegar e voltar.', profile: 'C' },
      { letter: 'D', text: 'Qualquer convite inesperado. Eu decido na hora!', profile: 'D' }
    ]
  },
  {
    text: 'Você acordou depois de dormir super pouco. O que faz?',
    answers: [
      { letter: 'A', text: 'Vou no automático e prometo que hoje durmo cedo.', profile: 'A' },
      { letter: 'B', text: 'Mando mensagem avisando que estou um caco e desacelero.', profile: 'E' },
      { letter: 'C', text: 'Café, música alta e bora fingir que está tudo ótimo.', profile: 'D' },
      { letter: 'D', text: 'Tento reorganizar o dia para descansar assim que puder.', profile: 'C' }
    ]
  },
  {
    text: 'Tiraram uma foto sua desprevenido(a). Qual é a reação?',
    answers: [
      { letter: 'A', text: 'Dou risada. Foto real oficial também é patrimônio.', profile: 'E' },
      { letter: 'B', text: 'Peço para não postarem sem falar comigo antes.', profile: 'C' },
      { letter: 'C', text: 'Abro a câmera e tiro uma melhor para compensar.', profile: 'F' },
      { letter: 'D', text: 'Finjo que não liguei, mas fico pensando nisso depois.', profile: 'A' }
    ]
  },
  {
    text: 'Seu amigo aparece com uma ideia meio maluca. Você...',
    answers: [
      { letter: 'A', text: 'Pergunto se é seguro e penso nas consequências.', profile: 'C' },
      { letter: 'B', text: 'Topo na hora. A vida é curta demais para dizer não.', profile: 'D' },
      { letter: 'C', text: 'Só entro se todo mundo estiver realmente confortável.', profile: 'E' },
      { letter: 'D', text: 'Sugiro uma versão menos caótica, mas ainda divertida.', profile: 'F' }
    ]
  },
  {
    text: 'Quando você entra num grupo novo, o que rola?',
    answers: [
      { letter: 'A', text: 'Faço uma piada e já tento quebrar o gelo.', profile: 'B' },
      { letter: 'B', text: 'Observo primeiro até entender a energia da turma.', profile: 'C' },
      { letter: 'C', text: 'Mudo um pouco meu jeito para combinar com a galera.', profile: 'A' },
      { letter: 'D', text: 'Fico de boa sendo eu, mesmo que seja diferente.', profile: 'E' }
    ]
  },
  {
    text: 'Você posta algo e quase ninguém curte. E agora?',
    answers: [
      { letter: 'A', text: 'Apago em cinco minutos. Claramente foi um flop.', profile: 'A' },
      { letter: 'B', text: 'Deixo lá: curtida não mede se eu gostei.', profile: 'E' },
      { letter: 'C', text: 'Analiso horário, legenda e penso em outro post.', profile: 'F' },
      { letter: 'D', text: 'Mando no grupo dos amigos para garantir audiência.', profile: 'B' }
    ]
  },
  {
    text: 'Na hora de escolher um look, qual pensamento ganha?',
    answers: [
      { letter: 'A', text: 'Conforto primeiro. Quero curtir sem ficar me ajeitando.', profile: 'E' },
      { letter: 'B', text: 'O que está bombando? Quero chegar entregando tudo.', profile: 'F' },
      { letter: 'C', text: 'O que combina comigo e com o lugar?', profile: 'C' },
      { letter: 'D', text: 'Escolho a primeira coisa que parece legal.', profile: 'D' }
    ]
  },
  {
    text: 'Uma discussão começa no grupo. O que você faz?',
    answers: [
      { letter: 'A', text: 'Respondo na hora e só depois penso no tom.', profile: 'D' },
      { letter: 'B', text: 'Leio tudo, respiro e tento juntar os lados.', profile: 'C' },
      { letter: 'C', text: 'Faço uma piada para aliviar o clima.', profile: 'B' },
      { letter: 'D', text: 'Saio do celular por um tempo para não entrar na pilha.', profile: 'E' }
    ]
  },
  {
    text: 'Quando alguém dá um conselho que você não pediu...',
    answers: [
      { letter: 'A', text: 'Agradeço, mas continuo fazendo do meu jeito.', profile: 'F' },
      { letter: 'B', text: 'Fico pensando: será que a pessoa tem razão?', profile: 'A' },
      { letter: 'C', text: 'Pergunto mais antes de decidir se faz sentido.', profile: 'C' },
      { letter: 'D', text: 'Defendo minha ideia até o último argumento.', profile: 'D' }
    ]
  }
];

const profiles = {
  A: {
    title: 'O ZUMBI DAS TELAS',
    description: 'Você sabe transformar uma noite comum em uma experiência cinematográfica. Seu lembrete carinhoso: descanso de verdade também recarrega sua criatividade, então vale trocar a tela pelo travesseiro de vez em quando.'
  },
  B: {
    title: 'O REI / A RAINHA DA GALERA',
    description: 'Você tem presença, carisma e provavelmente conhece alguém em qualquer lugar. Continue brilhando, mas lembre que aprovação é bônus: seu valor não depende do tamanho da sua plateia.'
  },
  C: {
    title: 'O ESTRATEGISTA DO ROLÊ',
    description: 'Você pensa antes de agir e sabe cuidar da própria energia. Seu superpoder é equilibrar diversão e responsabilidade, sem deixar a pressão dos outros escolher por você.'
  },
  D: {
    title: 'A FAÍSCA IMPULSIVA',
    description: 'Você traz movimento para qualquer rolê e não deixa a vida passar em branco. Sua missão é dar dois segundos para o cérebro votar antes de embarcar: coragem fica ainda melhor com um pouco de cuidado.'
  },
  E: {
    title: 'A BÚSSOLA DO AUTOCUIDADO',
    description: 'Você percebe seus limites e tem um jeito autêntico de seguir seu caminho. Continue se tratando com a mesma gentileza que oferece aos amigos, especialmente nos dias em que a autoestima oscila.'
  },
  F: {
    title: 'O RADAR DAS TENDÊNCIAS',
    description: 'Você capta referências, estilos e mudanças no ar antes de todo mundo. Use essa antena para se inspirar, não para se comparar: tendência passa, sua personalidade fica.'
  }
};

const state = {
  userName: '',
  userAge: '',
  currentQuestion: 0,
  answers: []
};

const screens = {
  intro: document.querySelector('#intro-screen'),
  quiz: document.querySelector('#quiz-screen'),
  loading: document.querySelector('#loading-screen'),
  result: document.querySelector('#result-screen')
};

const startForm = document.querySelector('#start-form');
const questionTitle = document.querySelector('#question-title');
const questionCategory = document.querySelector('#question-category');
const answersContainer = document.querySelector('#answers');
const progressLabel = document.querySelector('#progress-label');
const progressBar = document.querySelector('#progress-bar');

function showScreen(screenName) {
  Object.values(screens).forEach((screen) => screen.classList.add('hidden'));
  screens[screenName].classList.remove('hidden');
}

function renderQuestion() {
  const question = questions[state.currentQuestion];
  const questionNumber = String(state.currentQuestion + 1).padStart(2, '0');
  const progress = ((state.currentQuestion + 1) / questions.length) * 100;

  questionCategory.textContent = `PERGUNTA ${questionNumber}`;
  progressLabel.textContent = `${questionNumber} / ${String(questions.length).padStart(2, '0')}`;
  progressBar.style.width = `${progress}%`;
  questionTitle.textContent = question.text;
  answersContainer.innerHTML = '';

  question.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.className = 'answer-button';
    button.type = 'button';
    button.innerHTML = `<span class="answer-letter">${answer.letter}</span><span>${answer.text}</span>`;
    button.addEventListener('click', () => selectAnswer(answer.profile));
    answersContainer.appendChild(button);
  });
}

function selectAnswer(profile) {
  state.answers.push(profile);
  state.currentQuestion += 1;

  if (state.currentQuestion < questions.length) {
    showScreen('loading');
    window.setTimeout(() => {
      renderQuestion();
      showScreen('quiz');
    }, 1100);
  } else {
    showScreen('loading');
    window.setTimeout(showResult, 1500);
  }
}

function calculateProfile() {
  const scores = state.answers.reduce((total, profile) => {
    total[profile] += 1;
    return total;
  }, { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 });

  return Object.keys(scores).reduce((winner, profile) => {
    return scores[profile] > scores[winner] ? profile : winner;
  }, 'A');
}

function showResult() {
  const winningProfile = calculateProfile();
  const result = profiles[winningProfile];

  document.querySelector('#result-name').textContent = state.userName;
  document.querySelector('#result-title').textContent = result.title;
  document.querySelector('#result-description').textContent = result.description;
  document.querySelector('#result-profile').textContent = winningProfile;
  document.querySelector('#result-user-age').textContent = state.userAge;
  showScreen('result');
}

function csvEscape(value) {
  return `"${String(value).replaceAll('"', '""')}"`;
}

function downloadResultCsv() {
  const winningProfile = calculateProfile();
  const result = profiles[winningProfile];
  const rows = [
    ['nome', 'idade', 'perfil', 'titulo', 'respostas'],
    [state.userName, state.userAge, winningProfile, result.title, state.answers.join(' - ')]
  ];
  const csvContent = '\ufeff' + rows.map((row) => row.map(csvEscape).join(';')).join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `resultado-quiz-buzzfeed-${state.userName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

function resetQuiz() {
  state.userName = '';
  state.userAge = '';
  state.currentQuestion = 0;
  state.answers = [];
  startForm.reset();
  showScreen('intro');
}

startForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(startForm);
  state.userName = formData.get('name').trim();
  state.userAge = formData.get('age');
  state.currentQuestion = 0;
  state.answers = [];
  renderQuestion();
  showScreen('quiz');
});

document.querySelector('#download-csv').addEventListener('click', downloadResultCsv);
document.querySelector('#restart-quiz').addEventListener('click', resetQuiz);
