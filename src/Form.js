import { useState } from "react";

export default function Form({ onhandleitems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onhandleitems(newItem);

    setDescription("");
    setQuantity(1);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="add-form">
        <h3>What do you need for your 😍 trip</h3>
        <div>
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((e) => (
              <option value={e} key={e}>
                {" "}
                {e}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Item..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button>Add</button>
        </div>
      </div>
    </form>
  );
}
