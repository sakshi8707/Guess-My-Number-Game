'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = '22';

// console.log(document.querySelector('.number').textContent = '22'
// );

// document.querySelector('.score').textContent = '13';

// document.querySelector('.guess').value = '10';

// **Event listener**

const SecretNo = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = SecretNo;
let score = 20;
let highScore = 0;
const displayMessg = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guesss = Number(document.querySelector('.guess').value);
  console.log(guesss, typeof guesss);

  if (!guesss) {
    // document.querySelector('.message').textContent = '⛔ NO Number!';
    displayMessg('⛔ NO Number!');
  } else if (guesss === SecretNo) {
    // document.querySelector('.message').textContent = '👍Correct Number!';
    displayMessg('👍Correct Number!');

    document.querySelector('.number').textContent = SecretNo;

    //styling after wining the game
    document.querySelector('body').style.backgroundColor = 'green';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    document.querySelector('.number').style.width = '30rem';
  } else if (guesss != SecretNo) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guesss > SecretNo ? '📉Too High! ' : '📈Too Low!';
      document.querySelector('.score').textContent = score;
      score--;
    } else {
      document.querySelector('.message').textContent = '💥You Loose The Game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
// } else if (guesss < SecretNo) {
//   if (score > 1) {
//     score--;
//     document.querySelector('.score').textContent = score;
//     document.querySelector('.message').textContent =
//       guesss > SecretNo ? 'Too Low! ' : '📈Too Low!';
//   } else {
//     document.querySelector('.message').textContent = '💥You Loose The Game!';
//     document.querySelector('.score').textContent = 0;
//   }

//   else if (guesss > SecretNo) {
//     if (score > 1) {
//       score--;
//       document.querySelector('.score').textContent = score;

//       document.querySelector('.message').textContent = '📉Too High!';
//     } else {
//       document.querySelector('.message').textContent = '💥You Loose The Game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

// Challenge 1

document.querySelector('.again').addEventListener('click', function () {
  let score = 20;
  let SecretNo = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = ' ';
  document.querySelector('.number').textContent = '?';

  //removing styling

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
