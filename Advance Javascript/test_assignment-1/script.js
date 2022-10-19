document.querySelector('#add-todo').addEventListener('click', function () {
    const input = document.querySelector('#todo-input');
    const li = document.createElement('li');
    li.innerText = input.value;
    document.querySelector('#todo-holder').appendChild(li);
    localStorage.setItem(input.value, input.value);
    input.value = '';
})

for (let i = 0; i < localStorage.length; i++) {
    const li = document.createElement('li');
    li.innerText = (localStorage.key(i));
    document.querySelector('#todo-holder').appendChild(li);
}