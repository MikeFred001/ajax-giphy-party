"use strict";
console.log("Let's get this party started!");
const apiKey = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
let url = 'https://api.giphy.com/v1/gifs/search';

// click handler for submit button
$('#btn_search').on("click", getGif);
$('#btn_remove').on("click")

async function getGif(evt) {
  evt.preventDefault();

  let search = $('#bar_search').val();
  let $gifFeed = $('#gif_feed');

  let gifResponse = await axios.get(url, {params: {q: search, api_key: apiKey}});
  console.log(gifResponse.data);
  $gifFeed.append(gifResponse.data.data[0].images.original.url);
}