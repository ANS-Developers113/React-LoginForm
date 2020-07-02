# React-LoginForm
Demo project for login using react js, node js and mongodb atlas. Authentication - JSON Web Token


1. **Frontend-**
- cd client
- npm install (to install all the packages and dependencies from package.json)
- npm start (to run the client)

2. **Backend-**
-	cd server
-	npm install (to install all the packages and dependencies from package.json)
-	npm start (to run the server)

First start the server before starting client.

**Frontend-**
After successful login, client will be redirected to profile page. If credentials are not matched then the client shows the alert of Unsuccessful login. Server sends a token which is stored in session storage and expires after 30 min.

**Backend-**
Credentials are checked with one stored in collection (Users). If they are matched token is send to client. For every client request, token is verified and then respective operations are performed. 
