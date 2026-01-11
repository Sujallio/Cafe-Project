import { useState } from 'react';
import './App.css';
import NameForm from './components/NameForm';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Payment from './components/Payment';

function App() {
  // State management
  const [currentStep, setCurrentStep] = useState('name'); // 'name', 'menu', 'cart', 'payment'
  const [customerName, setCustomerName] = useState('');
  const [cart, setCart] = useState([]);

  // WhatsApp configuration - REPLACE WITH YOUR CAFE'S PHONE NUMBER
  const CAFE_WHATSAPP_NUMBER = '919876543210'; // Format: country code + number (no + or spaces)

  // Handle name submission
  const handleNameSubmit = (name) => {
    setCustomerName(name);
    setCurrentStep('menu');
  };

  // Add item to cart
  const handleAddToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      // Update quantity if item already in cart
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      // Add new item to cart
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  // Update item quantity
  const handleUpdateQuantity = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      handleRemoveItem(itemId);
    } else {
      setCart(cart.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  // Remove item from cart
  const handleRemoveItem = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  // Generate WhatsApp message and redirect
  const handlePlaceOrder = (paymentMethod) => {
    // Calculate total
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Format order items
    const orderItems = cart.map(item => 
      `- ${item.name} × ${item.quantity} = ₹${item.price * item.quantity}`
    ).join('\n');

    // Create WhatsApp message
    const message = `🆕 *New Order* ☕🍔

*Customer Name:* ${customerName}

*Order:*
${orderItems}

*Total:* ₹${totalPrice}
*Payment:* ${paymentMethod === 'online' ? 'Online (GPay)' : 'Cash at Counter'}

---
Order placed at: ${new Date().toLocaleString('en-IN')}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // Create WhatsApp Click-to-Chat URL
    const whatsappUrl = `https://wa.me/${8855045587}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Show success message
    alert('Order sent to WhatsApp! Thank you for ordering! 🎉');

    // Reset the app
    setCart([]);
    setCurrentStep('name');
    setCustomerName('');
  };

  return (
    <div className="app">
      {currentStep === 'name' && (
        <NameForm onNameSubmit={handleNameSubmit} />
      )}

      {currentStep === 'menu' && (
        <Menu
          cart={cart}
          onAddToCart={handleAddToCart}
          onProceedToCart={() => setCurrentStep('cart')}
        />
      )}

      {currentStep === 'cart' && (
        <Cart
          cart={cart}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onProceedToPayment={() => setCurrentStep('payment')}
          onBackToMenu={() => setCurrentStep('menu')}
        />
      )}

      {currentStep === 'payment' && (
        <Payment
          cart={cart}
          customerName={customerName}
          onPlaceOrder={handlePlaceOrder}
          onBackToCart={() => setCurrentStep('cart')}
        />
      )}
    </div>
  );
}

export default App;
