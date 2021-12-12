const request = require('request');
const breedArgs = process.argv.slice(2);

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
        console.log("Breed not found:", breedType);
      } else {
        console.log(objBody[0].description);
      }
    }
  });
};

fetchBreedDescription(breedArgs[0], (error) => {
});

module.exports = { fetchBreedDescription };