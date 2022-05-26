import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [str, setStr] = useState('');

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem('todo-list') || '[]'));
  }, []);

  useEffect(() => {
    if (items.length) {
      localStorage.setItem('todo-list', JSON.stringify(items));
    }
  }, [items]);

  return (
    <>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <input
        value={str}
        onChange={(e) => {
          setStr(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (str) {
            setItems((prev) => [...prev, str]);
            setStr('');
          }
        }}
      >
        Add todo
      </button>
    </>
  );
}

export default App;
