To run the project:
1. cd server, run npm i and npm start
2. cd client, run npm i and npm start

In the profile, User Stories and Liked Stories functionalities are't working because of this error:
GET http://localhost:3000/userStories 404 (Not Found)
GET http://localhost:3000/likedStories 404 (Not Found)

We checked the names in the routes and in the stories controller but we
couldn't solve this bug. It would show the user stories in User Stories,
and in Liked Stories the stories that the user has liked.