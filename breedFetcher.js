const request = require('request');
const input = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, (error, response, body) =>{
  if(error){
    throw new Error(`Wrong domain name! Please write a proper one`);
  }
  //console.log(typeof body);
  const data =JSON.parse(body);
  console.log(data[0].description);
  //console.log(typeof data);
})