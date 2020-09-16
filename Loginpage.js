console.log('Welcome to the Day8 ');

function validation() {
    const username = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const namemsg = document.getElementById('namemsg');
    const emailmsg = document.getElementById('emailmsg');
    if(username == '') {
        namemsg.innerHTML = 'Username should not be empty';
        return false;
    }
    if(username.length < 4) {
        namemsg.innerHTML = 'Username should not be less-than 4 characters';
        return false;
    }
    if(email == '') {
        emailmsg.innerHTML = 'email should not be empty';
        return false;
    }
    if(!email.includes('@')) {
        emailmsg.innerHTML = 'email should contain @';
        return false;
    }
}

function myFunction() {
    let x = document.getElementById('pass');
    if(x.type == 'password') x.type = 'text';
    else x.type = 'password';
}