function clearErrors() {
for (var loopCounter=0;
loopCounter < document.forms["thisisLuckySevens"].elements.length; loopCounter++)
{
  if (document.forms["thisisLuckySevens"].elements[loopCounter].parentElement.className.indexOf("has-") !=-1)
  {document.forms["thisisLuckySevens"].elements[loopCounter].parentElement.className="form-group";
}
}
}

function resetform() {
  clearErrors;
  document.forms["thisisLuckySevens"]["beginningBet"].value="";
  document.getElementById("betResults").style.display="none";
  document.getElementById("playbutton").innerText="Play";
  document.forms["thisisLuckySevens"]["beginningBet"].focus();
}

function showResults() {
  clearErrors();
  var firstBet=document.forms["thisisLuckySevens"]["beginningBet"].value;
  if (firstBet <= 0 || isNaN(firstBet)){
    alert("Your bet must be greater than $0.");
    document.forms["thisisLuckySevens"]["firstBet"].parentElement.className="form-group has-error";
    document.forms["thisisLuckySevens"]["firstBet"].focus();
    return false;
  }
var money=firstBet;
var maxWin=0;
var rolls=0;
var maxRolls=0;


while(money>0) {
  var dice1=Math.floor(Math.random()*6)+1;
  var dice2=Math.floor(Math.random()*6)+1;
  var rollDice=dice1+dice2;
  rolls++;
  if(rollDice != 7){
    money--;
    console.log("lost");
  }
  else {money += 4;
  if(money>maxWin){
maxWin += (money-maxWin);
maxRolls=rolls;
  }
  console.log("win");
}
}
document.getElementById("betResults").style.display="block";
document.getElementById("playbutton").innerText="Play Again!";
document.getElementById("startingBet").innerText="$"+firstBet+".00";
document.getElementById("toteRollsb4zero").innerText=rolls;
document.getElementById("highestAmountWon").innerText="$"+maxWin+".00";
document.getElementById("rollcountHAW").innerText=maxRolls;

return false;
}
