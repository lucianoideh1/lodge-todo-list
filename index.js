let contenedorYow = document.querySelector(".container");
let tituloYow = document.querySelector(".title");
let inputYow = document.querySelector(".input-text");
let addBtnYow = document.querySelector(".add-btn");

let changeColorBtn = document.querySelector(".change-color-tool");

inputYow.addEventListener("click",()=>console.log("you are clicking the input"))
addBtnYow.addEventListener("click",()=>console.log("you are clicking the button"))


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

//set a group of colors:

let colorArr= ["#e29e6d","#b09859","#2ea41b","#fb6310","#d9d417","#048c8f","#3d1295","#3679f2","#240b8e","#a49040","#a49040","#59c378","#5d3248","#7d5d48","#39667b ","#15262e","#8a9397"]

//event listener on the change color tool to aply changes on the body
changeColorBtn.addEventListener("click",function(){
    let aleatorio = Math.floor(Math.random() * colorArr.length);
    document.body.style.backgroundColor = colorArr[aleatorio];
})