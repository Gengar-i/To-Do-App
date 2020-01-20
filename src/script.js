// User clicked on the add button
document.querySelector('#add-button').addEventListener('click', () => {
    const value = document.querySelector('#add-input').value;
    if(value) addItemToDo(value);
    document.querySelector('#add-input').value = "";
});

function addItemToDo(text) {
    const list = document.querySelector('#todo')
    
    const item = document.createElement('li');
    
    const liText = document.createElement('div');
    liText.classList.add('li-text');
    liText.innerText = text;

    const buttons = document.createElement('div');
    buttons.classList.add('todo-button');

    const check = document.createElement('input');
    check.classList.add('todo-button_check');
    check.setAttribute("type", "checkbox");

    check.addEventListener('click', checkItem);

    const remove = document.createElement('i');
    remove.classList.add('todo-button_delete');
    remove.classList.add('icon-trash-empty');
    remove.setAttribute("alt", "delete button");

    remove.addEventListener('click', removeItem);

    buttons.appendChild(check);
    buttons.appendChild(remove);
    item.appendChild(liText);
    item.appendChild(buttons);
    list.insertBefore(item, list.childNodes[0]);
}

function removeItem(e) {
    const item = e.target.parentNode.parentNode;
    const list = item.parentNode;
    list.removeChild(item);
}

function checkItem(e) {
    const item = e.target.parentNode.parentNode;
    const list = item.parentNode;
    const id = list.id; 
    const target = (id === 'todo') ? document.getElementById('complete') : document.getElementById('todo');
    list.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);
}


