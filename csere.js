let isBlue = false;
document.getElementById("element_0").onclick = function(){
    isBlue=!isBlue;
    if(isBlue){
        document.getElementById("element_0").classList.add("blue");
    } else{
        document.getElementById("element_0").classList.remove("blue");
    }
}

let isHover = false;
document.getElementById("element_1").onmouseover = function(){
    isHover = true;
    renderElement_1();   
}
document.getElementById("element_1").onmouseout = function(){
    isHover = false;
    renderElement_1();   
}

function renderElement_1(){
    if(isHover){
      document.getElementById("element_1").style.backgroundColor = "red";
    } else {
         document.getElementById("element_1").style.backgroundColor = "";
    }
    console.log(isHover);
    
}