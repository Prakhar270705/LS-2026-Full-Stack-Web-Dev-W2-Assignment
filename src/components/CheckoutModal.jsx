import { useState } from "react"

export default function CheckoutModal({ totalPrice, totalItems, onClose, onConfirm }) {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ name: "", address: "", phone: "", payment: "upi" })

  function handleSubmit() {
    if (!form.name || !form.address || !form.phone) return
    setStep(2)
    setTimeout(() => {
      onConfirm()
    }, 3000)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        {step === 1 ? (
          <>
            <div className="modal-header">
              <h2>Checkout</h2>
              <button className="close-btn" onClick={onClose}>✕</button>
            </div>
            <div className="modal-order-summary">
              <span>🧾 {totalItems} items · Total: <strong>₹{totalPrice}</strong></span>
            </div>

            <div className="checkout-form">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="e.g. Rahul Sharma"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              />

              <label>Delivery Address</label>
              <input
                type="text"
                placeholder="House no, Street, City"
                value={form.address}
                onChange={e => setForm(f => ({ ...f, address: e.target.value }))}
              />

              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="10-digit mobile number"
                value={form.phone}
                onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
              />

              <label>Payment Method</label>
              <div className="payment-options">
                {[
                  { val: "upi", label: "📱 UPI" },
                  { val: "card", label: "💳 Card" },
                  { val: "cash", label: "💵 Cash on Delivery" },
                ].map(opt => (
                  <button
                    key={opt.val}
                    type="button"
                    className={`pay-opt ${form.payment === opt.val ? "active" : ""}`}
                    onClick={() => setForm(f => ({ ...f, payment: opt.val }))}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              <button className="checkout-btn" onClick={handleSubmit}>
                Confirm Order · ₹{totalPrice}
              </button>
            </div>
          </>
        ) : (
          <div className="order-success">
            <div style={{ fontSize: "48px" }}>🎉</div>
            <h2>Order Placed!</h2>
            <p>Your food is being prepared.</p>
            <p style={{ color: "#ff6600", marginTop: "8px" }}>Estimated time: 25–35 min</p>
          </div>
        )}
      </div>
    </div>
  )
}
