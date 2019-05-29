$(document).ready(function(){


$("#text1").click(function(){
    $("#demo-1").css({
        "color":"black",
    "font-size": "100%",
    "background": "white"
    });
});

$("#text2").click(function(){
    $("#demo-1").css({
        "color":"magenta",
    "font-size": "150%"
    });
});
$("#text3").click(function(){
    $("#demo-1").css({
        "color":"aquamarine",
    "font-size": "200%",
    "background": "magenta"
    });
});

    $("#hide").click( function(){
        $("#demo-1").hide();
    });
    
    $("#show").click( function(){
        $("#demo-1").show();
    });


/*
function acces100(){
    //   console.log("into");
       var a = document.getElementById("demo-1");
       a.style.fontSize = "40px";
       
   }
   function acces150(){
       var a = document.getElementById("demo-1");
       a.style.fontSize = "400px";
      // console.log("into");
   }
   function acces200(){
       var a = document.getElementById("demo-1");
       a.style.fontSize = "100px";
    //  console.log("into");
   }*/
});