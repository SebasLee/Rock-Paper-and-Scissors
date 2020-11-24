document.querySelector('#Lapis').addEventListener('click', function () {
    var computer = Math.floor(Math.random() * 3);
    if (computer === 1) {
      document.querySelector('h2').innerHTML = "The computer wins! The player chose Rock and the computer chose Paper.";
  } else if (computer === 2) {
      document.querySelector('h2').innerHTML = "The player wins! The computer chose Scissors and the player chose Rock.";
  } else {
      document.querySelector('h2').innerHTML = "Tie.";
  }
  });
  
  document.querySelector('#Papyrus').addEventListener('click', function () {
    var computer = Math.floor(Math.random() * 3);
    if (computer === 0) {
      document.querySelector('h2').innerHTML = "The player wins! The computer chose Rock and the player chose Paper.";
  } else if (computer === 2) {
      document.querySelector('h2').innerHTML = "The computer wins! The player chose Paper and the computer chose Scissors.";
  } else {
      document.querySelector('h2').innerHTML = "Tie.";
  }
  });
  
  document.querySelector('#Scalpellus').addEventListener('click', function () {
    var computer = Math.floor(Math.random() * 3);
    if (computer === 0) {
      document.querySelector('h2').innerHTML = "The computer wins! The player chose Scissor and the computer chose Rock.";
  } else if (computer === 1) {
      document.querySelector('h2').innerHTML = "The player wins! The computer chose Paper and the player chose Scissors.";
  } else {
      document.querySelector('h2').innerHTML = "Tie.";
  }
  });