const ComponentOperation = require("./Operations/ComponentOperation");
const fs = require('fs');
const path = require('path');

class ProjectManager {
    constructor(dir) {
        this.path = dir;
        this.projectPath = path.join(dir, 'react-builder');
        this.distPath = path.join(dir, "src");
        this.reserveDirectory("/");
        this.component = new ComponentOperation(this, "components");
        this.page = new ComponentOperation(this, "pages");
        this.api = new ComponentOperation(this, "api");
        this.theme = new ComponentOperation(this, "theme");
        this.language = new ComponentOperation(this, "language");
        this.router = new ComponentOperation(this, "routers");
    }
    findObject(className, objectName) {
        const searchPath = path.join(this.path, className, objectName + ".json");
        if (fs.existsSync(searchPath)) {
            return {
                success: true,
                name: objectName,
                extension: 'json',
                fullname: searchPath,
                content: JSON.parse(fs.readFileSync(searchPath, { encoding: 'utf8' }))
            };
        }
        return { success: false };
    }
    findObjects(className) {
        const searchPath = path.join(this.path);
        
    }
    reserveDirectory(subpath){
        var reservePath = path.join(this.projectPath, subpath);
        if(!fs.existsSync(reservePath)){
            fs.mkdirSync(reservePath);
            return true;
        }
        return true;
    }
}

module.exports = ProjectManager;