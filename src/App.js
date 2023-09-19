import { useState } from "react";
import Stats from "./Stats";
import PackingList from "./PackingList";
import Logo from "./Logo";
import Form from "./Form";

export default function App() {
  const [items, setItems] = useState([]);

  function handleItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function toggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onhandleitems={handleItems} />
      <PackingList
        items={items}
        onhandledelete={handleDelete}
        ontoggleItem={toggleItem}
        onhandleClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
