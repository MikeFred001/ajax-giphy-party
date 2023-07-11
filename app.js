"use strict";
console.log("Let's get this party started!");
const apiKey = MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym;
let url = 'https://api.giphy.com/v1/gifs/search';

// click handler for submit button
$('#btn_search').on("click", getGif);


async function getGif() {
  let gif = await axios.get('?q=&api_key=');// get (`${url}{apiKey}`)

}