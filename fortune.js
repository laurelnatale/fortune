// This little jQuery was written by Laurel Natale - http://www.laurelnatale.me
// Feel free to take it and create whatever your little heart desires but please leave these comments for some credit. 
// Thank you mucho.

//MAKES EVERYTHING LOWERCASE SO QUESTION CAN BE PUT INTO ARRAY AND SEARCHED THROUGH.
$('#target').keyup(function(){
    this.value = this.value.toLowerCase();
});

//ON SUBMIT, PREVENT DEFAULT BEHAVIOR AND DO THE FOLLOWING:
$("form").submit(function(e) {
e.preventDefault();

//CREATE A RANDOM NUMBER BETWEEN ONE AND 10 AND USE THAT NUMBER TO PICK FORTUNE AT RANDOM.
var a = Math.random() + ""
var rand1 = a.charAt(5)

// RANDOM ANSWERS IF THE WORD "MONEY" WAS USED IN QUESTION
moneyAnswer = new Array
moneyAnswer[1] = "I do see money in your future, but it does not come in the way you expect, and alas, it does not last."
moneyAnswer[2] = "There is the potential of a great fortune coming your way, but will you hear it when it knocks at your door? That part is hazy."
moneyAnswer[3] = "There are troubling times ahead, this I see., but from this sadness comes a great appreciation for things of greater value then money."
moneyAnswer[4] = "Hmm... I thought you looked more intelligent then to ask about money. Oh well, let me see... you want it for the wrong reasons, therefor fortune avoids you."
moneyAnswer[5] = "If you can forget about your financial troubles and focus on helping others around you, fortune will come."
moneyAnswer[6] = "They say money is a good servant, but a bad master. Control your life in other areas, and fortune will do your will."
moneyAnswer[7] = "Money has wings and can fly away at a moment's notice. Focus on the free things in life and you will find happiness."
moneyAnswer[8] = "There is no question that you love money, but.... does money love you? The crystal ball says \'No\' . I am sorry."
moneyAnswer[9] = "If there truly are gods of money,  they are singing your name. I see you surrounded by wealth, but true friends have disappeared."
moneyAnswer[0] = "I see a long and winding road ahead of you and a storm hailing down. Make it to the end of this road and your reward will match your suffering."
//SET VARIABLE TO RANDOM ARRAY ANSWER.
var bigMoney = moneyAnswer[rand1]

// RANDOM ANSWERS IF THE WORD "LOVE" WAS USED IN QUESTION
loveAnswer = new Array
loveAnswer[1] = "I see Love has given itself to you in the past, but you threw it away. You must woo Love back if you want it in your life."
loveAnswer[2] = "I see a special, truly amorous love heading your way, but becareful, something this strong does not last. Keep your wits about you."
loveAnswer[3] = "I see a broken heart that needs mending, but only you can be the mender. Take your time and love will be restored. "
loveAnswer[4] = "I see a test from Love coming your way. It will be difficult, but if you pass you will be well rewarded."
loveAnswer[5] = "If you attempt to love for the wrong reasons, love will abondon you. Ask yourself why you want love and if you answer correctly, love will return."
loveAnswer[6] = "I see a true love, but it does not come in the form you expect. Keep your mind open as well as your eyes  in the next few months."
loveAnswer[7] = "Love must begin from within, you are looking in the wrong place. Start over and eventually when you discover love, it will discover you."
loveAnswer[8] = "You must first fall a little out of love to find a better version of it. Pull back and then begin again."
loveAnswer[9] = "You have boarded love without paying the ticket. You will soon be thrown overboard. Prepare to swim for shore."
loveAnswer[0] = "There is love ahead of you, but you must first erase the image you have in your mind. It comes on another's face."
var bigLove = loveAnswer[rand1]

// RANDOM ANSWERS IF THE WORD "HAPPY" WAS USED IN QUESTION
happyAnswer = new Array
happyAnswer[1] = "Happiness comes in unexpected ways. Usually, when you stop searching for it. Look around, it's already here."
happyAnswer[2] = "I see your days have been scattered with sadness. Stop looking outward, it is when you look inward you find it."
happyAnswer[3] = "I see a long and happy life in front of you. That will be twenty dollars. Thank you."
happyAnswer[4] = "You must not search for happiness, but remember these words:  \'This too shall pass.\' Focus on tomorrow for now. "
happyAnswer[5] = "What is happiness? It is the result of finding something you want, yea? When you want nothing, you will be happy."
happyAnswer[6] = "You want to be happy? Go sit next to someone who is more miserable that you, then you will realize you are happy."
happyAnswer[7] = "You want happiness? That will be an extra twenty dollars. I'm just kidding. There, aren't you happier now?"
happyAnswer[8] = "I see happiness in your future. I also see saddness. I then see more happiness. Such is life."
happyAnswer[9] = "It is not a question of being happy, but of gratitude. Be grateful for what you have and you will find happiness."
happyAnswer[0] = "I see that you keep trying to find happiness through stuff. Try finding it through actions. Make some happy and happiness will come to you."
var bigHappy = happyAnswer[rand1]


$(function() { 

  var questionArray = ($("#target").val().split(' '));

$.each(questionArray, function(value, word) {
// IF THE USER'S QUESTION CONTAINS THE WORDS MONEY OR WEALTH, ANSWER WITH RANDOM CHOICE FROM MONEY  ARRAY.
if (word == "money" || word == "wealthy" || word == "wealthy?" || word == "money?") {
   $("h1").text(bigMoney);
    return false;
} 
// IF THE USER'S QUESTION CONTAINS THE WORDS LOVE OR MARRY, ANSWER WITH RANDOM CHOICE FROM LOVE  ARRAY.

else if (word == "love" || word == "marry" || word == "marry?" || word == "love?") {
    $("h1").text(bigLove);
    return false;
} 
// IF THE USER'S QUESTION CONTAINS THE WORDS HAPPY OR HAPPINESS, ANSWER WITH RANDOM CHOICE FROM HAPPY  ARRAY.
else if (word == "happy" || word== "happiness" || word == "happy?" || word == "happiness?") {
    $("h1").text(bigHappy);
    return false;
} 

else {
	$("h1").text("You need to pay a fee for that answer.");
}


});

  });

});













