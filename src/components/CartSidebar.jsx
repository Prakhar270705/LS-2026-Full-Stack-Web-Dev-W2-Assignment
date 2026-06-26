export default function CartSidebar({ cart, menuItems, onClose, onAdd, onRemove, onCheckout }) {
  const cartItems = menuItems.filter(item => cart[item.id] > 0)
  const total = cartItems.reduce((sum, item) => sum + item.price * cart[item.id], 0)

  return (
    <div className="cart-overlay">
      <div className="cart-sidebar">
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button onClick={onClose} className="close-btn">✕</button>
        </div>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Cart is empty</p>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <span className="cart-item-name">{item.name}</span>
                  <div className="cart-item-right">
                    <div className="qty-control">
                      <button onClick={() => onRemove(item.id)}>-</button>
                      <span>{cart[item.id]}</span>
                      <button onClick={() => onAdd(item.id)}>+</button>
                    </div>
                    <span className="cart-item-price">₹{item.price * cart[item.id]}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <strong>Total: ₹{total}</strong>
            </div>
            <button className="checkout-btn" onClick={onCheckout}>Place Order</button>
          </>
        )}
      </div>
    </div>
  )
}
