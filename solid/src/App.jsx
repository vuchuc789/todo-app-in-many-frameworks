import { createEffect, createSignal, Index, onMount } from 'solid-js';

function App() {
  const [items, setItems] = createSignal([]);
  const [str, setStr] = createSignal([]);

  onMount(() => {
    setItems(JSON.parse(localStorage.getItem('todo-list') || '[]'));
  });

  // createEffect(() => {
  //   localStorage.setItem('todo-list', JSON.stringify(items()));
  // });

  const addItem = () => {
    if (str()) {
      setItems([...items(), str()]);
      localStorage.setItem('todo-list', JSON.stringify(items()));
      setStr('');
    }
  };

  return (
    <>
      <ul>
        <Index each={items()}>{(item) => <li>{item}</li>}</Index>
      </ul>
      <input
        value={str()}
        onChange={(e) => {
          setStr(e.target.value);
        }}
      />
      <button onClick={addItem}>Add todo</button>
    </>
  );
}

export default App;
