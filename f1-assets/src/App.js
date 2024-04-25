import React, { useState } from 'react';
import './index.css'; // Import CSS file for styling

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Here you can implement your authentication logic
    if (username === 'admin' && password === 'password') {
      // Successful login logic
      alert('Login successful!');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <center>
          <h2 className="login-header">F1 Login Page</h2>
          
        </center>
        {error && <div className="error-message">{error}</div>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-field"
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <br />
        <button onClick={handleLogin} className="login-button">
          Login
        </button>
        <p class="para">If you already have an account, please sign in.</p>
        <button onClick={handleLogin} className="signin-button">
          Sign In
        </button><br></br>
      </div>
    </div>
  );
};

export default LoginPage;
