/* define get request handlers here */

const exec = require("child_process").exec;

module.exports = {
    test: (req, res) => {
        const path = process.env.DIRECTORY_PATH;
        const command = `cd ${path} && git pull origin main`;

        exec(command, (err, stdout, stderr) => {
            if (err) {
              console.log(err);
              return res.status(500).send(stderr);
            }
            console.log(stdout);
            return res.status(200).send(stdout);
        });
    },
};