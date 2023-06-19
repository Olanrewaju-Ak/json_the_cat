const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    // to check if the breed entered by user doesnt exist
    if (error) {
      callback(error, null);
      return;
    }
    // convert body from string to object
    const data = JSON.parse(body);

    //checking if the breedName doesnt exist
    if (data.length === 0) {
      callback("Breed not found.Check your spellings or enter another breed name", null);
      return;
    }

    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };
