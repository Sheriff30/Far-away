import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onhandledelete,
  ontoggleItem,
  onhandleClearList,
}) {
  const [sortedBy, setSortedBy] = useState("input");

  let sortedItems;

  if (sortedBy === "input") sortedItems = items;
  if (sortedBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortedBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((e) => (
          <Item
            handleDelete={onhandledelete}
            item={e}
            key={e.id}
            ontoggleItem={ontoggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortedBy} onChange={(e) => setSortedBy(e.target.value)}>
          <option value="input"> Sort by input order </option>
          <option value="description"> Sort by input description </option>
          <option value="packed"> Sort by packed status </option>
        </select>
        <button onClick={() => onhandleClearList()}>Clear list </button>
      </div>
    </div>
  );
}
