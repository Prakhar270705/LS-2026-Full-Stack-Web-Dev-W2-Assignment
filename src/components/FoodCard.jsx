export default function FoodCard({ item, quantity, onAdd, onRemove }) {
  return (
    <div className="food-card">
      <img src={item.image} alt={item.name} className="food-image" />
      <div className="food-info">
        <h3>{item.name}</h3>
        <p className="food-desc">{item.description}</p>
        <div className="card-bottom">
          <span className="price">₹{item.price}</span>
          {quantity === 0 ? (
            <button className="add-btn" onClick={() => onAdd(item.id)}>Add</button>
          ) : (
            <div className="qty-control">
              <button onClick={() => onRemove(item.id)}>-</button>
              <span>{quantity}</span>
              <button onClick={() => onAdd(item.id)}>+</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
