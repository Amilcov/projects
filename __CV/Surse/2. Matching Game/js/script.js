
/*
Author: Adriana Milcov
Date: 1.04.2018
Course: Udacity-Project Matching Game
%
%
%
%
%
%
%
%
%
%
*/

let li_moves=0;

//just for te easy of use we declare an array of 17 elements insetead of one with 16 and we ignore element [0] and we ignore element [0]
//array_cards will hold the sequences of the 16 cards that were shuffled
const array_cards=[0,
                0, 0, 0, 0,
                0, 0, 0, 0,
                0, 0, 0, 0,
                0, 0, 0, 0];

//just for te easy of use we declare an array of 9 elements instead of one with 8= how many distinct cards exists and we ignore element [0]
//array_card_no- will count how may cars of each element was generated
const array_cards_no=[0,
                  0, 0, 0, 0,
                  0, 0, 0, 0];

//just for te easy of use we declare an array of 17 elements insetead of one with 16 and we ignore element [0] and we ignore element [0]
//array_cards_matched will hold the cards that was matched
const array_cards_matched=[0,
                        0, 0, 0, 0,
                        0, 0, 0, 0,
                        0, 0, 0, 0,
                        0, 0, 0, 0];

let li_card_1=0;   //memorize the card number, from 1-16,  that was clicked first
let li_card_2=0;   //memorize the card number, from 1-16,  that was clicked second
let time_start;
let li_matched_pairs=0;
let li_show_win=0;
let li_stars=3;
let li_time_game=0;

function shuffle_cards() {
let lb_shuffle = true;
let li_number;
let i=1;
//--------------------------Shuffle cards-----------------------------
//for each card (i) from 1-15 memorize in var array_cards will be generate a number from 1-8 that meet the condition: was not generarated before more than 1 time;
//the array array_cards_no memorize how many time a number from 1- 8 was generated.

do {
 li_number=Math.floor(Math.random () *8 + 1);

 if (array_cards_no[li_number] <2) {
  array_cards_no[li_number]++;
  array_cards[i]=li_number;
  i++;
 }

 if (i > 15) {
  lb_shuffle = false;
 };
}
while (lb_shuffle === true);

// for the last card, the 16 th it is not using the random function. That is done to minimize the time not wainting for the random function to generate the exact number for the only card left, the 16th
let j=1;
for (j=1; j<9; j++) {
if (array_cards_no[j] === 1) {
 array_cards[16] = j;
 array_cards_no[j]=2;
 break;
 }
}

}

//--------------------------function get_time_from_game_start-----------------------------
function get_time_from_game_start() {
let time_end= Math.round(performance.now())/1000;
let  time_diff= Math.round(time_end - time_start);
li_time_game= time_diff;
return "Time game: "+ time_diff+" seconds";
}

//--------------------------function reset-----------------------------
//when the wher click reset button want to start a new game
function reset() {
window.location.reload(true);
}

//--------------------------function fc_img_onclick(nr)-----------------------------
//Descriptions: show the card that was clicked. If is the first card that is clicked the cards are shuffled and the cronometer is started.
//If it is the paired card (every 2send catd clicked it's the paired) it will check if the card  has the same image as the first one that was clicked.
//If it is different then the cards automatically are faced down after 1 second by changing the imagage of the card with the image of card back.
//Parameter:  nr is the position number of the card in the range 1-16


function fc_img_onclick(nr) {
//not doing any work if the card was already matched
if (array_cards_matched[nr] === 1) {
 return;
}

if (li_moves === 0) {
 shuffle_cards();
}

if (li_moves === 0) {
time_start= Math.round(performance.now())/1000;
}

li_moves++;
document.getElementById("moves").innerHTML=li_moves+ (li_moves === 1 ? " Move": " Moves");
let ls_card_pic="card"+array_cards[nr]; //hold the picture name that must be showen on the clicked card
let ls_card_id="card"+nr; //hold the position of the card  from 1-16 what was clicked.

document.getElementById(ls_card_id).src="img/"+ls_card_pic+".png";

if (li_moves % 2 === 0) {
li_card_2=nr;
if (array_cards[li_card_1] !== array_cards[li_card_2]) {
 let a="card"+li_card_1;
 let b="card"+li_card_2;

 setTimeout( function () {
  document.getElementById(a).src="img/card_back.png";
  document.getElementById(b).src="img/card_back.png";
   }, 1000);
 } else {
   array_cards_matched[nr]=1;
   array_cards_matched[li_card_1]=1;
   li_matched_pairs++;
  }

 li_card_1=0;
 li_card_2=0;

 }  else {
  li_card_1=nr;
 }

 //set stars
 if (li_moves === 20) {document.getElementById("stars").src="img/star_black_2.png";li_stars=2;}
 if (li_moves === 25) {document.getElementById("stars").src="img/star_black_1.png";li_stars=1;}


}

setInterval( function() {
if (li_matched_pairs < 8) {
 document.getElementById("timer").innerHTML= li_moves>0 ? get_time_from_game_start() :0;
} else {
 if (li_show_win === 0){
  let ls_ask;
  //alert("You won! Congratulation!\n"+"Time: "+ li_time_game+" seconds"+"\nMoves: "+li_moves+"\nStars: "+li_stars);
   if (confirm("You won! Congratulation!\n"+"Time: "+ li_time_game+" seconds"+"\nMoves: "+li_moves+"\nStars: "+li_stars+"\n\n"+"Play again?")) {
    ls_ask=reset();
   }

   li_show_win=1;
  }
 }
}
, 1000);
