# software-daily.server

The Software Daily API is created using the Nodal framework. Nodal is a Node.js server platform and framework that enables you to develop API services easily. 

### Install Nodal 

```sh
npm install nodal -g
```
### Boot your server with:
    
```sh
nodal s
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

### Database 
Database credentials are found in config/db.json.

#### Creating Database using Nodal

This creates the database defined in config/db.json.

```sh
nodal db:create
```

#### Running Migrations

```sh
nodal db:prepare
```

```sh
nodal db:migrate
```



## API Structure
[Apiary Documentation](http://docs.softwaredaily.apiary.io/)

**Slack:** https://software-daily.slack.com/messages/server/

This module houses the code that serves the single-page app and provides the REST API for the future [softwaredaily.com](http://softwaredaily.com).

### Who wants to get started?

This module of the project has yet to be started. The main requirements are to write a server application that will provide the REST API for the client to interact with, as well as serve the single-page app. It's possible that we could break these up into two separate components, if people think it's worthwhile.

I've been researching the [jsonapi.org](http://jsonapi.org) specification, which looks very promising. It's effectively a spec of guidelines and conventions for writing a JSON API. Anything with strict conventions and open documentation sounds great, because that could make it easier for other people to ramp up on our project. I'd be interested to hear what other people think about the spec.

Our data models / database schema are not complete yet, so the main work that can be done right this moment would be setting up the framework so that we could fill in the blanks later.

If you'd like to work on this portion of Software Daily, feel free to join the Slack team and post a message to the [#server](https://software-daily.slack.com/messages/server/) channel.
