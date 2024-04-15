let addBtn=document.querySelector(".add-btn");
let inputBox = document.querySelector(".input-box");
let listwork =document.querySelector(".list");
let mode =document.querySelector(".mode");
let ball =document.querySelector(".ball");
let Body = document.querySelector(".container");

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
        li.append(del);
        del.classList.add("del");
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

ball.addEventListener("click",()=>{
    let Mode =true;
    if(Mode){
        mode.classList.add("start");
        mode.classList.remove("end");
        Body.style.backgroundColor="black";
        Mode=false;
    }
    else{
        mode.classList.add("end");
        mode.classList.remove("start");
        Body.style.backgroundColor="white";
        Mode=true;
    }
    
});
