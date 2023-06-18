const request = require("request");

const args = process.argv.slice(2);

// the search query prameter issued by the user in the CLI
const parameter = args[0];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${parameter}`;

request(url, (error, response, body) => {
  console.log("statusCode: ", response && response.statusCode);
  if (error) {
    console.log(error);
  }
  const data = JSON.parse(body);
  console.log(typeof data);
  console.log(data[0].description);
});
