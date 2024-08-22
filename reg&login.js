function validation() {
    var errors = [];

    if (document.Formfill.Username.value == "") {
        errors.push("Enter Username*");
    } else if (document.Formfill.Username.value.length < 6) {
        errors.push("Username must be at least six letters*");
    }

    if (document.Formfill.Email.value == "") {
        errors.push("Enter your Email*");
    }

    if (document.Formfill.Password.value == "") {
        errors.push("Enter your Password*");
    } else if (document.Formfill.Password.value.length < 6) {
        errors.push("Password must be 6-digits");
    }

    if (document.Formfill.CPassword.value == "") {
        errors.push("Enter confirm password");
    } else if (document.Formfill.CPassword.value !== document.Formfill.Password.value) {
        errors.push("Password doesn't match");
    }

    if (errors.length > 0) {
        document.getElementById("result").innerHTML = errors.join("<br>");
        return false;
    } else {
        popup.classList.add("open-slide");
        return false;
    }
}


 var popup=document.getElementById('popup');
 function CloseSlide(){
     popup.classList.remove("open-slide")
 }