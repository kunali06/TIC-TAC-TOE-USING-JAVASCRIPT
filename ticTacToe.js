const boxes=document.querySelectorAll(".box");
const reset=document.querySelector("#restart");
const newBtn=document.querySelector("#newbtn");
const msgContainer=document.querySelector(".msg-container");
const msg=document.querySelector("#msg")

//players

let turnO= true;

//winning pattern
const winPatterns=[
 [0,1,2],
 [3,4,5],
 [6,7,8],
 [0,3,6],
 [1,4,7],
 [2,5,8],
 [0,4,8],
 [2,4,6]
];

const resetGame=()=>{
    turnO=true;
    enablebox();
    msgContainer.classList.add("hide")
} 

//track box
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){           //player X ;
            box.innerText="X";
             turnO=false;
        } else{
            box.innerText="O"       //player O ;
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    })
})
//showing winner msg
const disablebox=()=>{
   for (const box of boxes) {
    box.disabled=true;
   } 
}
const enablebox=()=>{
   for (const box of boxes) {
    box.disabled=false;
    box.innerText="";
   } 
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulation... Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disablebox();
};

const checkWinner=()=>{
    for (const pattern of winPatterns) {
    
    let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val != "")
    {
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
                 
      }
    }
  }
};
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
