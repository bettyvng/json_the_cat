const request = require('request');

const fetchBreedDescription = function (breedType, callback) {
  let apiURL = `https://api.thecatapi.com/v1/breeds/search?q=${breedType}`;
  request(apiURL, (error, response, body) => {
    if (response.statusCode !== 200) {
      console.log("Cat API call failed");
      callback(Error("Cat API call failed"));
      return;
    } else {
      const objBody = JSON.parse(body);
      if (objBody.length === 0) {
        callback(Error("Invalid Breed"), null);
        console.log("Breed not found:", breedType);
      } else {
        callback(null, objBody[0].description);
        console.log(objBody[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };