const pics = ['./images/1.jpg', './images/2.jpg', './images/3.jpg', './images/4.jpg', './images/5.jpg'];

function showImage() {
    const pic = document.querySelectorAll('div');
    var index = Math.floor(Math.random() * pics.length);
    var img = pics[index];
    let randomIndex = new Set();
    while (randomIndex.size != pics.length) {
        randomIndex.add(Math.floor(Math.random() * pics.length));
    }
    randomIndex = [...randomIndex];
    // Creating one duplicate
    randomIndex.splice(Math.floor(Math.random() * pics.length), 0, index)
    let id = 1;
    for (let i = 0; i < pics.length + 1; i++) {
        let image = document.createElement('img');
        image.setAttribute('src', pics[randomIndex[i]]);
        image.setAttribute('id', id); id++;
        image.setAttribute('data-ns-test', `img${randomIndex[i] + 1}`);
        pic[i].appendChild(image);
    }
}
showImage();

let count = 0;
let first_image;
let second_image;
function selection(event) {
    if (count == 0) {
        document.getElementsByTagName('h3')[0].style.display = 'none';
        document.getElementById('reset').style.display = 'inline-block';
        first_image = event.target;
        count++;
    }
    else if (count == 1 && first_image.id != event.target.id) {
        second_image = event.target;
        document.getElementById('btn').style.display = 'inline-block';
        count++;
    }
    else {
        document.getElementById('btn').style.display = 'none';
    }
}

let image = document.querySelectorAll('img');
image.forEach(img => {
    img.addEventListener('click', function (event) { selection(event) })
})

document.getElementById('reset').addEventListener('click', function () {
    count = 0;
    document.getElementById('reset').style.display = 'none';
    document.getElementById('btn').style.display = 'none';
    document.getElementById('para').innerText = '';
    document.getElementsByTagName('h3')[0].style.display = 'block';
})
document.getElementById('btn').addEventListener('click', function () {
    let display = document.getElementById('para');
    if (first_image.attributes["data-ns-test"].value == second_image.attributes["data-ns-test"].value) {
        display.innerText = 'You are a human. Congratulations!';
    }
    else {
        display.innerText = `We can't verify you as a human. You selected the non-identical tiles`;
    }
})