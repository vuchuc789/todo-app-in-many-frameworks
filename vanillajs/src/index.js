const list = document.getElementById('list');
const input = document.getElementById('input');
const button = document.getElementById('button');

const addItem = (str) => {
  const item = document.createElement('li');

  item.innerText = str;

  list.appendChild(item);

  input.value = '';
};

const items = JSON.parse(localStorage.getItem('todo-list') || '[]');

items.forEach((str) => {
  addItem(str);
});

button.addEventListener('click', () => {
  const str = input.value.trim();

  if (str) {
    addItem(str);

    items.push(str);
    localStorage.setItem('todo-list', JSON.stringify(items));
  }
});
