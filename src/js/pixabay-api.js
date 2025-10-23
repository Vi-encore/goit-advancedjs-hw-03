const key = '24152486-dede519cf70640e98e72cca28';

export default function fetchPic(value) {
  return fetch(
    `https://pixabay.com/api/?key=${key}&&q=${value.trim()}&&image_type=photo&&orientation=horizontal&&safesearch=true`
  ).then(res => {
    if (!res.ok) throw new Error(response.status);
    return res.json();
  });
  // .then(data => {
  //   console.log(data);
  //   if (data.hits.length === 0)
  //     throw 'Sorry, there are no images matching your search query. Please try again!';
  //   return data;
  // })
  // .catch(error => console.log(error));
}
