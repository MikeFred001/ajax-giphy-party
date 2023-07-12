"use strict";

console.log("Let's get this party started!");

const apiKey = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
const url = 'https://api.giphy.com/v1/gifs/search';

// click handler for submit button
$('#btn_search').on("click", getGif);
$('#btn_remove').on("click", removeGifs);


/** Clears gif field */
function removeGifs() {
  $('#gifFeed').empty();
}

/** Retrieves a gif from GIPHY API, appends it to the DOM */
async function getGif(evt) {
  evt.preventDefault();

  let search = $('#bar_search').val();
  let $gifFeed = $('#gif_feed');

  let gifResponse = await axios.get(url, { params: { q: search, api_key: apiKey } });
  let result = gifResponse.data.data[0].images.original.url;
  let $image = $(`<img src= ${result}>`);

  $gifFeed.append($image);

  $('#bar_search').val('');
}