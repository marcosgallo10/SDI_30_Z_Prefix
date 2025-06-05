Inventory Management App

- This inventory management application currently allows users to view, add, edit, and delete items.

- The backend is composed of an app.js file using express and knex.

- The database is currently being containerized using docker on PostgreSQL under the database name "inventory".

- In the inventory database, there are currently two tables, one for users and one for items.

- The front end is currently utilizing React framework using Javascript.

To get started:

- git clone https://github.com/marcosgallo10/SDI_30_Z_Prefix.git

- cd into SDI_30_Z_Prefix

- Install dependencies using "npm install"

- Run database migrations using "npx knex migrate:latest"

- Start the backend of the application by cd into api and running "nodemon app.js"

- Start the frontend by cd into ui and running "npm run dev"

API EndPoints

- There are currenly 5 endpoints for the items database.
  - GET (/items) : This allows the user interface to render all the items onto the HomePage and Inventory Page.
  - GET (/items/:id) : This allows the user interface to select a specfic item to redirect them to the ItemDetailsPage of the specfic item.
  - POST (/items) : This allows the user to add a new item to the items table.
  - PUT (/items/:id) : This allows the user to edit items within the items table.
  - DELETE (/items/:id) : This allows the user to delete items within the items table.
  

- There are currenlty two endpoints for the users database.
  - GET (/users) : This is used in the login page to verify user exists within the users table.
  - POST (/users) : This will be used in the future to allow new users to sign up for the application to allow them to make modification to the inventory.
 
- Note: Currently there is only one user in the database, for login demo purposes utilize the info below:
  - {id: 1, first_name: 'Marcos', last_name:'Gallo', user_name: 'marcos_gallo', password:'password' }
