var listItems = document.querySelectorAll(".header__list-item");

listItems.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    listItems.forEach(function (item) {
      item.querySelector("a").classList.remove("header__navigation-link--pressed");
    });
    item.querySelector("a").classList.add("header__navigation-link--pressed");
  });
});

function showMenu() {
    const menu = document.querySelector('.main__menu-navigation');
    const button = document.getElementById('menu-toggle');
    
    menu.style.display = (menu.style.display === 'none') ? 'block' : 'none';
    button.classList.toggle('show-cross');
}

function handleItemClick(item) {
  const sublist = item.nextElementSibling;

  sublist.classList.toggle('show-sublist');
}

function selectFirstTest(item) {
  item.classList.toggle('selected');

  const text = item.textContent.trim();
  const answerText = document.querySelector('.main__answer-text');

  if (item.classList.contains('selected')) {
    answerText.textContent += `${text}, `;
  } else {
    const newText = answerText.textContent.replace(`${text}, `, '');
    answerText.textContent = newText;
  }
}

function selectSecondTest(item) {
  item.classList.toggle('selected');

  const text = item.textContent.trim();
  const answerText = document.querySelector('.main__answer-second--text');

  if (item.classList.contains('selected')) {
    answerText.textContent += `${text}, `;
  } else {
    const newText = answerText.textContent.replace(`${text}, `, '');
    answerText.textContent = newText;
  }
}


const dropdown = document.querySelector('.main__dropdown');
const selectedOption = dropdown.querySelector('.dropdow__selected-option');
const options = dropdown.querySelector('.dropdow__options');

selectedOption.addEventListener('click', function () {
  options.style.display = options.style.display === 'block' ? 'none' : 'block';
});

options.addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    selectedOption.textContent = e.target.textContent;
    options.style.display = 'none';

    const selectedValue = e.target.getAttribute('data-value');
    console.log(`Selected Value: ${selectedValue}`);
  }
});

selectedOption.textContent = options.querySelector('li').textContent;

document.addEventListener('click', function (e) {
  if (e.target !== selectedOption && e.target !== options) {
    options.style.display = 'none';
  }
});


function showNextQuestion(currentQuestionId, nextQuestionId) {
  const currentQuestion = document.getElementById(currentQuestionId);
  const nextQuestion = document.getElementById(nextQuestionId);
  const firstDiv = document.querySelector('.main__answer-container div:nth-child(1)');
  const secondDiv = document.querySelector('.main__answer-container div:nth-child(2)');
  const thirdDiv = document.querySelector('.main__answer-container div:nth-child(3)');

  if (currentQuestion && nextQuestion) {
    if(nextQuestion.id == 'question2') {
      secondDiv.style.display = 'block';
      secondDiv.style.borderRadius = "0 8px 32px 0";
      firstDiv.style.borderRadius = "0 32px 8px 0";
      firstDiv.style.backgroundColor = "#9E00FF";
    }
    if(nextQuestion.id == 'question3') {
      thirdDiv.style.display = 'block';
      thirdDiv.style.borderRadius = "0 8px 32px 0";
      secondDiv.style.borderRadius = "0 8px 8px 0";
      secondDiv.style.backgroundColor = "#9E00FF";
    }
    currentQuestion.style.display = 'none';
    nextQuestion.style.display = 'block';
  }
}

function showPreviousQuestion(currentQuestionId, previousQuestionId) {
  const currentQuestion = document.getElementById(currentQuestionId);
  const previousQuestion = document.getElementById(previousQuestionId);

  const firstDiv = document.querySelector('.main__answer-container div:nth-child(1)');
  const secondDiv = document.querySelector('.main__answer-container div:nth-child(2)');
  const thirdDiv = document.querySelector('.main__answer-container div:nth-child(3)');

  if (currentQuestion && previousQuestion) {
    if(currentQuestion.id == 'question2') {
      secondDiv.style.borderRadius = "0 8px 32px 0";
      secondDiv.style.display = 'none';
      firstDiv.style.borderRadius = "0 32px 32px 0";
      firstDiv.style.backgroundColor = "black";
    }
    if(currentQuestion.id == 'question3') {
      thirdDiv.style.display = 'none';
      thirdDiv.style.borderRadius = "0 8px 32px 0";
      secondDiv.style.borderRadius = "0 8px 32px 0";
      secondDiv.style.backgroundColor = "black";
    }
    currentQuestion.style.display = 'none';
    previousQuestion.style.display = 'block';
  }
}
