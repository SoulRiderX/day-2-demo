'use strict';

var user = prompt('what is your name?');
console.log('users answer:', user);

alert('Nice to meet ya!');

var gameOne = prompt('do you play cardfight vanguard? Y or N only.');
console.log('gameOne:', gameOne);

gameOne.toUpperCase();

if (gameOne === 'Y' || gameOne === 'y') {
  alert('Sweet!');
} else {
  alert('Not a problem.');
}

var gameTwo = prompt('do you play yugioh? Y or N only.');
console.log('gameTwo:', gameTwo);

gameTwo.toUpperCase();

if (gameTwo === 'Y' || gameTwo === 'y') {
  alert('Nice!');
} else {
  alert('Oh well.');
}

var gameThree = prompt('do you play pokemon? Y or N only.');
console.log('gameThree:', gameThree);

gameThree.toUpperCase();

if (gameThree === 'Y' || gameThree === 'y') {
  alert('Great!');
} else {
  alert('ok.');
}

var gameFour = prompt('do you play magic? Y or N only.');
console.log('gameFour:', gameFour);

gameFour.toUpperCase();

if (gameFour === 'Y' || gameFour === 'y') {
  alert('Awesome!');
} else {
  alert('Meh. Whatever.');
}

var gameFive = prompt('do you play buddyfight? Y or N only.');
console.log('gameFive:', gameFive);

gameFive.toUpperCase();

if (gameFive === 'Y' || gameFive === 'y') {
  alert('good!');
} else {
  alert('K then.');
}
