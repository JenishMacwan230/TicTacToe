
let boxes = document.querySelectorAll(".box");

let resetbt = document.querySelector(".re");

let trueX = true;

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6] 
];

const winnerMessage = document.querySelector(".winner-text");

function showWinner(winner) {
    winnerMessage.style.display = "block"; // Ensure it's visible
    if(winner === "Draw"){
         winnerMessage.innerText = "Oopps Match is Draw !!!";
         resetbt.innerText = "Play Again";
    }
    else{
        winnerMessage.innerText = `Congratulations, ${winner} Wins!`;
    }
    
    
    // Reset animation by forcing reflow
    winnerMessage.classList.remove("slide-in");
    void winnerMessage.offsetWidth; // Force reflow to restart animation
    winnerMessage.classList.add("slide-in");
}


resetbt.addEventListener("click",()=>{

    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    b = 0;
       void winnerMessage.offsetWidth; 
      winnerMessage.style.display = "none"; 
     resetbt.innerText = "Reset"


});

let b = 0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(trueX){
            box.textContent = "X";   
            trueX = false;
        }
        else{
            box.textContent = "O"
            trueX = true;
        }
        b++;
        box.disabled= true;
        
        checkWinner();

        if(b == 9){

             showWinner("Draw");
        }
    });
});



const checkWinner = ()=>{

    for(pattern of winPattern){
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;


        if(p1 != "" && p2 != "" && p3 != ""){
            if(p1 === p2 && p2 === p3){
                 resetbt.innerText = "New Game";
                 b = 0;
                showWinner(p1);
                 for(box of boxes){
                    box.disabled = true;
                 }
                break;
            }
        }
    }

};