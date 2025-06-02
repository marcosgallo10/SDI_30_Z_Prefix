const express = require('express');

const app = express();

const port = 8080;
const knex = require('knex')(require('./knexfile.js')['development']);

app.use(express.json());


app.get('/' , (request, response) => {
  response.status(200).send('Your Knex and Express application is running succesfully!')
});

app.listen (port, () => {
  console.log('Your Knex and Express application is running succesfully!')
})

app.get('/users', function (request, response){
  knex('users')
    .select('*')
    .then(data => response.status(200).json(data))
    .catch(err => response.status(404).json({message:'The data you are looking for could not be found.'}))
})

app.get('/items', function (request, response){
  knex('items')
  .select('*')
  .then(data => response.status(200).json(data))
  .catch(err => response.status(404).json({message:'The data you are looking for could not be found.'}))
})

app.post ('/users' , (request, response) => {
  const {id, first_name, last_name, user_name, password} = request.body;
  console.log(request.body)

  const newUser = {
    id: id,
    first_name: first_name,
    last_name: last_name,
    user_name: user_name,
    password: password
  };

  knex('users')
  .insert(newUser)
  .then(insertedUser => response.status(200).json(insertedUser))
  .catch(err => response.status(500).send(err))
});

app.post ('/items', (request, response) => {
  const {id, user_id, item_name, description, quantity} = request.body;
  console.log(request.body)

  const newItem = {
    id: id,
    user_id: user_id,
    item_name: item_name,
    description: description,
    quantity: quantity
  };

  knex('items')
  .insert(newItem)
  .then(insertedItem => response.status(200).json(insertedItem))
  .catch(err => response.status(500).send(err))
});


app.put ('/items/:id', (request, response) => {
  const {id} = request.params;
  const {user_id, item_name, description, quantity} = request.body;

  const updatedItem = {
    user_id: user_id,
    item_name: item_name,
    description: description,
    quantity: quantity
  }

  knex('items')
  .where ({id})
  .update(updatedItem)
  .then(updatedItem => response.status(200).json(`${updatedItem} has been updated.`))
  .catch(err => response.status(500).send(err))
});

app.delete('/users/:id', (request, response) => {
  const {id} = request.params;

  knex('users')
    .where({id})
    .del()
    .then((deletedItem) => {
      if (deletedItem) {
        response.status(200).json(`User with ID:${id} has been deleted from your inventory.`)
      } else {
        response.status(400).json(`No User with ID:${id} currently exists.`)
      }
    })
    .catch((err) => {
      response.status(500).json({error: err.message})
    });
});

app.delete('/items/:id', (request, response) => {
  const {id} = request.params;

  knex('items')
    .where({id})
    .del()
    .then((deletedItem) => {
      if (deletedItem) {
        response.status(200).json(`Item with ID:${id} has been deleted from your inventory.`)
      } else {
        response.status(400).json(`No Item with ID:${id} is in your current inventory.`)
      }
    })
    .catch((err) => {
      response.status(500).json({error: err.message})
    });
});


app.listen(port, () => {
  console.log('Your Knex and Express Application is running successfully!')
})