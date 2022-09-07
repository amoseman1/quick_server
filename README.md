# Webhooks

Express server that handles the payloads from GitHub Webhooks. To run the server follow these steps: <ul> <li>Create .env similar to sample_env.txt</li> <li>run the command ``` npm -i ``` or ``` npm install ```</li> </ul>
@route ```/event_handler```, the code base will be updated to reflect the recent changes generated from either a push or a merged pull request to the default branch.   
