let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelector('#reset');
let newGameButton = document.querySelector('#new');
let msgbox = document.querySelector('.msg-box');
let msg = document.querySelector('#msg');
let turnO = 0;
const winpatterns = [
    [0, 1, 2],// rows
    [0, 3, 6],// columns
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],// diagonals   
]; 
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log('box clicked');
    if (turnO == 1) {
        box.innerText = "O";
        turnO = 0;
    } else {
        box.innerText = "X";
        turnO = 1;
        }

    box.disabled = true;

checkWin();
    });
}); 

const resetgame = () => {
    turnO = 0;
    enableBoxes();
    msgbox.classList.add('hide');
}

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
}


const showWinner = (winner) => {
    msgbox.classList.remove('hide');
    msg.classList.remove('hide');
    msg.innerText = `${winner} wins!` ;
    disableBoxes();
    boxes.forEach((box) => {
        box.disabled = true;
    });
}

const checkWin = () => {
    for (let pattern of winpatterns) {
        let [a, b, c] = pattern;
        if (boxes[a].innerText === boxes[b].innerText && boxes[a].innerText === boxes[c].innerText && boxes[a].innerText !== "") {
            // alert(`${boxes[a].innerText} wins!`);
            showWinner(boxes[a].innerText);
            return;
        }
    }
} 
let count = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count++;
        if (count === 9) {
            msgbox.classList.remove('hide');
            msg.innerText = "It's a draw!";
            disableBoxes();
        }
    });
});


newGameButton.addEventListener('click' , resetgame );
resetButton.addEventListener('click' , resetgame);