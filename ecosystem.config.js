module.exports = {
  apps: [
    {
      name: "comedureunion-liff-app",
      script: "yarn",
      automation: false,
      args: "run dev --host 0.0.0.0",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
