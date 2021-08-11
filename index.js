const readLineSync = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.bold.cyan("--------Welcome to Attack on Titan Quiz---------"))

let scoreCount = 0;
let name;
const leaderBoard = [
  {
    name:"Sonali",
    score:1
  }
]

askUser();

//Function to show leaderboard and see if player has beat the highest score
function showScoreBoard(){
  console.log()
  console.log(chalk.bold.cyan("Your Score:"),scoreCount,"/15")
  console.log(chalk.bold.red("-------------LEADERBOARD--------------"));
  console.log()

  //Check if player has beat the highest score.
  leaderBoard.map((person)=>{
    if(person.score<scoreCount){
      console.log(chalk.bold.green("------CONGRATULATIONS!!You have beat the previous highest score----------"))
      console.log()
      console.log(chalk.bold.white("Previous leaderboard"))
      console.table(leaderBoard)
      console.log()
      console.log(chalk.bold.cyan("Send me your score screenshot so I can update the leaderboard."))
    }
    else{
      console.log(chalk.bold.white("LEADERBOARD"))
      console.table(leaderBoard)
    }
  })
  
}

//Ask if player wants to play again
function playAgain(){
  showScoreBoard();
  scoreCount=0;
  let again = readLineSync.keyInYN("Want to play again?(y/n)");
  if(again)
    levelOne()
  else{
      console.log(chalk.red("Game Ended!"))
      process.exit()
  }
  
}

//Function to ask player name and start game
function askUser(){
    name = readLineSync.question(chalk.bold.red("What is your name?"))
    var ready = readLineSync.keyInYN(chalk.green("Are you ready to check your AOT knowledge?"))
    if(ready) levelOne()
    else return;
  
}

//Question format
function askQuestion(options,question,answer){
  console.log();
  console.log(chalk.yellow(question))
  let index = readLineSync.keyInSelect(options,'Choose option:(0 is to cancel playing the game)');
  if(index===answer)
    { console.log(chalk.green("Right Answer!"))
      scoreCount+=1;
    }
  else{
    console.log(chalk.red("WrongAnswer!"))
    playAgain();
    }
}

function levelOne(){
  let allQuestions=[
    {
      options:["Stohess","Shiganshina","Trost","Karanes"],
      question: "Where did Eren used to live with his family?",
      answer:1
    },
    {
      options:["Eren","Mikasa","Armin","Sasha"],
      question: "Who is more intelligent?",
      answer: 2
    },
    {
      options:["Maria","Shina","Rose","Eliazbeth"],
      question:  "What is the name of outermost wall?",
      answer: 0
    },
    {
      options: ["Arlet","Yeager","Ackerman","Reiss"],
      question: "What is the surname of Mikasa?",
      answer: 2
    },
    {
      options:  [1,2,3,4],
      question: "How many walls are there protecting humankind from titans?",
      answer: 2
    }
  ]
  console.log(chalk.bold.red("--------------Level-1------------------"))
  console.log(chalk.bold.white("Answer all 5 questions to move to next level"));

  allQuestions.map(({options,question,answer})=>{
    askQuestion(options,question,answer);
  })
  levelTwo();

}
function levelTwo(){
  let allQuestions=[
    {
      options:["Erwin","Grisha","Levi","Pixis"],
      question:"Who is Eren Yeager's father?",
      answer:1
    },
    {
      options: ["Ackerman","Yeager","Arlet","Reiss"],
      question:"Who are the true Royal family?",
      answer:3
    },
  {
      options:["Ymir","Amy","Historia","Misa"],
      question:"What is Krista Lenz's true name?",
      answer:2
    },
  {
      options:["Annie","Hange","Sasha","Krista"],
      question:"Who is a titan shifter?",
      answer: 0
    },
  {
      options:["Levi","Hange","Eren","Erwin"],
      question:"Who is the commander of survey cops?",
      answer:3
    },
  {
      options:["Erwin Smith","Mikasa Ackerman","Krista Lenz","Grisha Yeager"],
      question:"Who is from outside the walls?",
      answer:3
    },
  {
      options: ["Annie","Ymir","Reiner","Bertholdt"],
      question: "Who wanted to kill Marco?",
      answer:2
    },
  {
      options: ["Yeager","Ackerman","Lenz","Reiss"],
      question:"Who were the warriors who used to protect Eldia's king?",
      answer:1
    },
  {
      options:["Zeke","Grisha","Ymir","Annie"],
      question:"Who said this-----'They also possess a bloodline once thought to exist only in legends told by the royal family. The Ackerman clan, byproducts of Titan science. To be frank, I never want to meet them again.'",
      answer:0
    },
  {
      options:["Mikasa","Jean","Sasha","Reiner"],
      question:"Who wanted to kidnap Eren Yeager?",
      answer:3
    }
  
  ]
  console.log()
  console.log()
  console.log(chalk.bold.red("----------------Level-2--------------------"))
  console.log(chalk.bold.white("Answer all 10 questions to move to next level"))

  allQuestions.map(({options,question,answer})=>{
    askQuestion(options,question,answer);
  })

  console.log(chalk.bold.green("------CONGRATULATIONS YOU ANSWERED ALL QUESTIONS CORRECTLY!!------"))

  playAgain();

}
