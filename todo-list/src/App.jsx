import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import {ToDoList} from './components/ToDo-list';

export function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/ToDo-list" element={<ToDoList />} />
    </Routes>
  </Router>
  );
}