const request = require('request');

const url = process.argv[2];
const charId = 18;

request(url, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }

  const films = JSON.parse(body).results;
  const numMoviesWithWedge = films.reduce((acc, film) => {
    const characters = film.characters;
    if (characters.includes(`https://swapi-api.alx-tools.com/api/people/${charId}/`)) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);

  console.log(numMoviesWithWedge);
});

