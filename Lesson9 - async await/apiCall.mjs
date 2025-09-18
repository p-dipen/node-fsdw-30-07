import fetch from 'node-fetch';
let url = 'https://v2.jokeapi.dev/joke/Programming?type=single';

async function fetchData() {
  try {
    let res = await fetch(url);
    console.log(Reflect.ownKeys(res));
    let resJson = await res.json();
    console.log(resJson);
  } catch (err) {
    console.error(err);
  }
}

fetchData();
