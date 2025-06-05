import React, { useState, useEffect, createContext } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';
import NavBar from './NavBar'


export default function HomePage() {

  const [items, setItems] = useState([]);

    useEffect(() =>{
      fetch('http://localhost:8080/items')
      .then(response => response.json())
      .then(data => {
        setItems(data)
        console.log(data)
      })
      .catch(error => console.error('Error fetching items', error))
    }, [])

return (
  <div
    className = 'homepage'>
      <NavBar/>
      <h1>Current Inventory</h1>
        <ol> {items.map(item => (
          <li key={item.id}>
            <Link to={`/items/${item.id}`}>
            Name: {item.item_name} - Description: {item.description} - Quantity: {item.quantity}
            </Link>
          </li>
          ))}
        </ol>
  </div>
)}

