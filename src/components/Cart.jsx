function Cart({ cart, onUpdateQuantity, onRemoveItem, onProceedToPayment, onBackToMenu }) {
  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>🛒 YOUR CART</h1>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p className="empty-cart-icon">🛒</p>
          <p className="empty-cart-text">Your cart is empty</p>
          <button className="btn btn-primary" style={{ marginTop: '1.5rem' }} onClick={onBackToMenu}>
            Back to Menu
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p className="cart-item-price">₹{item.price} each</p>
                </div>

                <div className="quantity-control">
                  <button
                    className="quantity-btn"
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    −
                  </button>
                  <span className="quantity-display">{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>

                <button
                  className="btn-remove"
                  onClick={() => onRemoveItem(item.id)}
                  title="Remove item"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="cart-total">
              <span className="total-label">TOTAL:</span>
              <span className="total-amount">₹{totalPrice}</span>
            </div>

            <button 
              className="btn btn-proceed"
              onClick={onProceedToPayment}
            >
              Proceed to Payment ✓
            </button>
            
            <button
              className="btn btn-back"
              onClick={onBackToMenu}
              style={{ marginTop: '0.75rem' }}
            >
              ← Back to Menu
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
