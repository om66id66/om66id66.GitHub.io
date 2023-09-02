/*window.onload = function() {
    alert(`To start the game, tap on icons \n\n 🗿, 📃 or ✂.`);
}


const choices = ['🗿', '📃', '✂'];
const results = [':deal:', 'like', 'dislike'];
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function playRound(playerChoise) {
    roundsPlayed++;

    const computerChoise = choise[Math.floor(math.random() * 3)];
    let resultIndex;

    if(playerChoise === computerChoise) {
        resultIndex = 0; //draw
    } else if( (playerChoise === '🗿' && computerChoise === '✂') || (playerChoise === '📃' && computerChoise === '🗿') || (playerChoise === '✂' && computerChoise === '📃')) {
        resultIndex = 1; //player wins
        playerScore++;
    } else {
        resultIndex = 2; //com wins
        computerScore++;
    }

    const bg = (roundsPlayed%2 === 0) ?
    'tab1' : 'tab2';

    const resultRow = `<tr class='${bg}'>`
}


window.onload = function() {
    alert(`To start the game, tap on icons \n\n🗿, 📃 or ✂.`);
}




    const choices = ['🗿', '📃', '✂'];
    const results = ['🤝', '👍', '👎'];
    let playerScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;

    function playRound(playerChoice) {
      roundsPlayed++;

      const computerChoice = choices[Math.floor(Math.random() * 3)];
      let resultIndex;

      if (playerChoice === computerChoice) {
        resultIndex = 0; // Draw
      } else if (
        (playerChoice === '🗿' && computerChoice === '✂') ||
        (playerChoice === '📃' && computerChoice === '🗿') ||
        (playerChoice === '✂' && computerChoice === '📃')
      ) {
        resultIndex = 1; // Player wins
        playerScore++;
      } else {
        resultIndex = 2; // Computer wins
        computerScore++;
      }

      const bg = (roundsPlayed%2 === 0) ? 'tab1' : 'tab2';

      const resultRow = `<tr class='${bg}'>
                           <td>${roundsPlayed}</td>
                           <td>${playerChoice}</td>
                           <td>${computerChoice}</td>
                           <td>${results[resultIndex]}</td>
                         </tr>`;
      document.querySelector('table').innerHTML += resultRow;

      if (roundsPlayed === 5) {
      
document.getElementById("pads").classList.add("gray-filter");      

document.getElementById("pads").style.opacity = "0.3";
      
document.getElementById("rock").removeAttribute("onclick");

document.getElementById("paper").removeAttribute("onclick");

document.getElementById("scissors").removeAttribute("onclick");
        document.getElementById('restartButton').disabled = false;

let result;

switch (true) {
    case playerScore > computerScore:
    result = 'You won! 🙂';
    break;  
    case playerScore === computerScore:
    result = "It's a draw! 😳";
    break; 
    default:
    result = 'You lost! 😕';
}



        document.getElementById('endScore').innerHTML = `You: ${playerScore} points<br>Rival: ${computerScore} points<br>${result}`;
      }
    }

    function restartGame() {
      roundsPlayed = 0;
      playerScore = 0;
      computerScore = 0;
      document.querySelector('table').innerHTML = `
        <tr class='tabh'>
          <th>Round</th>
          <th>You</th>
          <th>Rival</th>
          <th>Result</th>
        </tr>`;
      document.getElementById('resultText').innerHTML = '';
      document.getElementById('endScore').innerHTML = '';

document.getElementById("pads").classList.remove("gray-filter");

document.getElementById("pads").style.opacity = "1.0";
      
document.getElementById("rock").setAttribute("onclick", "playRound('🗿')");
      
document.getElementById("paper").setAttribute("onclick", "playRound('📃')");
      
document.getElementById("scissors").setAttribute("onclick", "playRound('✂')");
      document.getElementById('restartButton').disabled = true;
    }
  
*/