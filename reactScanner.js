const ora = require('ora');
const path = require('path');
const fs = require('fs');

async function scanReactFiles(dir, level = 0) {
    var result = [];
    for (var p of (fs.readdirSync(dir, { withFileTypes: true }))) {
        if (p.isDirectory() && p.name.toLowerCase() != "node_modules") {
            result = [...result, ...(await scanReactFiles(path.join(dir, p.name),level + 1))];
        }
        else if (p.isFile() && p.name.toLowerCase().endsWith(".js")) {
            var content = fs.readFileSync(path.join(dir, p.name), { encoding: 'utf8' });
            if (content.indexOf("from 'react'") > -1 || content.indexOf("from \"react\"") > -1) {
                result.push({
                    path: dir,
                    name: p.name,
                    fullname: path.join(dir, p.name),
                    content: content,
                    level: level
                });
            }
        }
    }
    return result;
}

class ReactScanner {
    constructor(path) {
        this.path = path;
    }
    async scan() {
        const log = ora("Scanning folders").start();
        log.color = 'yellow';
        const srcPath = path.join(this.path, "src");
        if (fs.existsSync(srcPath)) {
            var files = await scanReactFiles(srcPath);
            log.succeed(files.length + " file(s) found");
        }
        else {
            log.fail("src folder not found");
        }
    }
}

module.exports = ReactScanner;