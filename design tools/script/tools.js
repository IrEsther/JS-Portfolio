$(document).ready(function(){


$("#btn-1").click(function(){
    console.log("in");
    var color =$("#bgColor").val();
    var w =$("#inWidth").val();
    var h =$("#inHeight").val();
    var t =$("#inText").val();
    var c =$("#textColor").val();
    var bl =$("#inBorder1").val();
    var cb =$("#borderColor").val();
   
    $(".myBox").html(t);


    $(".myBox").css({
        "background-color": color,
        "width": w +"px",
        "height": h+"px",
        "color": c,
        "border": bl+"px solid black",
        "border-color": cb

    })


}
);
	
});





/*
function disignTool(){
    console.log("into");
    var color = document.getElementById("bgColor").value;
    document.getElementById("element").style.backgroundColor = color;
    var w = document.getElementById("inWidth").value;
    console.log(w);
    //w = PX(w);
    document.getElementById("element").style.width = w+"px";
    var h = document.getElementById("inHeight").value;
    console.log(h);
    //h = PX(h);
    document.getElementById("element").style.height = h+"px";
    var t = document.getElementById("inText").value;
    console.log(t);
    document.getElementById("element").innerHTML = t;
    var c = document.getElementById("textColor").value;
    document.getElementById("element").style.color = c;
    var bl = document.getElementById("inBorder1").value;
    console.log(bl);
    document.getElementById("element").style.border = bl+"px solid black";
    var bs = document.getElementById("borderStyle").value;
    document.getElementById("element").style.borderLeftStyle = bs+"px dotted red";
    console.log(bs);
    var cb = document.getElementById("borderColor").value;
    document.getElementById("element").style.borderColor = cb;
}
   
*/


/*


function getBackgroundColor() {
    console.log("into");
    var color = document.getElementById("bgColor").value;
    document.getElementById("element").style.backgroundColor = color;
}
function getWidth() {
    console.log("into");
    var w = document.getElementById("inWidth").value;
    console.log(w);
    //w = PX(w);
    document.getElementById("element").style.width = w+"px";
}
function getHeight() {
    console.log("into");
    var h = document.getElementById("inHeight").value;
    console.log(h);
    //h = PX(h);
    document.getElementById("element").style.height = h+"px";
}
function getText() {
    console.log("into");
    var t = document.getElementById("inText").value;
    console.log(t);
    document.getElementById("element").innerHTML = t;
}
function getTextColor() {
    console.log("into");
    var c = document.getElementById("textColor").value;
    document.getElementById("element").style.color = c;
}
function getBorder() {
    console.log("into");
    var bl = document.getElementById("inBorder1").value;
    console.log(bl);
    document.getElementById("element").style.border = bl+"px solid black";
   
}
function getBorderStyle() {
    console.log("into");
    var bs = document.getElementById("borderStyle").value;
    document.getElementById("element").style.borderLeftStyle = bs+"px dotted red";
    console.log(bs);
}

function getBorderColor() {
    console.log("into");
    var cb = document.getElementById("borderColor").value;
    document.getElementById("element").style.borderColor = cb;
}*/