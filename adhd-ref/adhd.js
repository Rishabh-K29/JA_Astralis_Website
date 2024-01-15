
    const containerList = document.getElementsByClassName('text-container');
    const container = containerList[0];
    console.log(container)
    const schizoTextDivs = container.querySelectorAll('.schizo-text');
    activateTimmy();

function onDOMContentLoaded() {
    return new Promise((resolve) => {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', resolve);
      } else {
        resolve();
      }
    });
  }

function applyRandomStyles(element) {
    // list of styles: font, color, size range
    const fonts = ['Arial', 'Helvetica', 'Verdana', 'Times New Roman', 'Courier New', 'Impact', 'Geneva', 'Franklin Gothic Medium', 'Cursive'];
    const minSize = 10;
    const maxSize = 36;

    // random output the styles
    const randomSize = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    //container
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    console.log(containerWidth + " " + containerHeight)
    const randomLeft = Math.abs(Math.floor(Math.random() * containerWidth) - 200);
    const randomTop = Math.abs(Math.floor(Math.random() * containerHeight) - 200);
    // åpply the styles to the p tag inside
    const paragraph = element.querySelector('p');
    if(paragraph) {
        paragraph.style.fontFamily = randomFont;
        paragraph.style.color = randomColor;
        paragraph.style.fontSize = randomSize + 'px';
    }
    element.style.left = randomLeft + 'px';
    element.style.top = randomTop + 'px';
    // Apply random absolute positioning as a percentage to the element
    //element.style.position = 'absolute';
    //element.style.left = Math.random() * 100 + '%';
    //element.style.top = Math.random() * 100 + '%';

}
function getRandomInterval(min, max) {
    return Math.random() * (max - min) + min;
}

function toggleParagraphs() {
    const paragraphs = container.querySelectorAll('p');
    for (let i = 0; i < paragraphs.length; i++) {
        startADHDVisibility(paragraphs[i]);
    }
}

async function startADHDVisibility(element) {
    if(Math.random() > 0.5) {
        const disappearInterval = getRandomInterval(1000, 1500); // Disappear intervals
        toggleVisibility(element, false);
        await new Promise(resolve => setTimeout(resolve, disappearInterval));
    }
        
    while(true) {
        const disappearInterval = getRandomInterval(1000, 1500); // Disappear intervals
        const appearInterval = getRandomInterval(2500, 4000); // Appear intervals
        toggleVisibility(element, true); // Appear
        await new Promise(resolve => setTimeout(resolve, appearInterval));
        toggleVisibility(element, false);
        await new Promise(resolve => setTimeout(resolve, disappearInterval));
    }
}

async function toggleVisibility(element, isVisible) {
    element.style.visibility = isVisible ? 'visible' : 'hidden';
}
//
//function toggleParagraphs() {
//    const paragraphs = container.querySelectorAll('p');
//    for (let i = 0; i < paragraphs.length; i++) {
//        const paragraph = paragraphs[i];
//        const disappearInterval = getRandomInterval(1000, 1500); // Disappear intervals
//        const appearInterval = getRandomInterval(2500, 4000); // Appear intervals
//        toggleVisibility(paragraph, isVisible); // Appear
//        await new Promise(resolve => setTimeout(resolve, interval));
//        toggleVisibility(paragraph, false); // Disappear
//        await new Promise(resolve => setTimeout(resolve, disappearInterval));
//    }
//  }


function activateTimmy() {
    //console.log('yo')
    for (let i = 0; i < schizoTextDivs.length; i++) {
        const div = schizoTextDivs[i];
        applyRandomStyles(div);
      }
    toggleParagraphs();
}
