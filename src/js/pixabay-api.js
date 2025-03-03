import axios from "axios";

const API_KEY = "49140173-4874def0c004e38bcbb22fb6b";
const BASE_URL = "https://pixabay.com/api/";

export function fetchImages(query) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;

  return axios.get(url).then(response => {
    if (response.data.hits.length === 0) {
      return Promise.reject("No images found.");
    }
    return response.data.hits;
  });
}