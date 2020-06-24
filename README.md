# BE

## Endpoints

Note: all endpoints are prefixed with: https://airbnb2beckend.herokuapp.com/api/

---

#### Authentication Endpoints

    -> POST '/auth/register'
    	- Returns a welcome message, user id and username, and an authentication token.
    	- Request body
          	  - username - required
          	  - password - required
    	- Response Status: 201
    -> POST '/auth/login'
    	- Returns a welcome message, user id and username, and an authentication token.
    	- Request body
          	  - username - required
          	  - password - required
    	- Response Status: 200

---
---

#### Listing Endpoints

    -> GET '/:id/listings'
    	- Returns an array of all listings belonging to the user (The id in the url is the user's id).
    	- Response Status: 200

---

## How to setup local server

1. run `npm install`.
2. Create a file called `.env` and add `PORT=<Your open port>`.
3. run `npm run server` to start up your local server.
4. If successful you should see the message: 'Server running on port:\<port number from .env\>' in your console.
