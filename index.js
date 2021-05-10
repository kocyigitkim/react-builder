const Builder = require('./core/ProjectBuilder');

var manager = new Builder(__dirname + "/client");
manager.create();