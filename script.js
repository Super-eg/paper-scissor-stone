const enemyType = [ "Paper", "Scissor", "Stone" ];
const enemyNumber = [ 1, 3, 9 ];
const myNumber = [ 1, 2, 4 ];

const getRandomNumber = () => Math.floor( Math.random() * 3 )

const doAllThings = ( playerNum, playerType ) => {
	randomNumber = getRandomNumber();
	judge( randomNumber, playerNum );
	showType( randomNumber, playerType);
}

const judge = ( enemyNum, meNum ) => { showText( enemyNumber[enemyNum] * myNumber[meNum]) }

const showText = ( ans ) => {
	switch ( ans ) {
 	 case 2: case 9: case 12:
    show.innerText = "YOU WIN";
    	break;
 	 case 3: case 4: case 18:
   	show.innerText = "you lose";
   		break;
   case 1: case 6: case 36:
   	show.innerText = "TIE";
  	 	break;
	}
}

const showType = ( enemyNum, meText ) => {
	enemy.innerText = enemyType[enemyNum];
	me.innerText = meText;
}