import React, { useState, useEffect, createContext } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams} from 'react-router-dom';
import NavBar from './NavBar'


export default function ItemDetailsPage() {

  const [item, setItem] = useState(null);
  const {id} = useParams();

    useEffect(() =>{
      fetch(`http://localhost:8080/items/${id}`)
      .then(response => response.json())
      .then(data => {
        setItem(data)
        console.log(data)
      })
      .catch(error => console.error('Error fetching items', error))
    }, [id])

    if(!item) return <p> Item not found.</p>



return (
  <div>
      <NavBar/>
      <h1>Item Details</h1>
        <p>User ID: {item.user_id}</p>
        <p>Name: {item.item_name}</p>
        <p>Description: {item.description}</p>
        <p>Quantity: {item.quantity}</p>
  </div>
)}

