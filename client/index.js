const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  // TODO: how do we prove to the server we're on the nice list?
  
  const name = "Jun Yu" // put name here
  const idx = niceList.indexOf(name)
  let proof = [];
  let merkle = new MerkleTree(niceList);
  if (idx !== -1){
    proof = merkle.getProof(idx)
  }

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
    proof: proof,
    name: name
  });

  console.log({ gift });
}

main();