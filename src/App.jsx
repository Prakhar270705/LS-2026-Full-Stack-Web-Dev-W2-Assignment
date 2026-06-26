import { useState } from "react"
import MenuGrid from "./components/MenuGrid"
import CartSidebar from "./components/CartSidebar"
import CheckoutModal from "./components/CheckoutModal"

const menuItems = [
  { id: 1, name: "Samosa", price: 30, image: "/samosa.png", description: "Crispy fried pastry with spiced potato filling. Comes with green chutney." },
  { id: 2, name: "Paneer Butter Masala", price: 220, image: "/paneer.png", description: "Paneer in rich tomato and butter gravy. Best with naan or rice." },
  { id: 3, name: "Masala Dosa", price: 90, image: "/dosa.png", description: "Crispy dosa with potato masala inside. Served with sambar and chutney." },
  { id: 4, name: "Veg Biryani", price: 160, image: "/biryani.png", description: "Basmati rice cooked with mixed vegetables and whole spices." },
  { id: 5, name: "Mango Lassi", price: 70, image: "/lassi.png", description: "Thick and sweet mango lassi made with fresh curd and alphonso mango." },
]

export default function App() {
  const [cart, setCart] = useState({})
  const [cartOpen, setCartOpen] = useState(false)
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [search, setSearch] = useState("")

  function addToCart(id) {
    setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
  }

  function removeFromCart(id) {
    setCart(prev => {
      const updated = { ...prev }
      if (updated[id] > 1) updated[id] -= 1
      else delete updated[id]
      return updated
    })
  }

  function handleCheckout() {
    setCartOpen(false)
    setCheckoutOpen(true)
  }

  function handleOrderConfirm() {
    setCart({})
    setCheckoutOpen(false)
  }

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0)
  const totalPrice = menuItems.reduce((sum, item) => sum + (item.price * (cart[item.id] || 0)), 0)

  const filtered = menuItems.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="app">
      <header className="header">
        <h1>🍛 Food Order</h1>
        <div className="header-right">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="search-input"
          />
          <button className="cart-button" onClick={() => setCartOpen(true)}>
            Cart ({totalItems})
          </button>
        </div>
      </header>

      <MenuGrid items={filtered} cart={cart} onAdd={addToCart} onRemove={removeFromCart} />

      {cartOpen && (
        <CartSidebar
          cart={cart}
          menuItems={menuItems}
          onClose={() => setCartOpen(false)}
          onAdd={addToCart}
          onRemove={removeFromCart}
          onCheckout={handleCheckout}
        />
      )}

      {checkoutOpen && (
        <CheckoutModal
          totalPrice={totalPrice}
          totalItems={totalItems}
          onClose={() => setCheckoutOpen(false)}
          onConfirm={handleOrderConfirm}
        />
      )}
    </div>
  )
}
