


$("form").submit(function() {
  
var a = Math.random() + ""
var rand1 = a.charAt(5)
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


  if ($("#target").val() == "money") {
    $("h1").text(bigMoney);
    return false;
} else if ($("#target").val() == "love") {
    //alert("you asked for money!");
    $("h1").text(bigLove);
    return false;
};

});


 if (word == "money" || word == "wealthy") {
   $("h1").text(bigMoney);
    return false;
} 

// IF THE USER'S QUESTION CONTAINS THE WORDS MONEY OR WEALTH, ANSWER WITH RANDOM CHOICE FROM LOVE  ARRAY.
else if (word == "love" || word == "marry") {
    $("h1").text(bigLove);
    return false;
} 

else if (word == "happy" || word== "happiness") {
    $("h1").text(bigHappy);
    return false;
} 

else {
	$("h1").text("You need to pay a fee for that answer.");
}


