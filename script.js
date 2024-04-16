let addBtn=document.querySelector(".add-btn");
let inputBox = document.querySelector(".input-box");
let listwork =document.querySelector(".list");
let mode =document.querySelector(".mode");
let ball =document.querySelector(".ball");
let body = document.querySelector(".container");
let heading =document.querySelector(".heading h2");
let listPage = document.querySelector(".list-page");
let listOut = document.querySelector(".list-out");
let elementTodo =document.querySelector(".add");

addBtn.addEventListener("click",()=>{
    if(inputBox.value===""){
        alert("You must write something!");
    }
    else{
        let li =document.createElement("li");
        li.innerHTML = inputBox.value;
        listwork.prepend(li);
        inputBox.value="";
        let del=document.createElement("div");
        list.append(del);
        del.classList.add("del");
        del.textContent="\u00d7";
        let check =true;
        del.addEventListener("click",()=>{
            let messsge = prompt("Do you want delete this task?(yes/no).");
                if(messsge==="yes"||messsge==="y"||messsge=="YES"||messsge==="Yes"){
                    li.remove();
                    del.remove();
                }
        })
        li.addEventListener("click",()=>{
            if(check){
                li.classList.add("done");

                check=false;

            }else{
                li.classList.remove("done");
                check=true;
            }
        });
    }
});
let modeD =true;
ball.addEventListener("click",()=>{
    if(modeD){
        mode.classList.remove("start");
        mode.style.border="2px solid white";
        heading.style.color="black";
        ball.style.backgroundColor="white";
        mode.classList.add("end");
        listOut.style.backgroundColor ="black";
        listPage.style.border="2px solid lightblue";
        body.style.backgroundColor="black";
        addBtn.style.backgroundColor="cadetblue";
        addBtn.style.color="black";
        elementTodo.style.backgroundColor ="black";
        elementTodo.style.borderTop="2px solid lightblue";
        modeD=false;
    }
    else{
        ball.style.backgroundColor="black";
        heading.style.color="white";
        listOut.style.backgroundColor ="rgb(252, 243, 243)";
        listPage.style.border="none";
        mode.style.border="2px solid black";
        addBtn.style.backgroundColor="white";
        addBtn.style.color="black";
        mode.classList.remove("end");
        mode.classList.add("start");
        elementTodo.style.backgroundColor ="cadetblue";
        elementTodo.style.borderTop="none";
        body.style.backgroundColor="white";
        modeD=true;
    }
    
});
