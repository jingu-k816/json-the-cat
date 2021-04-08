const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) =>{
    if (error) {
      throw new Error(`Connection Error ${response.statusCode}`);
    }else if(response.statusCode === 200){
      if(body === "[]"){
        callback(`No breed found`, null);
      } else{
        const data = JSON.parse(body);
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = {
  fetchBreedDescription
};