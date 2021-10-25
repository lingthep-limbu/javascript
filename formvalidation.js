function firstnameValidate(){
    let first_name = document.getElementById('firstname').value
    if(first_name==""){
        displaymsg("firstname is required", "fnamemsg", "red")
        return false
    }
    
    else if(!first_name.match(/^([a-zA-Z])+$/)){
        displaymsg("firstname ony accepts alphabet", "fnamemsg", "red")
    }

    else if(first_name.length<3){
        displaymsg("firstname must be more than 2 characters", "fnamemsg", "red")
        return false
    }
    else{
        displaymsg("valid firstname", "fnamemsg", "green")
        return true
    }
}


//function for the lastname

function lastnameValidate(){
    let last_name = document.getElementById('lastname').value
    if(last_name==""){
        displaymsg("lastname is required", "lnamemsg", "red")
        return false 
    }

    else if(!last_name.match(/^([a-zA-Z])+$/)){
        displaymsg("lastname only accepts alphabets", "lnamemsg", "red")
        return false
    }

    else if(last_name.length<3){
        displaymsg("lastname must be more than 2 characters", "lnamemsg", "red")
        return false
    }
    else{
        displaymsg("valid lastname", "lnamemsg", "green")
        return true
    }
}

//email validation

function emailValidate(){
    let email = document.getElementById('email').value
    if(email==""){
        displaymsg("email is required", "emailmsg", "red")
        return false 
    }

    // 12abc.abc@gmail.com
    else if(!email.match(/^([a-z0-9])[a-z0-9\#\_\-\.]+\@+(([a-z])+\.)+([a-z])+$/)){
        displaymsg("invalid email format", "emailmsg", "red")
        return false

    }

    else{
        displaymsg("valid email", "emailmsg", "green")
        return true
    }
}

// function for password validation
function passwordValidate(){
    let password = document.getElementById('password').value
    if(password==""){
        displaymsg("password is required", "passwordmsg", "red")
        return false 
    }

    // 12abc.abc@gmail.com
    else if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#$@%!?&]).{8}$/)){
        displaymsg("password must be of 8 characters including one uppercase, one lowercase one digit ", "emailmsg", "red")
        return false

    }

    else{
        displaymsg("valid password", "passwordmsg", "green")
        return true
    }
}

    function displaymsg(msg, id, colorValue){
        document.getElementById(id).innerHTML=msg
        document.getElementById(id).style.color=colorValue
    }

    function validForm(){
        if(firstnameValidate()&&lastnameValidate()&&emailValidate()&&passwordValidate()){
            return true
        }
    }


 