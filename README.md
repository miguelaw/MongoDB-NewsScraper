# MongoDB News Scraper


## Brief Description

This application uses a simple UI powered by [Handlebars View Engine](https://handlebarsjs.com/) and [Mongoose](http://mongoosejs.com/) database package. This application simple scrapes data from NY Times, saves it into a Mongo Database and also populates it to the DOM to be viewed by the user. 

The user, can also **Save the Article**, **Create a Note** in it, and **See Notes** as well.


## Demo

The demo of this application can be found [here](https://news-scraper-mw.herokuapp.com/).

## Installation

To run the application locally, first clone this repository with the following command.

	git clone https://github.com/miguelaw/MongoDB-NewsScraper.git
	
Access to the project's folder

	cd MongoDB-NewsScraper

Next, install the application dependencies.

	npm install

Next, start the MongoDB service on a separate Git Bash Window.

	mongod

Next, on another Git Bash Window type.

	mongo
	
Finally, run the node server locally (inside the project's folder).

	node server.js

	
Now, open the local application on port 8080 at the URL: `http://localhost:8080/`.

**Thank you for checking out my work!** 

