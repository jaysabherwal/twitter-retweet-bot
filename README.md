# Twitter Retweet Bot

A simple bot to retweet anything on twitter relating to the query you provide.

### Deployments

1. [Heroku](#Heroku)
2. [Local Node.js](#Node.js)

# Heroku

1. Set the following ENV variables in your Heroku deployment:

* `CONSUMER_KEY`
* `CONSUMER_SECRET`
* `ACCESS_KEY`
* `ACCESS_SECRET`
* `QUERY`

2. Run the worker dyno __NOT__ the web dyno

# Node.js

1. Run `npm install`

2. In `config.js` replace all `". . ."` with correct values relating to your twitter developer application

3. Run `npm start`



