const API_TOKEN = "3af7a3c195922a63069e5982a56e3b4d"
export function getFilmsFromApiWithSearchedText (text,page) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text +'&page='+page
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

// API/TMDBApi.js

export function getImageFromApi (name) {
  return 'https://image.tmdb.org/t/p/w300' + name
}
