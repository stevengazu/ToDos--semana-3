import { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate} from 'react-router-dom';

export function Login() {
    // Almacena el Correo 
    const [email, setEmail] = useState('');
    // Almacena  la contrasena
    const [password, setPassword] = useState('');
    //Almacena mensajes de error
    const [error, setError] = useState('');
    // Estado para indicar si hay un error en el campo de correo electrónico
    const [emailError, setEmailError] = useState(false);
    // Estado para indicar si hay un error en el campo de contraseña
    const [passwordError, setPasswordError] = useState(false);
    // Navegación para redirigir al usuario
    const navigate = useNavigate();

    // Para manejar el envio del formulario de inicio de Sesion
    const handleLogin = async (e) =>{
        e.preventDefault();
        setEmailError(false);
        setPasswordError(false);
        setError('');

        try {
          // Realiza una solicitud POST a la API de inicio de sesión
            const response = await axios.post('https://reqres.in/api/login', {email,password,});
            if(response.status === 200){
                // Redirige al usuario a la página de lista de tareas si el inicio de sesión es exitoso
                navigate('/ToDo-list');
            }
        } catch (err) {
          // Muestra un mensaje de error si el inicio de sesión falla
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