const userRoutes = require('./user_routes');
const tagRoutes = require('./tags_routes');

module.exports = function (app, db) {
    userRoutes(app, db);
    tagRoutes(app,db);
};
