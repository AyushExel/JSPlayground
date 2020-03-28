const getUserChoice= (userInput)=>{
    userInput = userInput.toLowerCase();
    if(userInput==='rock'||userInput==='paper'||userInput=='scissors')
      return userInput;
    else
      console.log('Invalid user input');
  }
  
  function getComputerChoice(){
    let num = Math.floor(Math.random()*3);
    if(num === 0)
      return 'rock'
    else if(num===1)
      return 'paper'
    else if(num === 2)
      return 'scissors'
  }
  
  const determineWinner = (userChoice, computerChoice)=>{
     if(userChoice===computerChoice)
       return 'the game was a tie';
     if(userChoice === 'rock'){
       if(computerChoice==='paper')
         return 'Computer won'
       else
         return 'User Won'
     }
    if(userChoice==='paper'){
      if(computerChoice==='scissors')
        return 'Computer Won';
      else
        return 'User Won';
    }
      if(userChoice==='scissors'){
      if(computerChoice==='rock')
        return 'Computer Won';
      else
        return 'User Won';
    }
  }
  
  function playGame(){
    console.log('Enter Choice: rock, paper or scissors?')
    //let input = console.readline();
    let userChoice = getUserChoice('rock');
    console.log('User choice : '+ userChoice);
    let computerChoice = getComputerChoice();
    console.log('Computer choice : '+ computerChoice);
    console.log(determineWinner(userChoice,computerChoice));
    console.log('\n\n\n\n\n')
  }

playGame()
playGame()
playGame()
playGame()
playGame()
playGame()
playGame()
playGame()