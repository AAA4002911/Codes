let api_data = null;
const display = document.querySelector('#display-section2');

function info(data) {
    // console.log(data) // API fetched result
    const name = data.name.first + ' ' + data.name.last;
    document.getElementById('name').innerText = name;
    document.getElementById('photo').innerHTML = `<img src="${data.picture.large}" alt="${name} picture">`;
    api_data = data;
}

async function getUser() {
    let response = await fetch('https://randomuser.me/api/');
    let data = await response.json();
    return data;
}
getUser().then(function(data) {info(data.results[0])});

function age_display() {
    display.innerHTML = '<h1>Additional Info</h1>';
    let p = document.createElement('p');
    p.innerText = `Age: ${api_data.dob.age}`;
    display.appendChild(p);
}
function email_display() {
    display.innerHTML = '<h1>Additional Info</h1>';
    let p = document.createElement('p');
    p.innerText = `Email: ${api_data.email}`;
    display.appendChild(p);
}
function phone_display() {
    display.innerHTML = '<h1>Additional Info</h1>';
    let p = document.createElement('p');
    p.innerText = `Phone No: ${api_data.phone}`;
    display.appendChild(p);
}

function getUser_new() {
    display.innerHTML = '<h1>Additional Info</h1>';
    async function getUser() {
        let response = await fetch('https://randomuser.me/api/');
        let data = await response.json();
        return data;
    }
    getUser().then(function(data) {info(data.results[0])});
}

document.getElementById('age').addEventListener('click', age_display);
document.getElementById('email').addEventListener('click', email_display);
document.getElementById('phone').addEventListener('click', phone_display);
document.getElementById('getUser').addEventListener('click', getUser_new);