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
        <h1>💳 PAYMENT & CHECKOUT</h1>
      </div>

      {/* Order Summary */}
      <div className="payment-box">
        <h2 style={{ color: 'var(--brown-dark)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Order Summary</h2>
        <div className="payment-summary">
          {cart.map(item => (
            <div key={item.id} className="payment-row">
              <span>{item.name} × {item.quantity}</span>
              <span className="payment-row-value">₹{item.price * item.quantity}</span>
            </div>
          ))}
        </div>
        <div className="payment-row" style={{ borderTop: '3px solid var(--gold-main)', marginTop: '1rem', paddingTop: '1rem', fontSize: '1.3rem' }}>
          <span style={{ fontWeight: 'bold' }}>TOTAL:</span>
          <span className="payment-row-value" style={{ fontSize: '1.5rem', color: 'var(--accent-orange)' }}>₹{totalPrice}</span>
        </div>
      </div>

      {/* Payment Method Selection */}
      <div className="payment-box" style={{ marginTop: '2rem' }}>
        <h2 style={{ color: 'var(--brown-dark)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Select Payment Method</h2>
        
        <div 
          className={`payment-option ${paymentMethod === 'online' ? 'selected' : ''}`}
          style={{
            backgroundColor: paymentMethod === 'online' ? 'rgba(212, 175, 55, 0.15)' : 'transparent',
            borderColor: paymentMethod === 'online' ? 'var(--gold-main)' : 'var(--gold-main)',
            borderRadius: '0',
            border: '3px solid'
          }}
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
            <h3 style={{ color: 'var(--brown-dark)' }}>💳 Online Payment</h3>
            <p style={{ color: 'var(--text-light)' }}>GPay • PhonePe • Paytm</p>
          </div>
        </div>

        <div 
          className={`payment-option ${paymentMethod === 'cash' ? 'selected' : ''}`}
          style={{
            backgroundColor: paymentMethod === 'cash' ? 'rgba(212, 175, 55, 0.15)' : 'transparent',
            borderColor: paymentMethod === 'cash' ? 'var(--gold-main)' : 'var(--gold-main)',
            borderRadius: '0',
            border: '3px solid'
          }}
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
            <h3 style={{ color: 'var(--brown-dark)' }}>💵 Cash Payment</h3>
            <p style={{ color: 'var(--text-light)' }}>Pay at the counter</p>
          </div>
        </div>
      </div>

      {/* GPay QR Code (shown when online is selected) */}
      {paymentMethod === 'online' && (
        <div className="payment-box" style={{ marginTop: '2rem', textAlign: 'center' }}>
          <h3 style={{ color: 'var(--brown-dark)', marginBottom: '1.5rem' }}>SCAN TO PAY</h3>
          <div className="qr-placeholder">
            <div className="qr-code-box" style={{ borderColor: 'var(--gold-main)', backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
              <p className="qr-text">📱</p>
              <p className="qr-instruction" style={{ color: 'var(--text-light)' }}>
               GPay QR Code Here
              </p>
            </div>
          </div>
          <p className="payment-instruction" style={{ marginTop: '1rem', color: 'var(--accent-orange)' }}>
            ⚠️ Complete payment before placing order
          </p>
        </div>
      )}

      {/* Cash Payment Message */}
      {paymentMethod === 'cash' && (
        <div className="payment-box" style={{ marginTop: '2rem', backgroundColor: 'rgba(212, 175, 55, 0.1)', textAlign: 'center' }}>
          <p className="payment-instruction" style={{ color: 'var(--brown-dark)', fontSize: '1.1rem' }}>
            💵 Please pay cash at the counter
          </p>
        </div>
      )}

      {/* Place Order Button */}
      <button 
        className="btn btn-proceed"
        onClick={handlePlaceOrder}
        disabled={!paymentMethod}
        style={{ marginTop: '2rem', marginBottom: '1rem' }}
      >
        Place Order via WhatsApp 🚀
      </button>

      <button
        className="btn btn-back"
        onClick={onBackToCart}
      >
        ← Back to Cart
      </button>
    </div>
  );
}

export default Payment;
