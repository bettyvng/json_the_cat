const { fetchBreedDescription } = require('./breedFetcher');

const breedArgs = process.argv.slice(2);

fetchBreedDescription(breedArgs[0], (error, description) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});
