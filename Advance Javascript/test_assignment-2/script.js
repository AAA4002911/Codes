let sum = 50;
let val1 = 0;
let val2 = 50;

const max_sum = document.getElementById('max-sum');
max_sum.addEventListener('click', function(e) {
    sum = parseInt(e.target.value);
})

document.getElementById('slider1').addEventListener('click', function(e) {
    val1 = (e.target.value);
    document.getElementById('range-a-value').innerText = val1;
    document.getElementById('slider1').setAttribute('max', sum - parseInt(val2));
    document.getElementById('sum').innerText = parseInt(val1) + parseInt(val2);
})
document.getElementById('slider2').addEventListener('click', function(e) {
    val2 = (e.target.value);
    document.getElementById('range-b-value').innerText = val2;
    document.getElementById('slider2').setAttribute('max', sum - parseInt(val1));
    document.getElementById('sum').innerText = parseInt(val1) + parseInt(val2);
})