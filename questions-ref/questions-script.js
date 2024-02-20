const arr = [1,2,3,4,5,6,7,8,9,10,11,12]
 
const questions = [
    { 
        id: '1',
        questionText: 'Rewrite the unscrambled sentence below. (Keep in mind capital letters and proper punctuation)',
        answerText: 'The dog playfully chased the ball.'
    },
    { 
      id: '2',
      questionText: 'Rewrite the unscrambled sentence below. (Keep in mind capital letters and proper punctuation)',
      answerText: 'The flowers bloomed beautifully in the garden.'
    },
    { 
        id: '3',
        questionText: 'Rewrite the unscrambled sentence below. (Keep in mind capital letters and proper punctuation)',
        answerText: 'The sun is shining brightly in the clear blue sky.'
    },
    { 
      id: '4',
      questionText: 'Rewrite the unscrambled sentence below. (Keep in mind capital letters and proper punctuation)',
      answerText: "Hong Kong's vibant street lights lit up the entire city at night."
    },
    { 
        id: '5',
        questionText: 'Rewrite the unscrambled sentence below. (Keep in mind capital letters and proper punctuation)',
        answerText: "Look out the window! It's raining heavily outside, with thunder rumbling in the distance."
    },
    { 
      id: '6',
      questionText: 'Rewrite the unscrambled sentence below. (Keep in mind capital letters and proper punctuation)',
      answerText: 'Last weekend, we had a wonderful time at the park, enjoying picnics and playing games.'
    },
    { 
        id: '7',
        questionText: 'Rewrite the sentence displayed in lime green. (Keep in mind capital letters and proper punctuation)',
        answerText: 'The flowers bloomed beautifully in the garden.'
    },
    { 
        id: '8',
        questionText: 'Rewrite the sentence written in the smallest font. (Keep in mind capital letters and proper punctuation)',
        answerText: 'Childhood memories bring immense joy.'
    },
    { 
        id: '9',
        questionText: 'Rewrite the sentence displayed in bold. (Keep in mind capital letters and proper punctuation)',
        answerText: 'After school, he eagerly heads to the football field every afternoon to practice and play with his teammates.'
    },
    { 
        id: '10',
        questionText: 'Rewrite the sentence displayed in pink. (Keep in mind capital letters and proper punctuation)',
        answerText: 'The sun is shining brightly in the clear blue sky.'
    },
    { 
        id: '11',
        questionText: 'Rewrite the sentence displayed furthest on the right. (Keep in mind capital letters and proper punctuation)',
        answerText: 'The contented purring of the cat can be heard as it peacefully sleeps on the warm cushion.'
    },
    { 
        id: '12',
        questionText: 'Rewrite the sentence displayed in the color most similar to the background. (Keep in mind capital letters and proper punctuation)',
        answerText: "With every brushstroke, the artist's masterpiece comes to life, each stroke meticulously placed to convey emotion, evoke a sense of awe, and transport the observer to a world of imagination."
    },
]


window.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.question-video');
    console.log(videos);

    videos.forEach((video, index) => {
      video.addEventListener('ended', () => {
        console.log('working');
        //const question = questions[index].question;
        const question = questions.find((q) => q.id == video.id);
        displayPopup(question);

        //const answer = prompt(question.questionText); // if i do like answer = thisFunc(question) and thisFunc is waiting for a response, does the code pause until it returns

      });
    });
  });

  const popupContainer = document.getElementById('popup-container');
  const horizontalPopupContainer = document.getElementById('horizontal-popup-container')
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
    var scalar = 20;
    var cross = confetti.shapeFromText({ text: '❌', scalar });
    
    var defaults = {
      spread: 100, //spread 0, start velo 5, particle count 1
      ticks: 100, //spread 100, start velo 25, particle count 5
      gravity: 0.8,
      decay: 0.94,
      startVelocity: 25,
      shapes: [cross],
      scalar
    };
    
    function shoot() {

    
      confetti({
        ...defaults,
        particleCount: 5,
        flat: true
      });
    }
    
    setTimeout(shoot, 0);
  }