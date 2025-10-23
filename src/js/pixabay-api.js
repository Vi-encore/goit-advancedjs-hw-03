const key = '24152486-dede519cf70640e98e72cca28';

export default function fetchPic(value) {
  const searchParams = new URLSearchParams({
    key: '50950053-db3558a1af50bab2399c0c009',
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return fetch(`https://pixabay.com/api/?${searchParams}`).then(res => {
    if (!res.ok) throw new Error(response.status);
    return res.json();
  });
}
