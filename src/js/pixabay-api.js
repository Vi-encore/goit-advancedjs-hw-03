const key = '24152486-dede519cf70640e98e72cca28';

export default function fetchPic(value) {
  fetch(
    `https://pixabay.com/api/?key=${key}&&q=${value.trim()}&&image_type=photo&&orientation=horizontal&&safesearch=true`
  )
    .then(res => res.json())
    .then(data => {
      if (data.hits.length === 0)
        throw 'Sorry, there are no images matching your search query. Please try again!';
      console.log(data);
    })
    .catch(error => console.log(error));
}
