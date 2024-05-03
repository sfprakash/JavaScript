function bNameValidate()
{
    var bName = document.getElementById("book-name");
    var re_bName = /\d/;
    if(re_bName.test(bName.value) || bName.value=="")
    {
        bName.style.border="0.1rem solid red";
        document.getElementById("bName-err").innerHTML="invalid book name";
        document.getElementById("bName-err").style.color="red";
        
    }
    else{
        bName.style.border="0.1rem solid green";
        document.getElementById("bName-err").innerHTML="valid";
        document.getElementById("bName-err").style.color="green";
    }
}

function emailValidate()
{
    var email = document.getElementById("email");
    var re_email = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
    if(!re_email.test(email.value))
    {
        document.getElementById("email-err").innerHTML="invalid email";
        document.getElementById("email-err").style.color="red";
        email.style.border="0.1rem solid red";
    }
    else{
        document.getElementById("email-err").innerHTML="valid email";
        document.getElementById("email-err").style.color="green";
        email.style.border="0.1rem solid green";
    }      
}

function aNameValidate()
{
    var aName = document.getElementById("auth-name");
    var re = /^[\d]*[!@#$%^&*,.]*$/;
    if(re.test(aName.value))
    {
        aName.style.border="0.1rem solid red";
        document.getElementById("aName-err").innerHTML="invalid name";
        document.getElementById("aName-err").style.color="red";
    }
    else{
        aName.style.border="0.1rem solid green";
        document.getElementById("aName-err").innerHTML="valid name";
        document.getElementById("aName-err").style.color="green";
    }
}
function pubYearValidate()
{
    var year = document.getElementById("pub-year");
    
    if(year.value>=1000 && year.value<=2100){
        year.style.border="0.1rem solid green";
        document.getElementById("pub-err").innerHTML="valid year";
        document.getElementById("pub-err").style.color="green";
    }
    else{
        year.style.border="0.1rem solid red";
        document.getElementById("pub-err").innerHTML="invalid year";
        document.getElementById("pub-err").style.color="red";
    }
    
}

function priceValidate(){
    var price = document.getElementById("price");
    var re_price = /[A-Za-z]/;

    if(re_price.test(price.value)){
        document.getElementById("price-err").innerHTML="Alphabet values not allowed";
        document.getElementById("price-err").style.color="red";
        price.style.border="0.1rem solid red";
    }
    else{
        document.getElementById("price-err").innerHTML="valid price";
        document.getElementById("price-err").style.color="green";
        price.style.border="0.1rem solid green";
    }
}