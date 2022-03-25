# Dogs Database

### LinkedIn: https://www.linkedin.com/in/federico-prat/

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
<br>
### Fun fact: 
When I was deploying the back-end and the data base to heroku I had this error saying "$PORT could not bind", I spent an hour and a half changing things until I realized I had a typo in a sequelize model file, funny thing is that since I run my scripts on windows it did not care about it, but heroku runs with linux, which is case sensitive and it was having troubles finding the module which of course had this upper case letter.
