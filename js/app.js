'use strict';

let correctAnswers = 0;

let user = prompt('What is your name?');
alert(`Welcome ${user}! Lets answer some questions to get to know me better.`);

function q1(){
  let answerOne = prompt('Do I have children?').toLowerCase();
  
  if(answerOne === 'yes' || answerOne === 'y'){
    // console.log('Sorry I don\'t!');
    alert('Sorry I don\'t');
  } else if(answerOne === 'no' || answerOne === 'n'){
    alert('You are correct!');
    correctAnswers += 1;
  }
}
q1();

console.log(correctAnswers);

function q2(){
  let answerTwo = prompt('Am I from New York?');
  
  if(answerTwo === 'yes' || answerTwo === 'y'){
    // console.log('Yes you are correct!');
    alert('Yes you are correct!');
    correctAnswers += 1;
  } else if(answerTwo === 'no' || answerTwo === 'n'){
    alert('Incorrect, I am from New York.');
  }
}
q2();

function q3(){
  let answerThree = prompt('Did I go to college?');
  
  if(answerThree === 'yes' || answerThree === 'y'){
    // console.log('Yes I did!');
    alert('Yes I did!');
    correctAnswers += 1;
  } else if(answerThree === 'no' || answerThree === 'n'){
    alert('I did go to college');
  }
}
q3();

function q4(){
  let answerFour = prompt('Did I live in Alaska?');
  
  if(answerFour === 'yes' || answerFour === 'y'){
    // console.log('Yes I did!');
    alert('Yes i did!');
    correctAnswers += 1;
  } else if(answerFour === 'no' || answerFour === 'n'){
    alert('I did live in Alaska!');
  }
}
q4();

function q5(){
  let answerFive = prompt('Am I learning to be a software developer?');
  
  if(answerFive === 'yes' || answerFive === 'y'){
    // console.log('Yes I am!');
    alert('Yes I am!');
    correctAnswers += 1;
  } else if(answerFive === 'no' || answerFive === 'n'){
    alert('I am learning to be a software dev');
  }
}
q5();

function q6(){
  for(let i = 0; i < 4; i++){
    let answerSix = prompt('Guess the number i am thinking of 1-10');
    if(answerSix === '5'){
      alert('Correct');
      correctAnswers += 1;
      break;
    } if(answerSix < 5){
      alert('Higher');
    } if(answerSix > 5){
      alert('Lower');
    } if(i === 3){
      alert('The answer is 5');
    }
  }
}
q6();

function q7(){
  let i = 0;
  let breeds = ['retriever', 'lab'];
  let possibleBreeds = ['retriever', 'lab', 'pit bull', 'poodle'];
  
  while(i < 6){
    for(let x = 0; x < possibleBreeds.length; x++){
      alert('Choices: '+ possibleBreeds[x]);
    }
    let answerSeven = prompt('Name the breed of one of my dogs');
    i++;
    if(breeds.includes(answerSeven)){
      alert('Correct!');
      correctAnswers += 1;
      break;
    } else {
      alert('Incorrect');
    }
  }
  alert(`${user}, thank you for visiting the site! You got ${correctAnswers} answers right!`);
}
q7();

