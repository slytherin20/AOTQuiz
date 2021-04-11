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
  console.log(chalk.bold.cyan("Your Score:"),scoreCount)
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
  console.log(chalk.bold.red("-------Level-1-----------"))
  console.log(chalk.bold.white("Answer all 5 questions to move to next level"));

  //Question-1
  let cities = ["Stohess","Shiganshina","Trost","Karanes"];
  askQuestion(cities,"Where did Eren used to live with his family?",1);

  //Question-2
  let friends = ["Eren","Mikasa","Armin","Sasha"]
  askQuestion(friends,"Who is more intelligent?",2);

  //Question-3
  let wallName = ["Maria","Shina","Rose","Eliazbeth"]
  askQuestion(wallName,"What is the name of outermost wall?",0);

  //Question-4
  let surname = ["Arlet","Yeager","Ackerman","Reiss"]
  askQuestion(surname,"What is the surname of Mikasa?",2);

  //Question-5
  let numberOfWalls = [1,2,3,4]
  askQuestion(numberOfWalls,"How many walls are there protecting humankind from titans?",2);

  levelTwo();

}
function levelTwo(){
  console.log()
  console.log(chalk.bold.red("-------Level-2-----------"))
  console.log(chalk.bold.white("Answer all 10 questions to move to next level"));

  //Question-1
  let names = ["Erwin","Grisha","Levi","Pixis"]
  askQuestion(names,"Who is Eren Yeager's father?",1)

  //Question-2
  let royalFamily = ["Ackerman","Yeager","Arlet","Reiss"]
  askQuestion(royalFamily,"Who are the true Royal family?",3)

  //Question-3 
  let trueName = ["Ymir","Amy","Historia","Misa"]
  askQuestion(trueName,"What is Krista Lenz's true name?",2)

  //Question-4
  let spy = ["Annie","Hange","Sasha","Krista"]
  askQuestion(spy,"Who is a titan shifter?",0)

  //Question-5
  let commander = ["Levi","Hange","Eren","Erwin"]
  askQuestion(commander,"Who is the commander of survey cops?",3)

  //Question-6
  let outsider = ["Erwin Smith","Mikasa Ackerman","Krista Lenz","Grisha Yeager"]
  askQuestion(outsider,"Who is from outside the walls?",3)

  //Question-7
  let culprit = ["Annie","Ymir","Reiner","Bertholdt"]
  askQuestion(culprit,"Who wanted to kill Marco?",2)

  //Question-8
  let warriors = ["Yeager","Ackerman","Lenz","Reiss"]
  askQuestion(warriors,"Who were the warriors who used to protect Eldia's king?",1)

  //Question-9
  let whosays = ["Zeke","Grisha","Ymir","Annie"]
  askQuestion(whosays,"They also possess a bloodline once thought to exist only in legends told by the royal family. The Ackerman clan, byproducts of Titan science. To be frank, I never want to meet them again.",0)

  //Question-10
  let whoAmong = ["Mikasa","Jean","Sasha","Reiner"]
  askQuestion(whoAmong,"Who wanted to kidnap Eren Yeager among them?",3)

  console.log(chalk.bold.green("------CONGRATULATIONS YOU ANSWERED ALL QUESTIONS CORRECTLY!!------"))

  playAgain();

}
