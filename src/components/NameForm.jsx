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
        <h1>☕ Welcome to Our Café</h1>
        <p className="subtitle">Please enter your name to start ordering</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className={`form-input ${error ? 'error' : ''}`}
              placeholder="Enter your name"
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
            Next →
          </button>
        </form>
      </div>
    </div>
  );
}

export default NameForm;
