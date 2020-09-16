console.log('Welcome to the Day9 ');

function validation() {
    const username = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    // const country = document.getElementById('country').value;
    // const state = document.getElementById('state').value;
    // const city = document.getElementById('city').value;
    // const postal = document.getElementById('postalcode').value;
    // const address = document.getElementById('address').value;
    // const mobile = document.getElementById('mobile').value;

    const namemsg = document.getElementById('namemsg');
    const emailmsg = document.getElementById('emailmsg');
    const passmsg = document.getElementById('passmsg');

    // const countrymsg = document.getElementById('countrymsg');
    // const statemsg = document.getElementById('statemsg');
    // const citymsg = document.getElementById('citymsg');
    // const postalmsg = document.getElementById('postalmsg');
    // const addmsg = document.getElementById('addmsg');
    // const mobilemsg = document.getElementById('mobilmsg');

    if(username == '') {
        namemsg.innerHTML = 'Username cannot be empty';
        return false;
    }
    if(username.length < 4) {
        namemsg.innerHTML = 'Username cannot be less-than 4 characters';
        return false;
    }
    if(email == '') {
        emailmsg.innerHTML = 'email cannot be empty';
        return false;
    }
    if(!email.includes('@')) {
        emailmsg.innerHTML = 'email should contain @';
        return false;
    }
    if(pass == '') {
        passmsg.innerHTML = 'Password cannot be empty';
        return false;
    }
    return true;
    // if(country == '') {
    //     countrymsg.innerHTML = 'Country name Should not be empty';
    //     return false;
    // }
    // if(state == '') {
    //     statemsg.innerHTML = 'State name should not be empty';
    //     return false;
    // }
    // if(city == '') {
    //     citymsg.innerHTML = 'City name cannot be empty';
    //     return false;
    // }
    // if(postal == '') {
    //     postalmsg.innerHTML = 'postal Code cannot be empty';
    //     return false;
    // }
    // if(address == '') {
    //     addmsg.innerHTML = 'Address cannot be empty';
    //     return false;
    // }
    // if(mobile == '') {
    //     mobilemsg.innerHTML = 'Mobile number cannot be empty';
    //     return false;
    // }
    // if(!mobile.includes('+')) {
    //     mobilemsg.innerHTML = 'Mobile number should contain +';
    //     return false;
    // }
}

function myFunction() {
    let x = document.getElementById('pass');
    if(x.type == 'password') x.type = 'text';
    else x.type = 'password';
}

function mySubmit(){
    if(validation()){
        alert("Registration is Completed successfully.");
    }
    else{
        alert("Registration is not Completed successfully.");
    }
}