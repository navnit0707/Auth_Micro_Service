const express = require("express");
const app = express();

const prepareAndStartServer = () => {
  app.listen(3001, () => {
    console.log("server startes");
  });
};

prepareAndStartServer();
