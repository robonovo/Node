These Node files are a combination of apps developed to integrate with front-end code, as well as apps developed as back-end modules, such as APIs. All of these projects were developed on a local Windows PC environment.  These projects most likely can be downloaded and executed on your local machine, running "npm install" to re-create the node_modules file.  Some, however, utilize a MongoDB database so you would need to dig in and integrate your own DB. Also, any "private" information like MongoDB URIs, keys or passwords have been changed in these GitHub apps.

These applications were developed under Node 8.11.1 utilizing Bootstrap for much of the HTML output. All associated modules were the latest as of the development. Please understand that the purpose of this coding was not fancy design but rather to demonstrate proficiency in Node.js coding along with utilizing associated modules.

------------------------------------------------------------------

storybooks:
A Social-Network type app for creating public and private stories.
This app is currently up on Heroku => https://fast-anchorage-81198.herokuapp.com/
To post a story you will need to log in with a valid Google ID.  However your credentials are encrypted in the database and are not used for any purposes other than to play with this app.

vidjot:
A simple app where content creators can register, jot down and manage ideas for future videos.
This app is currently up on Heroku => https://obscure-oasis-24334.herokuapp.com/
To add and view ideas you will need to register an account.  However your credentials are encrypted in the database and are not used for any purposes other than to play with this app.

weather:
An application that takes an address and interacts with Google Maps and Dark Sky API to pull specific temperature information.

todoapi:
A To-Do REST API with User Accounts and Authentication.

chat:
A real-time chat app to join a chat room, send/receive messages and send your location (Google Maps) to all people in the chat room via a geo-location API.  All people in the room will be notified when someone new enters the room or when someone leaves the room.
This app is currently up on Heroku => https://boiling-plains-43206.herokuapp.com/
To try it out get a few people together, go to the Heroku URL,log into a chat room (to test among your group, all will need to enter the same chat room) and send messages and your location.
