import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import {ToDoList} from './components/ToDo-list';

export function App() {
  return (
    <Router>
    <Routes>
      {/* Ruta para el elemento de inicio de sesión */}
      <Route path="/" element={<Login />} />
      {/* Ruta para el elemento de lista de tareas */}
      <Route path="/ToDo-list" element={<ToDoList />} />
    </Routes>
  </Router>
  );
}