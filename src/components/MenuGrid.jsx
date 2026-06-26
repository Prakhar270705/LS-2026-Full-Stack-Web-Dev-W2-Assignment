import FoodCard from "./FoodCard"

export default function MenuGrid({ items, cart, onAdd, onRemove }) {
  if (items.length === 0) {
    return <p style={{ textAlign: "center", marginTop: "40px" }}>No items found</p>
  }

  return (
    <div className="menu-grid">
      {items.map(item => (
        <FoodCard
          key={item.id}
          item={item}
          quantity={cart[item.id] || 0}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      ))}
    </div>
  )
}
