module.exports = {
    apps: [{
      name: "diver-web",
      max_memory_restart: '500M',
      listen_timeout: 10000
    }],
    deploy: {
      production: {
        // SSH user
        user: "root",
        // SSH host
        host: [
          "157.245.213.147"
        ],
        // GIT remote/branch
        ref: "origin/master",
        // GIT remote
        repo: "git@github.com:Stroemgren/diver-web.git",
        // path in the server
        path: "/var/www/diver-web",
        // post-deploy action
        "post-deploy": "npm install && npm run build && npm install -g serve && serve -s build -l 3000",
      },
    }
  }