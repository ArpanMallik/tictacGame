let boxes=document.querySelectorAll(".Box");
let resetbtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turnO= true //playerX, palyerO
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];


const resetGame =() => {
   turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};





boxes.forEach((Box) => {
    Box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turnO){
            Box.innerText="O";
            turnO = false;
        } else{
            Box.innerText="X";
            turnO = true;
        }
        Box.disabled=true;


        checkWinner();

    });
});


const disableBoxes =() => {
    for(let Box of boxes){
        Box.disabled=true;
    }
};


const enableBoxes =() => {
    for(let Box of boxes){
        Box.disabled=false;
        Box.innerText="";
    }
};


const showWinner = (winner) => {
    msg.innerText = `Congratulations, The Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};


const checkWinner=() => {

    for(pattern of winPatterns){
       let posval1= boxes[pattern[0]].innerText;
       let posval2= boxes[pattern[1]].innerText;
       let posval3= boxes[pattern[2]].innerText;

       if(posval1 != "" && posval2 !="" && posval3!=""){
        if(posval1 === posval2  &&posval2 === posval3  ){
            console.log("Winner is",posval1);

            showWinner(posval1);
        }
       }
    }

};


newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);




    


