
$(document).ready(function(){


   
    
    $("#btn").click(function(){
        var uN = $("#uName").val();
        console.log(uN );

        var uP = $("#uPass").val();

        console.log(uP );
        if(uN == "hackeru"&& uP=="hackeru123" ){
    console.log(uN +" "+ uP);
    alert("Welcome");
}else{
    console.log(uN +" "+ uP);
    alert("Try Again");    
}

    });



});


/*


function login() {
    console.log("into");
 var uN = document.getElementById("uName").value;
    var uP = document.getElementById("uPass").value;
    if(uN == "hackeru"&& uP=="hackeru123" ){
        console.log(uN +" "+ uP);
        alert("Welcome");
    }

    }

*/