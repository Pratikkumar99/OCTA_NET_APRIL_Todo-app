let addBtn=document.querySelector(".add-btn");
let inputBox = document.querySelector(".input-box");
let listwork =document.querySelector(".list");

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
