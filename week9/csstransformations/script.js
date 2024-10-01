// first let us fetch the ball that we want to interact

const ball = document.querySelector(".ball");
console.log(ball);

// let us work on the translate or move logic
// first we need the button 
// class = .
// id = #

// let us get access to the outer box border

const outer = document.querySelector(".outer");
console.log(outer);


const moveButton = document.querySelector("#move-button");
console.log(moveButton);
moveButton.addEventListener("click", moveBall);

let distance = 50;
let outerWidth = outer.clientWidth / 2 - 30;

function moveBall()
{
    if (distance < outerWidth) {
    // ball.style.transform = `translateX(${distance}px)`;
    // ball.style.transform = `translateX(-${distance}px)`;
    // ball.style.transform = `translateY(-${distance}px)`;
    // ball.style.transform = `translateY(${distance}px)`;
    transformBall();
    distance += 50;
    }
}

// translateX positive value moves right, negative moves left
// translateY positive value moves down, negative moves up
// if distance < outerWidth means if distance is within the outer border than itll move, however if it is greater than the border than it will not go past or move


//  -------------------------------------------------

// let us work on the rotate button
// first we need the rotate button

const rotateButton = document.querySelector("#rotate-button");
console.log(rotateButton);
rotateButton.addEventListener("click", rotateBall);

let rDeg = 45;

function rotateBall() {
    // ball.style.transform = `rotate(${rDeg}deg)`;
    transformBall();
    rDeg += 45;
}

//  -------------------------------------------------

// let us work on the scale button
// first we need the scale button

const scaleButton = document.querySelector("#scale-button");
console.log(scaleButton);
scaleButton.addEventListener("click", scaleBall);

let scaleValue = 0.9;

function scaleBall() {
    if (scaleValue > 0.2) {
    // ball.style.transform = `scale(${scaleValue})`;
    transformBall();
    scaleValue -= 0.1;
    }
}

// -------------------------------------------------

function transformBall() {
    ball.style.transform = `translateX(${distance}px) rotate(${rDeg}deg) scale(${scaleValue})`;
}


// -------------------------------------------------

// let us work on the reset button 

const resetButton = document.querySelector("#reset-button");
console.log(resetButton);
resetButton.addEventListener("click", resetBall);

function resetBall() {
    
}