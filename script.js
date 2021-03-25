// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const numRounds = 9;
const maxStrikes = 3;
//Global Variables
var pattern;
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime; //how long to hold each clue's light/sound
var strikes;

function generatePattern(){
  pattern = [];
  for(let i=numRounds; i > 0; i--){
    pattern.push(Math.floor((Math.random()*6)+1));
  }
  console.log("pattern:" + pattern)
}
function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    generatePattern();
    clueHoldTime = 1000;
    strikes = 0;
    document.getElementById("level").innerHTML = progress;
    document.getElementById("strikes").innerHTML = strikes;
    playClueSequence();
}

function stopGame(){
    //initialize game variables
    gamePlaying = false;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
    clueHoldTime = clueHoldTime-10;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost. :(");
}

function winGame(){
  stopGame();
  alert("Game Over. You Won! :)");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(btn != pattern[guessCounter]){
    //each wrong guess add strike and print
    strikes++;
    document.getElementById("strikes").innerHTML = strikes;
    //if max strikes reached lose game
    if(strikes == maxStrikes){
      loseGame();
    } else { //if max strikes not reached yet play sequence again
      playClueSequence();
    }
  } else {
    //guess is right
    if(guessCounter == progress){
      if(progress == pattern.length -1){
        //all rounds played & guesses correct
        winGame();
      } else {
        //move onto next round
        progress++;
        document.getElementById("level").innerHTML = progress;
        playClueSequence();
      }
    } else {
      //move onto next guess
      guessCounter++;
    }
  }
  // add game logic here
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 222.1,
  6: 156.2
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}

function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
