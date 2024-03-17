const express = require("express");
const app = require("./app");
const PORT = 1338;

const init = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  } catch (err) {
    console.log(error);
  }
};

init();
