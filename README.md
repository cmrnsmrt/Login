# Login Page and User Management DB

## Requirements

| ID         | Requirement     |
|--------------|-----------|
| 1 | Use a database to store user information securely |
| 2 | Implement password hashing and salting for enhanced security |
| 3 | Use GraphQL for communication between the front end and back-end |
| 4 | Provide a user-friendly interface for registration, login and logout  |
| 5 | Style the login sytem using CSS to make it visually appealing and responsive  |
| 6 | Lock the user out of the account after 5 incorrect login attempts |
| 7 | Ensure good user experience by providing loading indicators during API requests |

## Back-end Solution

### Database Solution 

To address requirement 1 a connection is establised to a local MongoDB database using mongoose on a nodejs server. 

### GraphQL Solution

To meet requirement 3 the Mongoose MongoDB connection is then mapped to a GraphQL schema of type 'User'. This user type holds an ID, username, email, password and failed login attempts count for the login blocker. Two resolvers are also created for the GraphQL connection to the DB, one for registering new users and another for logging in. Apollo provider has been used to handle both GraphQL API calls between front-end / back-end and to handle state management.

### Security Solution

Requirement 2 is met within the resolvers. The resolver for registering a new user will use bcrypt to apply a hash and salt the password. Bcrypt is also used within the login resolver to compare the hash of the password provided by the user when attempting to login and the hash stored in the database.

Requirement 6 is met within the login resolver. Each time a login attempt is made, the amount of previous incorrect attempts is checked before verifying the password provided. The amount of attempts is also incremented every time an incorrect password is provided. The time of the last attempt is also stored so that the user is only locked out for 5 minutes.

## Front-end solution

### React solution

To meet requirement 4, a React front-end has been implemented. The front-end is a simple index page that renders the App component and then either the Registration or Login component depending on which link has been selected in the navbar. Since Apollo is used for state management the index has an Apollo wrapper around the main App component.

## Presentation

Requirement 5 is met by using bootstrap for layout and styling. This includes using the bootstrap Navbar and Form components. Requirement 7 is also met by intoducing a loading state boolean that is updated depending on if the front-end is getting data from the back-end and conditionally displaying a loading message to the user.
