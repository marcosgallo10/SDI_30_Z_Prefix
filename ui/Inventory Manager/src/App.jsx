import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css'


import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import InventoryPage from './components/InventoryPage';
import ItemDetailsPage from './components/ItemDetailsPage'


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/inventory" element={<InventoryPage/>}/>
        <Route path="/items/:id" element={<ItemDetailsPage/>}/>
      </Routes>
    </div>
)
};


