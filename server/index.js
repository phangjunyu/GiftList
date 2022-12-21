const express = require('express');
const verifyProof = require('../utils/verifyProof');

const port = 1225;

const app = express();
app.use(express.json());

// TODO: hardcode a merkle root here representing the whole nice list
// paste the hex string in here, without the 0x prefix

const MERKLE_ROOT = "9fbb6bdaf8df3529422fce4e9fc30206e2b859504359cd392ea63373ea5ab1fd";

app.post('/gift', (req, res) => {
  // grab the parameters from the front-end here
  const body = req.body;
  console.log(body);

  // TODO: prove that a name is in the list 
  const isInTheList = false;
  if(isInTheList) {
    res.send("You got a toy robot!");
  }
  else {
    res.send("You are not on the list :(");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
