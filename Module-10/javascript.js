var box = document.getElementById("box");
function growFunction(){
    box.style.height="250px";
    box.style.width="250px";

}
function ResetFunction(){
    box.style.height="150px";
    box.style.width="150px";
    box.style.backgroundColor="orange";
    box.style.opacity = 1;
    box.style.visibility = "visible";
}
function FadeFunction(){
    box.style.opacity = 1
    var fadeEffect = setInterval(function(){
        if (box.style.opacity > 0) {
            box.style.opacity -= 0.1;
        }else{
            clearInterval(fadeEffect);
        }
    }, 200);
}
function show(){
    if(document.getElementById)
    box.style.visibility = "visible";
}
function hide(){
    box.style.visibility = "hidden";
}
function BlinkFunction (){
    for (var i = 0; i < 4500; i=i+900) {
        setTimeout("hide()", i);
        setTimeout("show()", i+450);
    }
}
function BlueFunction(){
    if (box.style.background != "blue"){
        box.style.background = "blue";
    }

}