function Cart({ cart, onUpdateQuantity, onRemoveItem, onProceedToPayment, onBackToMenu }) {
  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <button className="btn-back" onClick={onBackToMenu}>
          ← Back to Menu
        </button>
        <h1>🛒 Your Cart</h1>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p className="empty-cart-icon">🛒</p>
          <p className="empty-cart-text">Your cart is empty</p>
          <button className="btn btn-primary" onClick={onBackToMenu}>
            Browse Menu
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-price">₹{item.price} each</p>
                </div>

                <div className="cart-item-controls">
                  <div className="quantity-control">
                    <button
                      className="quantity-btn"
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>

                  <div className="cart-item-subtotal">
                    <span className="subtotal-label">Subtotal:</span>
                    <span className="subtotal-amount">₹{item.price * item.quantity}</span>
                  </div>

                  <button
                    className="btn-remove"
                    onClick={() => onRemoveItem(item.id)}
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="cart-total">
              <span className="total-label">Total Amount:</span>
              <span className="total-amount">₹{totalPrice}</span>
            </div>

            <button 
              className="btn btn-primary btn-proceed"
              onClick={onProceedToPayment}
            >
              Proceed to Payment →
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
