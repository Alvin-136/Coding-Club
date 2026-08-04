
document.addEventListener("keydown", function(e){
    keys[e.key] = true;
});

document.addEventListener("keyup", function(e){
    keys[e.key] = false;
});


// Score
let leftScore = 0;
let rightScore = 0;

function resetBall() {
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
    dx = 3;
    dy = 3;
}

    // 3. Top and bottom wall bounce only
    if(ballY - ballRadius <= 0 || ballY + ballRadius >= canvas.height){
        dy = -dy;
    }

    // 4. Paddle movement
    if(keys["w"] && leftY > 0){
        leftY -= 5;
    }    
    if(keys["s"] && leftY + paddleH < canvas.height){ 
        leftY += 5;
    }
    if(keys["ArrowUp"] && rightY > 0){
        rightY -= 5;
    }                        
        
    if(keys["ArrowDown"] && rightY + paddleH < canvas.height){
        rightY += 5;
    }         

    // 5. Paddle collision
    if(ballX - ballRadius <= 20 + paddleW && ballY >= leftY && ballY <= leftY + paddleH){
        dx = Math.abs(dx) * 1.05;
    }
    if(ballX + ballRadius >= canvas.width - 20 - paddleW && ballY >= rightY && ballY <= rightY + paddleH){
        dx = -Math.abs(dx) * 1.05;
    }

    // 6. Score — ball passes a side edge
    if(ballX < 0){
        rightScore++;
        resetBall();
    }
    if(ballX > canvas.width){
        leftScore++;
        resetBall();
    }

