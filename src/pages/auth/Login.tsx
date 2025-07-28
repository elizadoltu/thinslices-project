import React, { useState } from 'react';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        // TO DO - Proper validation and sanitization for email and password inputs
        e.preventDefault();
        if (!email && !password) {
            setError('Please enter both email and password');
            return;
        }
        setError('');
        alert(`Logged in as ${email}`);
    };

    return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 300, margin: '0 auto' }}>
      <h2>Login</h2>
      {error && <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>}
      <div style={{ marginBottom: 8 }}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ width: '100%' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: 8 }}>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ width: '100%' }}
          />
        </label>
      </div>
      <button type="submit" style={{ width: '100%' }}>Login</button>
    </form>
  );
};

export default Login;