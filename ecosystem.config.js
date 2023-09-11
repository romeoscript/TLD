module.exports = {
  apps: [
    {
      script: "npm start",
    },
  ],

  deploy: {
    production: {
      user: "ubuntu",
      host: "62.72.24.245",
      ref: "origin/main",
      repo: "https://github.com/romeoscript/TLD.git",
      path: "/home/ubuntu",
      "pre-deploy-local": "",
      "post-deploy":
        "source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
      ssh_options: " ForwardAgent=yes",
    },
  },
};
