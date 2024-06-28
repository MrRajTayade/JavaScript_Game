let userscore=0;
let comscore=0;
const choices=document.querySelectorAll(".choice");
const msg= document.querySelector(`#msg`);
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompchoice=()=>{
const optoins=["rock","paper","scissor"];
const randInd=Math.floor(Math.random()*3);
return optoins[randInd];
};

const drawGame=()=>{
    
    msg.innerText="Game was draw play again..!";
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
        userscore++;
        userScorePara.innerText=userscore;
        msg.innerText=`You win..! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    
    }else{
        comscore++;
        compScorePara.innerText=comscore;
        msg.innerText=`You lost..! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
        
    }
};


 const playGame=(userChoice)=>{  
const compChoice=genCompchoice();
//Generate computer choice

if(userChoice===compChoice){
 drawGame();
}else{
    let userwin=true;
    if(userChoice==="rock"){
        //scissor, paper
     compChoice==="paper"?false:true;
    }else if(userChoice==="papar"){
        //rock,scissors
        compChoice==="scissor"? false:true;
    }else{
        //rock ,paper
       userwin= compChoice==="rock"?false:true;
    }
     showWinner(userwin,userChoice,compChoice);
}
 };
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=> {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
