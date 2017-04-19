// Javascript customized for class 3 Rutgers Coding Boot camp //
// var Letter = event.key;
$(document).ready(function displayWord(){
var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;
var userChoice;
newnumber();
/* Computer Random Number */
/*function newnumber(){
genNumber = Math.floor((Math.random() * 120) + 19);
$("#ComputerChoiceBox").html(genNumber);
};
*/
/* exclude the number from one crystal to the other */
var excludedNumbers = [0];
excludedNumbers.push(crystalOne);
excludedNumbers.push(crystalTwo);
excludedNumbers.push(crystalThree);
excludedNumbers.push(crystalFour);
excludedNumbers.push(0);
var array = generateExclude(excludedNumbers, 1, 12);
function generateExclude(excludedNumbers, min, max){
var newNumbers = [0];
for(var i = min; i <= max; i++) {
for(var j = 0; j < excludedNumbers.length; j++) {
var checker = $.inArray(i, excludedNumbers)
if(checker > -1){
}else{
if($.inArray(i, newNumbers)<= -1){
newNumbers.push(i);
}
}
};
};
return newNumbers;
//console.log(excludedNumbers);
//console.log(newNumbers);
}
/*random numbers for Crystal Icons*/
function generateRandomNumbers(items){
var num = items[Math.floor(Math.random()*items.length)];;
return num;
}
	crystalOne = generateRandomNumbers(array);
	crystalTwo = generateRandomNumbers(array);
	crystalThree = generateRandomNumbers(array);
	crystalFour = generateRandomNumbers(array);
	addScore=0;
	wins=0;
	loses=0;
$('body').on('click','#one',function(){
	addScore=addScore + crystalOne;
	$("#score").html(addScore);
		console.log(addScore)
	checkScore();
});
$('body').on('click','#two',function(){
	addScore=addScore + crystalTwo;
	$("#score").html(addScore);
		console.log(addScore)
	checkScore();
});
$('body').on('click','#three',function(){
	addScore=addScore + crystalThree;
	$("#score").html(addScore);
		console.log(addScore)
	checkScore();
});
$('body').on('click','#four',function(){
	addScore=addScore + crystalFour;
	$("#score").html(addScore);
		console.log(addScore)
	checkScore();
});
});
function newnumber(){
	genNumber = Math.floor((Math.random() * 120) + 19);
	$("#ComputerChoiceBox").html(genNumber);
};
function checkScore(){
	if(genNumber < addScore){
		alert("I'm Sorry, you lost! Try again?");
		loses=loses + 1;
		$("#lose").html(loses);
		addScore=0;
		newnumber();
}
	if(genNumber == addScore){
		alert("YOU WON!!!");
		wins=wins + 1;
		$("#win").html(wins);
		addscore=0;
		newnumber();
}
};