# Node authenication app

Node Authentication API

API for registering users with mongodb and authentication using a JWT (json web token). This app uses passport and passport-jwt and uses a JWT strategy

Version

1.0.0

Usage

npm install  <br>
npm start <br>
##Endpoints

POST /users/register<br>
POST /users/authenticate   // Gives back a token<br>
GET /users/profile         // Needs json web token to authorize<br>
