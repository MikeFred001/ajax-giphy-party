"use strict";

console.log("Let's get this party started!");

const apiKey = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
const giphyUrl = 'https://api.giphy.com/v1/gifs/search';
const $gifFeed = $('gif_feed');
const $searchBar = $('#bar_search');

// click handler for submit button
$('#btn_search').on("click", retrieveAndDisplayGif);
$('#btn_remove').on("click", removeGifs);

/** Retrieves a gif from GIPHY API, appends it to the DOM */
async function getGifData() {
  let searchTerm = $searchBar.val();

  let giphyResponse = await axios.get(
    giphyUrl, { params: { q: searchTerm, api_key: apiKey } });
  let gifUrl = giphyResponse.data.data[0].images.original.url;

  return gifUrl;
}

async function retrieveAndDisplayGif(evt) {
  evt.preventDefault();

  let gifAddress = await getGifData();
  let gif = createGif(gifAddress);
  $gifFeed.append(gif);

  $('#bar_search').val('');
}


function createGif(url) {
  return $(`<img src= ${url}>`);
}

/** Clears gif field */
function removeGifs(evt) {
  evt.preventDefault();
  $('#gif_feed').empty();
}

// Hey Ed, if you see this, I was just trying to get some functional
// decomposition to work, but couldn't quite get it there. I just saved
// it in a separate file so I wasn't messing anything up. Thanks!