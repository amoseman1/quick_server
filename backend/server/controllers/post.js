/* define post request handlers here */

// import dependencies
const { Webhooks } = require("@octokit/webhooks");
require("dotenv").config();
const exec = require("child_process").exec;

//secret key for atripe api
const stripe = require('stripe')(process.env.SECRET_KEY);

module.exports = {
  eventHandler: async (req, res) => {
    const webhook = new Webhooks({
      secret: process.env.WEBHOOK_SECRET,
    });

    const path = process.env.DIRECTORY_PATH;

    const payload = req.body;
    const name = req.headers["x-github-event"];
    const signature = await webhook.sign(payload);
    const status = await webhook.verify(payload, signature);

    if (status) {


      switch (name) {
        case "push":
          
          const command = `cd ${path} && git pull origin main`;
          // Amy trial
          exec(command, (err, stdout, stderr) => {
            if (err) {
              console.log(err);
              return res.status(500).send(stderr);
            }
            return res.status(200).send(stdout);
          });
          break;

        case "pull_request":

          const pullRequestStatus = payload.action;

          if (pullRequestStatus === "closed") {
            
            const command = `cd ${path} && git pull origin main`;

            exec(command, (err, stdout, stderr) => {
              if (err) {
                console.log(err);
                return res.status(500).send(stderr);
              }
              return res.status(200).send(stdout);
            });
          }
          break;
      }
    } else {
      res.status(401).send("Unauthorized access detected");
    }
  },
 stripePayments: async (req, res) => {
  // In a new endpoint on your server, create a ConnectionToken and return the
  // `secret` to your app. The SDK needs the `secret` to connect to a reader.
  let connectionToken = stripe.terminal.connectionTokens.create();
  console.log(connectionToken);

  res.send({secret: connectionToken.secret});
 }

};
