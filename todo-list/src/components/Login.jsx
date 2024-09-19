import { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate} from 'react-router-dom';

export function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) =>{
        e.preventDefault();
        setEmailError(false);
        setPasswordError(false);
        setError('');

        try {
            const response = await axios.post('https://reqres.in/api/login', {email,password,});
            if(response.status === 200){
                navigate('/ToDo-list');
            }
        } catch (err) {
            setError('Login failed. Please check your credentials.');
            setEmailError(true);
            setPasswordError( true);
        }
    };

    return(
        <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={emailError ? 'error' : ''}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={passwordError ? 'error' : ''}
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    );
}