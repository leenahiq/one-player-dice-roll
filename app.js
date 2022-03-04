const player0El = document.querySelector('.player--0');
const score0El = document.querySelector('#score--0');
const current0El = document.getElementById('current--0');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const winner  = document.getElementById("winner");

// Starting conditions
const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
  
    score0El.textContent = 0;
    
    current0El.textContent = 0;
    
  
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
   
    player0El.classList.add('player--active');
    
  
  };
  init();

  btnRoll.addEventListener('click', function () {
    if (playing) {
      // 1. Generating a random dice roll
      const dice = Math.trunc(Math.random() * 6) + 1;
  
      // 2. Display dice
      diceEl.classList.remove('hidden');
      diceEl.src = `./img/dice-${dice}.png`;
  
      // 3. Check for rolled 1

     
      
    
    
       if(currentScore >= 20){ 
        document.getElementById(
            `current--${activePlayer}`
          ).textContent = `YOU WON  `;
         currentScore = 0; 
      
       
      } 
      else if(dice == 1){ 
        document.getElementById(
            `current--${activePlayer}`
          ).textContent = "YOU LOOSE";
         currentScore = 0; 
        }
     else if (currentScore !== 1) {
         // Add dice to current score
         currentScore += dice;
         document.getElementById(
           `current--${activePlayer}`
         ).textContent = currentScore;
     }   

      
     
      
    }
});
btnNew.addEventListener('click', init);

