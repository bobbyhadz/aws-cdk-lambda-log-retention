/* eslint-disable @typescript-eslint/require-await */

async function main(event) {
  return {
    body: JSON.stringify({message: 'SUCCESS 🎉'}),
    statusCode: 200,
  };
}

module.exports = {main};
