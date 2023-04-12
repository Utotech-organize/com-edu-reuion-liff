module.exports = {
  apps: [
    {
      name: "com-edu-reunion-liff",
      script: "yarn",
      automation: false,
      args: "run dev --host",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
