export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        Start adding some items to your packinf list 🚀
      </footer>
    );

  const itemsNum = items.length;
  const packedNum = items.filter((item) => item.packed).length;
  const precentage = Math.round((packedNum / itemsNum) * 100);

  return (
    <footer className="stats">
      {precentage === 100 ? (
        "You got everything! Ready to go ✈️ "
      ) : (
        <em>
          {" "}
          💼 You have {itemsNum} items on your list , and you already packed{" "}
          {packedNum} ({precentage}%)
        </em>
      )}
    </footer>
  );
}
