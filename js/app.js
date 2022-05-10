'use strict';

let user = prompt('What is your name?');
alert(`Welcome ${user}! Lets answer some questions to get to know me better.`);

let answerOne = prompt('Do I have children?').toLowerCase();

if(answerOne === 'yes' || answerOne === 'y'){
  // console.log('Sorry I don\'t!');
  alert('Sorry I don\'t');
} else if(answerOne === 'no' || answerOne === 'n'){
  alert('You are correct!');
}

let answerTwo = prompt('Am I from New York?');

if(answerTwo === 'yes' || answerTwo === 'y'){
  // console.log('Yes you are correct!');
  alert('Yes you are correct!');
} else if(answerTwo === 'no' || answerTwo === 'n'){
  alert('Incorrect, I am from New York.');
}

let answerThree = prompt('Did I go to college?');

if(answerThree === 'yes' || answerThree === 'y'){
  // console.log('Yes I did!');
  alert('Yes I did!');
} else if(answerThree === 'no' || answerThree === 'n'){
  alert('I did go to college');
}

let answerFour = prompt('Did I live in Alaska?');

if(answerFour === 'yes' || answerFour === 'y'){
  // console.log('Yes I did!');
  alert('Yes i did!');
} else if(answerFour === 'no' || answerFour === 'n'){
  alert('I did live in Alaska!');
}

let answerFive = prompt('Am I learning to be a software developer?');

if(answerFive === 'yes' || answerFive === 'y'){
  // console.log('Yes I am!');
  alert('Yes I am!');
} else if(answerFive === 'no' || answerFive === 'n'){
  alert('I am learning to be a software dev');
}

alert(`${user}, thank you for visiting the site!`);
