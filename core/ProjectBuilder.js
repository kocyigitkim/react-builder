const ProjectManager = require("./ProjectManager");
const { series } = require('async');
const { exec } = require('child_process');
const path = require('path');
const ora = require('ora');

class ProjectBuilder {
    constructor(path) {
        this.path = path;
    }
    manager() {
        return new ProjectManager(this.path);
    }
    async create() {
        const p = path.parse(this.path);
        const projectName = p.name;
        const o1 = ora("Creating react project...").start();
        try {
            var isError = null;
            var isComplete = false;
            var pCreate = exec('npx create-react-app ' + projectName, (err, stdout) => {
                err = err && err.toString();
                if (err.trim().startsWith("Error:")) {
                    isError = err;
                }
                isComplete = true;
            }, { cwd: p.dir });
            while (pCreate.exitCode == null && !isComplete) {
                await new Promise(resolve => setTimeout(resolve, 100));
            }
            if (isError) {
                throw isError;
            }
            o1.succeed("Project created.");
        } catch (e) {
            o1.fail(e.toString());
            return;
        }
        const o2 = ora("Initializing...").start();
        this.manager();
        o2.succeed();
    }
}

module.exports = ProjectBuilder;