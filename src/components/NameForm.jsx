import { useState } from 'react';

function NameForm({ onNameSubmit }) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate name
    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }
    
    if (name.trim().length < 2) {
      setError('Name must be at least 2 characters');
      return;
    }
    
    // Clear error and submit
    setError('');
    onNameSubmit(name.trim());
  };

  return (
    <div className="name-form-container">
      <div className="name-form-card">
        <div className="mandala-ornament" style={{ width: '80px', height: '80px', marginTop: '-40px' }}></div>
        <h1 className="form-title">Welcome to MAATI</h1>
        <p className="form-subtitle">Please enter your name to begin your culinary journey</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Your Name</label>
            <input
              type="text"
              className={`form-input ${error ? 'error' : ''}`}
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError('');
              }}
              autoFocus
            />
            {error && <p className="error-message">{error}</p>}
          </div>
          
          <button type="submit" className="btn btn-primary">
            Proceed to Menu ✓
          </button>
        </form>
      </div>
    </div>
  );
}

export default NameForm;
