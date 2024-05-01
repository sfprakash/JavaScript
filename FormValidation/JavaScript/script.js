function validate()
{
    var fname = document.forms["biodata"]["fname"].value;
    var lname = document.forms["biodata"]["lname"].value;
    // var regx = "/[a-zA-Z0-9._%+-]+@+[a-zA-Z0-9._%+-]+.+[a-zA-Z]{2,}$/";
    if(fname == "")
    {
        document.getElementById("fname").style.border="0.1rem solid red";
        document.getElementById("name_error").innerHTML="invalid first name";
        return false;
    }
    if(lname == "")
    {
        document.getElementById("lname").style.border="0.1rem solid red";
        document.getElementById("name_error").innerHTML="invalid last name";
        return false;
    }

    var email = document.getElementById("email");
    var emailError = document.getElementById("email_error");
    if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Please enter a valid email";
        email.style.border ="0.1rem solid red";
        return false;
    }

    var phone = document.getElementById("phoneNumber");
    var isValid = phone.value.match(/^\d{10}$/);
    if(!isValid)
    {
        phone.style.border="0.1rem solid red";
        document.getElementById("phnum_error").innerHTML="Enter 10 digit number";
        return false;
    }
    
    var password = document.getElementById("password");
    var pass_re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z0-9!@#$%^&*]){8,15}$/;
    if(!pass_re.match(password.value))
    {
        password.style.border="0.1rem solid red";
        document.getElementById("pass_error").innerHTML="Password must contain atleat one upper, lowercase, number digit, special character and minimum of 8 characters";
        return false;
    }else{
        alert("valid");
    }
}