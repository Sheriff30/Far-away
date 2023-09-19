export default function Item({ item, handleDelete, ontoggleItem }) {
  return (
    <li>
      <input type="checkbox" onChange={() => ontoggleItem(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDelete(item.id)}>❌</button>
    </li>
  );
}
