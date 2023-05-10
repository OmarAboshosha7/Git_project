
// Array Of Words
const words = [
  // "Hello",
  // "Programming",
  // "Code",
  // "Javascript",
  // "Town",
  // "Country",
  // "Testing",
  // "Youtube",
  // "Linkedin",
  // "Twitter",
  // "Github",
  // "Leetcode",
  // "Internet",
  // "Python",
  // "Scala",
  // "Destructuring",
  // "Paradigm",
  // "Styling",
  // "Cascade",
  // "Documentation",
  // "Coding",
  // "Funny",
  // "Working",
  // "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  // "Rust",
  // "Playing"
];

// Setting Levels
const lvls = {
  "Easy":3,
  "Normal":7,
  "Hard": 5
};

// Default Level
let defaultLevelName = "Easy"; // Change Level From Here
let defaultLevelSeconds = lvls[defaultLevelName];





// Catch Selectors
let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");

// Setting Level Name + Seconds + Score
lvlNameSpan.innerHTML = defaultLevelName;
secondsSpan.innerHTML = defaultLevelSeconds;
timeLeftSpan.innerHTML = defaultLevelSeconds;
scoreTotal.innerHTML = words.length;

// disable paste event 
input.onpaste = function () {
  return false;
}

// Start game

startButton.onclick = function () {
  this.remove();
  input.focus();
  // generate word function
  genwords()
}

function genwords () {
  // get random words form array 
  let randomwords  = words[Math.floor(Math.random() * words.length)];
  // get word index
  let wordIndex = words.indexOf(randomwords);
  //  remove words form array
  words.splice(wordIndex , 1);
  // show the random word
  theWord.innerHTML = randomwords;
  // empty upcoming words
  upcomingWords.innerHTML = '';
  // generate words
  for (let  i = 0 ; i < words.length ; i++) {
    // creat div element 
     let div  = document.createElement("div");
     let text = document.createTextNode([words[i]]);
     div.appendChild(text);
     upcomingWords.appendChild(div);
  }
  // call start play  finction
  startplay()
}

function startplay () {
  timeLeftSpan.innerHTML = defaultLevelSeconds;
  let start = setInterval(() => {
    timeLeftSpan.innerHTML--;
    if (timeLeftSpan.innerHTML === "0") {
      // stop time
      clearInterval(start);
      // compare words
      if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
        // empty input field
        input.value = '';
        // increase score
        scoreGot.innerHTML++;
        if (words.length > 0) {
          // call generate words function
          genwords()
        }else {
          let span = document.createElement("span");
          span.className = 'good';
          let spantext = document.createTextNode("Coool");
          span.appendChild(spantext);
          finishMessage.appendChild(span);
          // remove upcoming words box
          upcomingWords.remove();
        }
      }else {
        let span = document.createElement("span");
        span.className = 'bad';
        let spantext = document.createTextNode("Game Over");
        span.appendChild(spantext);
        finishMessage.appendChild(span);
      }
    }
    enDplay();
  }, 1000);
};

function enDplay () {
  let time  = new Date();
  let getyear = time.getFullYear();
  let getmonth =  time.getMonth();
  let getDay  = time.getDate();
   let div  = document.createElement("div");
   let divText = document.createTextNode(`date is:${getyear}/${getmonth+1}/${getDay}`);
   div.appendChild(divText);
   if (timeLeftSpan.innerHTML  === "0") {
    scoreTotal.appendChild(div)
   }
}



