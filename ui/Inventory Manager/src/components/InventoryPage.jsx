import React, { useState, useEffect, createContext } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import NavBar from './NavBar'

export default function InventoryPage() {

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({user_id: 1,item_name:'', description:'', quantity: 0});
  const [editId, setEditId] = useState(null);
  const [editItem, setEditItem] = useState({item_name: '', description: '', quantity: 0})


  useEffect(() =>{
    fetch('http://localhost:8080/items')
    .then(response => response.json())
    .then(data => {
      setItems(data)
      console.log(data)
    })
    .catch(error => console.error('Error fetching items', error))
  }, [])

  const handleChange = (event) => {
    const {name, value} = event.target;
    setNewItem(prev => ({
      ...prev,
      [name]: name === 'quantity' ? parseInt(value) : value
    }))
  }

  const handleAddItem = () => {
    fetch(`http://localhost:8080/items/`, {
      method: 'POST', headers:{'Content-Type': 'application/json'}, body: JSON.stringify(newItem)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setItems(prev => [...prev, data]);
        setNewItem({user_id:1 ,item_name:'', description:'', quantity: 0})
    })
      .catch(error => console.error(error));
  }

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/items/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
      setItems(prev => prev.filter(item => item.id !==id));
    })
    .catch(error=> console.error(error));
  }
  const startEdit = (item) => {
    setEditId(item.id);
    setEditItem({
      item_name: item.item_name,
      description: item.description,
      quantity: item.quantity
    })
  }
  const handleEdit = (event) => {
    const {name, value} = event.target;
    setEditItem(prev => ({
      ...prev,
      [name]: name === 'quantity' ? parseInt(value) : value
    }))
  }

  const saveEdit = (id) =>
    fetch(`http://localhost:8080/items/${id}`, {
      method: 'PUT', headers:{'Content-Type': 'application/json'}, body: JSON.stringify(editItem)
    })
      .then(response => response.json())
      .then(updated => {
        setItems(prev => prev.map(item => (item.id === id ? updated : item)));
        setEditId(null)
    })
      .catch(error => console.error(error));

return (
  <div>
    <NavBar/>
     <h1> Modify Inventory </h1>
      <div>
        <input name = "item_name" type="text" placeholder="Item Name" value = {newItem.item_name}onChange={handleChange}  />
        <input name = "description" type="text" placeholder="Description" value = {newItem.description} onChange={handleChange}/>
        <input name = "quantity" type= "number" placeholder="Quantity"value = {newItem.quantity}onChange={handleChange}/>
        <button onClick= {handleAddItem}>Add Item</button>
      </div>
      <ol>
        {items.map(item => (
          <li key={item.id}>
            {editId === item.id ? (
              <div>
                <input name = "item_name" type="text" placeholder="Item Name" value = {editItem.item_name}onChange={handleEdit}  />
                <input name = "description" type="text" placeholder="Description" value = {editItem.description} onChange={handleEdit}/>
                <input name = "quantity" type= "number" placeholder="Quantity"value = {editItem.quantity}onChange={handleEdit}/>
                <button onClick={() => saveEdit(item.id)}>Save</button>
                <button onClick={() => setEditId(null)}>Cancel</button>
              </div>
            ):(
              <div>
                <Link to={`/items/${item.id}`}>
                User: {item.user_id } - Name: {item.item_name} - Description: {item.description} - Quantity: {item.quantity}
                </Link>
                <button onClick={() => startEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ol>
   </div>
)};

