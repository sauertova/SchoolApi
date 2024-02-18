const express = require('express')
const app = express ()
const PORT = 1338;

app.listen(PORT, () => {
    console.log(`listening to some very cool music on port ${PORT}`);
});