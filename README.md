# Dogs Database

### LinkedIn: https://www.linkedin.com/in/federico-prat/
### Deploy: https://dogs-database.vercel.app/

This is an app that combines data fetched from an external dogs API with the ability to create your own dog and store it. <br>

Technologies and libraries used: <br>
  - React <br>
  - React redux to manage global state <br>
  - Redux Thunk as middleware to support async calls with redux <br>
  - Express to manage the back-end requests from the front-end
  - PostgreSQL to store new data <br>
  - Sequelize to connect the database with the back-end <br>
<br>
Stetically speaking is awful, but internally this app uses a combination of front-end and back-end filters that allow the user to find any kind of dog, existing or created in seconds. <br>
  The form to create a dog is controlled and validated with regex,  it cannot be empty, the name cannot contain other characters than letters and the other inputs cannot have any other type than number.
  The models created with sequelize are also controlled, empty inputs or anything different than letters or numbers are not allowed and also has UUID for randomly generated keys and id
  <br>
<br>

### Fun fact: 
When I was deploying the back-end and the data base to heroku I had this error saying "$PORT could not bind", I spent an hour and a half changing things until I realized it was because heroku uses linux which is case sensitive, locally I was not having this error because Windows is not case sensitive when declaring const X = require './xxx' in NodeJS.
