const arr = [1,2,3,4,5,6,7,8,9,10,11,12]
 
const questions = [
    { 
        id: '1',
        questionText: 'Type the unscrambled sentence below. (Keep in mind capital letters and proper punctuation)',
        answerText: 'The dog playfully chased the ball.'
    },
    { 
        id: '2',
        questionText: 'Type the unscrambled sentence below. (Keep in mind capital letters and proper punctuation)',
        answerText: 'The flowers bloomed beautifully in the garden.'
    },
    { 
        id: '3',
        questionText: 'Type the unscrambled sentence below. (Keep in mind capital letters and proper punctuation)',
        answerText: 'The sun is shining brightly in the clear blue sky.'
    },
    { 
        id: '4',
        questionText: 'Rewrite the sentence displayed in red. (Keep in mind capital letters and proper punctuation)',
        answerText: 'Childhood memories bring immense joy.'
  },
  { 
        id: '5',
        questionText: 'Rewrite the sentence displayed in red. (Keep in mind capital letters and proper punctuation)',
        answerText: 'The flowers bloomed beautifully in the garden.'
  },
  { 
        id: '6',
        questionText: 'Rewrite the sentence displayed in cursive font. (Keep in mind capital letters and proper punctuation)',
        answerText: 'Last weekend, we had a wonderful time at the park, enjoying picnics and playing games.'
  },
]


window.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.question-video');
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
    closePopup()
    answerInput.value = null
  })
  
  closeButton.addEventListener('click', () => {
    closePopup();
    answerInput.value = null
  });

  function processAnswer(questionId, answer) {
    question = questions[questionId - 1];
    if(answer && (answer.toLowerCase() == question.answerText.toLowerCase())) {
        answerCorrect(question);
    } else {
        answerIncorrect();
    }
  }


  function answerCorrect(question) {
    var defaults = {
      spread: 360,
      ticks: 100,
      gravity: 0.4,
      decay: 0.94,
      startVelocity: 20,
      colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
      };
    function shoot() {
      confetti({
        ...defaults,
        particleCount: 80,
        scalar: 1.2,
        shapes: ['star']
        });
      confetti({
        ...defaults,
        particleCount: 20,
        scalar: 0.75,
        shapes: ['circle']
        });
        }
        setTimeout(shoot, 0);
        setTimeout(shoot, 100);
        setTimeout(shoot, 200);
        setTimeout(shoot, 300);
        };



  function answerIncorrect(question) {
  }