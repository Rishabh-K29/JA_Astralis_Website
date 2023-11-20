const arr = [1, 2,3,4, 5, 6]
 
const questions = [
    { 
        id: '1',
        questionText: 'Who is Aidan Ma interested in sdfjsdakfdsflkdshfkjdsajofisdguhjfbkndsifguydshjfkdfugyfsdhjbk',
        answerText: 'Dr Ray'
    },
    { 
        id: '2',
        questionText: 'Where did Rishabh go?',
        answerText: 'Malaysia'
    },
    { 
        id: '3',
        questionText: 'Where is India?',
        answerText: 'Asia'
    },
    { 
        id: '4',
        questionText: 'Where do you eat curry',
        answerText: 'India'
    },
]


window.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.video');
    console.log(videos);

    videos.forEach((video, index) => {
      video.addEventListener('ended', () => {
        console.log('yo');
        //const question = questions[index].question;
        const question = questions.find((q) => q.id == video.id);
        displayPopup(question);

        //const answer = prompt(question.questionText); // if i do like answer = thisFunc(question) and thisFunc is waiting for a response, does the code pause until it returns

      });
    });
  });

  const popupContainer = document.getElementById('popup-container');
  const questionElement = document.getElementById('question');
  const answerInput = document.getElementById('answer-input');
  const submitButton = document.getElementById('submit-btn');
  const closeButton = document.getElementById('close-btn');
  let currentQID = 0;
  
  function displayPopup(question) { // displays popup with that question
    currentQID = parseInt(question.id);
    questionElement.textContent = question.questionText;
    popupContainer.style.display = 'flex'; // show the popup
    popupContainer.style.flexDirection = 'column';
  }
  
  function closePopup() {
    popupContainer.style.display = 'none'; // hide the popup
  }

  submitButton.addEventListener('click', () => {
    const answer = answerInput.value;
    processAnswer(currentQID, answer);
  });
  
  closeButton.addEventListener('click', () => {
    closePopup();
  });

  function processAnswer(questionId, answer) {
    question = questions[questionId - 1];
    if(answer && (answer.toLowerCase() == question.answerText.toLowerCase())) {
        answerCorrect(question);
    } else {
        answerIncorrect();
    }
  }


  function answerCorrect(question) { // @ RISHABH put what u want with answer correct here, if its different per question then switch case it
    console.log('answer correct')
  }

  function answerIncorrect(question) { // @ RISHABH put what u want with answer wrong here
    console.log('answer correct');
  }