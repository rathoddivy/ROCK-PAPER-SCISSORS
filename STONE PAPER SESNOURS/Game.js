let rock=document.querySelector(".rock");
let paper=document.querySelector(".paper");
let sesnours=document.querySelector(".ses");
let wonn=document.querySelector(".wonn")
let choices=document.querySelector(".img")
let one =document.querySelector(".one")
let two =document.querySelector(".two")

// the check function check the which player have 10 points first


function check(){
    if(compchoice==10 || userchoice==10){
     
           wonn.innerHTML = "Game Over ";
       
           wonn.style.backgroundColor = "yellow";
           rock.removeEventListener("click" , rockhandeler)
           paper.removeEventListener("click" , paperhandler)
           sesnours.removeEventListener("click" , seshandler)
       }
    }
   
let compchoice=0;
let userchoice=0;

//  The drow function give the drow when two player choice is same



function drow(){
    console.log("The match is a draw");
    wonn.innerHTML = "THE MATCH IS A DRAW";
    wonn.style.backgroundColor = "yellow";


}


// R O C K 

function rockhandeler(){
   
        let  num=Math.floor(Math.random()*3)

console.log("Computer choice " , num)
if(num == 1){

wonn.innerHTML="YOU LOSE";
wonn.style.backgroundColor = "red";
compchoice=compchoice+1
two.innerHTML=compchoice;
check();
}


else if(num ==2){
    console.log("you win")
    wonn.innerHTML="YOU WIN ";
    wonn.style.backgroundColor = "green";
    userchoice=userchoice+1;
one.innerHTML=userchoice;
check();
}
else{
    drow();
}

}


// P A P E R
 function paperhandler(){
    


        let num=Math.floor(Math.random()*3)
    if(num ==0){
    
        console.log("you win")
        wonn.innerHTML="YOU WIN ";
        wonn.style.backgroundColor = "green";
            userchoice=userchoice+1;
            one.innerHTML=userchoice;
            check();
        
    }
    else if(num ==2){
        console.log("you lose")
        wonn.innerHTML="YOU LOSE";
        wonn.style.backgroundColor = "red";
        compchoice=compchoice+1
    two.innerHTML=compchoice;
    check();
    }
    else{
        drow();
    }
    
    }

 
// S E S

function seshandler(){



        let num=Math.floor(Math.random()*3)
    if(num ==0){
    
        console.log("you lose")
        wonn.innerHTML="YOU LOSE ";
        wonn.style.backgroundColor = "red";
        compchoice=compchoice+1
        two.innerHTML=compchoice;
        check();
            
    }
    else if(num ==1){
        console.log("you win")
        wonn.innerHTML="YOU WIN";
        wonn.style.backgroundColor = "green";
            userchoice=userchoice+1;
            one.innerHTML=userchoice;
            check();
    }
    else{
        drow();
    }
    
    }

    rock.addEventListener("click", rockhandeler);
paper.addEventListener("click", paperhandler);
sesnours.addEventListener("click", seshandler);
