import { useState } from 'react';

function Payment({ cart, customerName, onPlaceOrder, onBackToCart }) {
  const [paymentMethod, setPaymentMethod] = useState('');
  
  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handlePlaceOrder = () => {
    if (!paymentMethod) {
      alert('Please select a payment method');
      return;
    }
    
    onPlaceOrder(paymentMethod);
  };

  return (
    <div className="payment-container">
      <div className="payment-header">
        <button className="btn-back" onClick={onBackToCart}>
          ← Back to Cart
        </button>
        <h1>💳 Payment</h1>
      </div>

      {/* Order Summary */}
      <div className="order-summary">
        <h2>Order Summary</h2>
        <div className="summary-items">
          {cart.map(item => (
            <div key={item.id} className="summary-item">
              <span>{item.name} × {item.quantity}</span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}
        </div>
        <div className="summary-total">
          <span>Total:</span>
          <span>₹{totalPrice}</span>
        </div>
      </div>

      {/* Payment Method Selection */}
      <div className="payment-methods">
        <h2>Select Payment Method</h2>
        
        <div 
          className={`payment-option ${paymentMethod === 'online' ? 'selected' : ''}`}
          onClick={() => setPaymentMethod('online')}
        >
          <input
            type="radio"
            name="payment"
            value="online"
            checked={paymentMethod === 'online'}
            onChange={() => setPaymentMethod('online')}
          />
          <div className="payment-option-content">
            <h3>💳 Online Payment</h3>
            <p>Pay via GPay, PhonePe, Paytm</p>
          </div>
        </div>

        <div 
          className={`payment-option ${paymentMethod === 'cash' ? 'selected' : ''}`}
          onClick={() => setPaymentMethod('cash')}
        >
          <input
            type="radio"
            name="payment"
            value="cash"
            checked={paymentMethod === 'cash'}
            onChange={() => setPaymentMethod('cash')}
          />
          <div className="payment-option-content">
            <h3>💵 Cash Payment</h3>
            <p>Pay at the counter</p>
          </div>
        </div>
      </div>

      {/* GPay QR Code (shown when online is selected) */}
      {paymentMethod === 'online' && (
        <div className="gpay-qr-section">
          <h3>Scan to Pay</h3>
          <div className="qr-placeholder">
            <div className="qr-code-box">
              <p className="qr-text">📱 GPay QR Code</p>
              <p className="qr-instruction">
                (Place your GPay QR code image here)
              </p>
            </div>
          </div>
          <p className="payment-instruction">
            ⚠️ Please complete payment and then place order
          </p>
        </div>
      )}

      {/* Cash Payment Message */}
      {paymentMethod === 'cash' && (
        <div className="cash-payment-message">
          <p className="payment-instruction">
            💵 Please pay cash at the counter when collecting your order
          </p>
        </div>
      )}

      {/* Place Order Button */}
      <button 
        className="btn btn-success btn-place-order"
        onClick={handlePlaceOrder}
        disabled={!paymentMethod}
      >
        Place Order 🚀
      </button>
    </div>
  );
}

export default Payment;
