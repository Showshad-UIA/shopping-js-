document.getElementById('login-submit').addEventListener('click',function(){
    // get user mail
    const userEmail=document.getElementById('user-email');
    const userMailId= userEmail.value ;
    userEmail.value='';
    //  get password 
    const userPassword= document.getElementById('user-password');
    const password= userPassword.value;
    userPassword.value='';
    
//    check email password
    if(userMailId=='raihan@gmail.com' && password=='raihan'){
        console.log('valid user');
        window.location.href='transiction.html';
    }
    else{
        console.log('Invalid user');
    }
    

})

