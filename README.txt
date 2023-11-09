To run the project:
1. cd server, run npm i and npm start
2. cd client, run npm i and npm start


There's a bug to be fixed. HTTP requests seem to not work when the user has logged in, so it doesn't show the stories 
and create story functionality doesn't work. 

So, to test CRUD functionalities don't log in. We have commented the code that check if the user is logged in to 
create/edit/delete a story, in order to test these functionalities. If the user isn't logged in, a warning would
appear alerting that the user must be logged in to create/edit/delete a story.