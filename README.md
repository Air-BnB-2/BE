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

    -> POST '/:id/listings'
    	- Returns the property_name and the optimal price
    	- Response Status: 201
    	- Request body
				{ 
  					property_name
  					property_type
  					amenities
  					room_type
  					accommodates
  					bathrooms
  					cancellation_policy
  					cleaning_fee
  					instant_bookable
  					zipcode
  					bedrooms
  					beds 
				}
			notes: 
			the properties of the above object must be in that order, feel free to copy paste. 'property_name' is a string. All other values are integers.
			Property type (Drop down?):
					1 = Apartment
					2 = House
					3 = Condominium
					4 = Loft
					5 = Townhouse
					6 = Hostel
			7 = OtherAmenities:
			The sum of amenities that a property offers. I imagine check boxes for amenities offered would work here. 
			If this is too much work, we can rework a model to not include this.Room type (Drop down?):
					1 = Entire home/apartment
					2 = Private room
			3 = Shared roomAccommodates:
			Number of guests the property accommodates.Bathrooms:
			Number of bathrooms.Cancellation policy:
					1 = Strict
					2 = Moderate
					3 = Flexible
					4 = Super strict (30 days)
			5 = Super strict (60 days)Instant bookable:
					1 = No
					2 = Yes
			Zip Code:
			Integer. Any 5 digit zip code that begins with "0" should be formatted as a 4 digit integer.Bedrooms:
			Number of bedroomsBeds:
			Number of **beds**

---

## How to setup local server

1. run `npm install`.
2. Create a file called `.env` and add `PORT=<Your open port>`.
3. run `npm run server` to start up your local server.
4. If successful you should see the message: 'Server running on port:\<port number from .env\>' in your console.
