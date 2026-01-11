import { useState } from 'react';
import menuData from '../data/menuData';

function Menu({ cart, onAddToCart, onProceedToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories
  const categories = ['All', ...new Set(menuData.map(item => item.category))];

  // Filter menu items by category
  const filteredMenu = selectedCategory === 'All' 
    ? menuData 
    : menuData.filter(item => item.category === selectedCategory);

  // Get cart item count
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Check if item is in cart
  const getItemQuantity = (itemId) => {
    const cartItem = cart.find(item => item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h1>🍽️ Our Menu</h1>
        
        {/* Category Filter */}
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items Grid */}
      <div className="menu-grid">
        {filteredMenu.map(item => {
          const quantity = getItemQuantity(item.id);
          
          return (
            <div key={item.id} className="menu-card">
              <div className="menu-card-placeholder">
                <span className="placeholder-icon">🍽️</span>
              </div>
              
              <div className="menu-card-content">
                <h3 className="menu-item-name">{item.name}</h3>
                <p className="menu-item-category">{item.category}</p>
                <p className="menu-item-price">₹{item.price}</p>
                
                <button 
                  className="btn btn-add"
                  onClick={() => onAddToCart(item)}
                >
                  Add to Cart {quantity > 0 && `(${quantity})`}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* View Cart Button (Floating) */}
      {cartItemCount > 0 && (
        <button 
          className="btn btn-cart-float"
          onClick={onProceedToCart}
        >
          View Cart ({cartItemCount} items)
        </button>
      )}
    </div>
  );
}

export default Menu;
