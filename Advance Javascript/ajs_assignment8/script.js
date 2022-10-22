function preloader() {
    let sum = 0;
    const prev_total = document.querySelectorAll(".price-value");
    for (let i = 0; i < prev_total.length; i++) {
        sum += parseInt(prev_total[i].value);
    }
    return sum;

};
let total = preloader();
document.querySelector('#value').innerText = total;

const input = document.querySelectorAll('.price-value')
input[0].addEventListener('change', function (e) {
    console.log(preloader());
    document.querySelector('#value').innerText = preloader();
})
input[1].addEventListener('change', function (e) {
    console.log(preloader());
    document.querySelector('#value').innerText = preloader();
})