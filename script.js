var images = ['./images/dice1.png', './images/dice2.png', './images/dice3.png', './images/dice4.png', './images/dice5.png', './images/dice6.png'];
var tester = 1;

function getRandom(num1, num2){
    return Math.floor((Math.random()*num2)+num1); 
}; /*this function generates a random number between num1 and num2,
    here we're using "Math.floor()" function to set the number to the closest lower int.
    the "Math.random()" function generates a random number that is between 0 and 1, so we multiply it
    by the second number to get it closer to the second number and add it with the first number so that the
    int. starts with the first number, then we return the value.
*/

function getP1P2(){
    let players = [getRandom(1, 6), getRandom(1, 6)];
    return players;
};  /*
        This function uses the getRandom() function that we just declared
        to generate random values for player one and player two and store
        them in an array and returns this array so it can be used in the upcoming functions.
*/

function setImagesSrc(element, player){
    let cases = [1, 2, 3, 4, 5, 6];
    var element1 = document.querySelector(element);
    if (player == cases[0]){
        element1.setAttribute('src', images[0]);
    };
    if (player == cases[1]){
        element1.setAttribute('src', images[1]);
    };
    if (player == cases[2]){
        element1.setAttribute('src', images[2]);
    };
    if (player == cases[3]){
        element1.setAttribute('src', images[3]);
    };
    if (player == cases[4]){
        element1.setAttribute('src', images[4]);
    };
    if (player == cases[5]){
        element1.setAttribute('src', images[5]);
    };
};
/*
    The point of this function is to set the src of the images in the HTML element,
    and we declared it as a function so it we can avoid rewriting the conditional statement again.
    We used the global variable "images" which contains the path of each dice image that we're going to use.
*/

function whoIsWinning(players){
    if (players[0] > players[1]){
        return 'P1';
    };
    if (players[0] < players[1]){
        return 'P2';
    };
    if (players[0] == players[1]){
        return 'D';
    };
};
/*
    This function simply returns the result of the game.
*/



function setElements(results, players){
    let container = document.querySelector('.container h1');
    if (results == 'P1'){
        container.textContent = 'Player one is the winnner!';
    };
    if (results == 'P2'){
        container.textContent = "Player two is the winner!";
    };
    if (results == 'D'){
        container.textContent = 'Draw!';
    };
    setImagesSrc('.img1', players[0]);
    setImagesSrc('.img2', players[1]);
};

/**
 * This function does the final setting of the HTML elements, the container and the images.
 * We used the setImagesSrc() function to set the proper images for player one and player two.
 */





var playersResults = getP1P2();
var gameResults = whoIsWinning(playersResults);
setElements(gameResults, playersResults);

/**
 * And finally we set a variable to generate the random values for each player, then we get the game results
 * with the whoIsWinning() function, and lastly we call the setElements() function to set the heading and the
 * images according to the results of the game.
 */