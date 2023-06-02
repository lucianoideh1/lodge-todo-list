let contenedorYow = document.querySelector(".container");
let tituloYow = document.querySelector(".title");
let inputYow = document.querySelector(".input-text");
let addBtnYow = document.querySelector(".add-btn");

inputYow.addEventListener("click",()=>console.log("you are clicking the input"))
addBtnYow.addEventListener("click",()=>console.log("you are clicking the button"))

//1. need to add a event listener on the input

//2. need to take that value into a variable

//3. need to check IF the value is equal to something

//4. if the case is true, allow the user to use the button

//5. or just do it all in one event listener
addBtnYow.addEventListener("click",function(){
    var paragraph = document.createElement("p");
    paragraph.innerText = inputYow.value;
    contenedorYow.appendChild(paragraph)
    inputYow.value="";
    
    //eventListener on the paragraph to mark tasks as done
    paragraph.addEventListener("click",function(){
        paragraph.style.textDecoration = "line-through";
    })
    //eventListener on the paragraph to remove it from the list 
    paragraph.addEventListener("dblclick",function(){
        console.log("removing element...") 
        contenedorYow.removeChild(paragraph)
    })
})
//alternative to clicking the button is to press the enter key
inputYow.addEventListener("keydown",function(e){
        if(e.key === "Enter"){
            console.log("YOOOW")
            var paragraph = document.createElement("p");
            paragraph.innerText = inputYow.value;
            contenedorYow.appendChild(paragraph)
            inputYow.value="";
        }
          //eventListener on the paragraph to mark tasks as done
    paragraph.addEventListener("click",function(){
        paragraph.style.textDecoration = "line-through";
    })
    //eventListener on the paragraph to remove it from the list 
    paragraph.addEventListener("dblclick",function(){
        console.log("removing element...") 
        contenedorYow.removeChild(paragraph)
    })
})

