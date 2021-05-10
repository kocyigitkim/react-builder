const ProjectManager = require("../ProjectManager");
const fs = require('fs');

class ComponentOperation {
    /**
     * 
     * @param {ProjectManager} manager 
     */
    constructor(manager, reserveName) {
        this.manager = manager;
        this.name = reserveName;
        manager.reserveDirectory(reserveName);
    }

    create(name, data) {
        return this.update(name, data);
    }

    update(name, data) {
        return this.manager.setObject(this.name, name, data);
    }

    delete(name) {
        var result = this.manager.findObject(this.name, name);
        if (result.success) {
            fs.rmSync(result.fullname, { force: true });
            return true;
        }
        return false;
    }

    list() {
        return this.manager.findObjects(this.name);
    }
}
module.exports = ComponentOperation;