"use strict";

console.log("Let's get this party started!");

const apiKey = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
const url = 'https://api.giphy.com/v1/gifs/search';
// global gifFeed

// click handler for submit button
$('#btn_search').on("click", getGif);
$('#btn_remove').on("click", removeGifs);


/** Clears gif field */
function removeGifs(evt) {
  evt.preventDefault();
  $('#gif_feed').empty();
}

/** Retrieves a gif from GIPHY API, appends it to the DOM */
// Functional decomposition
async function getGif(evt) {
  evt.preventDefault();

  let search = $('#bar_search').val(); // Better variable name
  let $gifFeed = $('#gif_feed');

  let gifResponse = await axios.get(url, { params: { q: search, api_key: apiKey } });
  let result = gifResponse.data.data[0].images.original.url; // gifResult? Something better
  let $image = $(`<img src= ${result}>`);

  $gifFeed.append($image);

  $('#bar_search').val('');
}