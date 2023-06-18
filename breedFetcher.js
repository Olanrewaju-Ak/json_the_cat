const request = require("request");

const args = process.argv.slice(2);

// the search query prameter issued by the user in the CLI
const parameter = args[0];

//API call using dynamic parameter gotten from CLI
const url = `https://api.thecatapi.com/v1/breeds/search?q=${parameter}`;

request(url, (error, response, body) => {
  console.log("statusCode: ", response && response.statusCode);

  // to check if the breed entered by user doesnt exist

  if (error) {
    console.log("error: ", error);
  }
  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log("Breed not found");
  } else {
    console.log(data[0].description);
  }
});
