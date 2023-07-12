const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const store = new MongoDBStore({
    uri: 'mongodb://localhost:27017/myProject',
    collection: 'session'
  })

const sessionMiddleware = session({
    secret: 'my-secret-key',
    resave: false,
    saveUninitialized: false,
    store: store

});

module.exports = sessionMiddleware;