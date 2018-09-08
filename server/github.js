const axios = require('axios');

const auth = {
    client_id: process.env.GITHUB_CLIENT_ID, 
    client_secret: process.env.GITHUB_CLIENT_SECRET 
};

const config = { params: auth };

const githubData = {};

setInterval(updateGithubData, 1000 * 60 * 60);

function updateGithubData() {
    axios.get('https://api.github.com/users/ginazampino/events/public?per_page=100', config)
        .then(function(res) {
            var pushEvents = res.data.filter(event => event.type == 'PushEvent');
            var commitEvents = [];

            pushEvents.forEach(function(pushEvent) {
                pushEvent.payload.commits.forEach(function(commit) {
                    commitEvents.push({
                        repo: pushEvent.repo,
                        date: pushEvent.created_at,
                        ...commit
                    });
                });
            });

            commitEvents = commitEvents.slice(0, 5);

            githubData.commits = commitEvents;
        });
};

updateGithubData();

module.exports = {
    githubData
};