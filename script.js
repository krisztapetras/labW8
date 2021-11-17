function check(){
	var userChoice = prompt("Do you choose rock, paper or scissors?");
	var computerChoice = Math.floor(Math.random()*3)+1;
		if (computerChoice = 1) {
			computerChoice = "rock";
		} 
		else if(computerChoice = 2) {
			computerChoice = "paper";
		} 
		else {
			computerChoice = "scissors";
		}
	var compare=function(choice1,choice2){
		if(choice1===choice2){
			document.getElementById("result").innerHTML="The result is a tie!";
		}
		else if(choice1==="rock"){
			if(choice2==="scissors"){
				document.getElementById("result").innerHTML="Rock wins";
			}
			else if(choice2==="paper"){
				document.getElementById("result").innerHTML="Paper wins";
			}
		}
		else if(choice1==="paper"){
			if(choice2==="scissors"){
				document.getElementById("result").innerHTML="Scissors wins";
			}
			else if(choice2==="rock"){
				document.getElementById("result").innerHTML="Paper wins";
			}
		}
		else if(choice1==="scissors"){
			if(choice2==="paper"){
				document.getElementById("result").innerHTML="Scissors wins";
			}
			else if(choice2==="rock"){
				document.getElementById("result").innerHTML="Rock wins";
			}
		}
		
	}
	console.log(compare(userChoice,computerChoice));
}