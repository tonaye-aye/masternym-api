module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        host: "localhost",
        port: "27017",
        database: "masternym-api",
        username: "",
        password: "",
      },
      options: {},
    },
  },
});
