// form-validation javascript

function validation(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;

    if(name==""){
        document.getElementById("yourname").innerHTML="<i class='fa fa-warning'></i>This field is required<br><br>";
        return false;
    }
    if(email==""){
        document.getElementById("youremail").innerHTML="<i class='fa fa-warning'></i>This field is required<br><br>";
        return false;
    }
    else{
        document.write("<h1>Congratulations form submitted!</h1>");
    }
}