var index = require('./index');
module.exports = function (app) {
    app.use('/api', index);
};
