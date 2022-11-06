import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '22104578-b37830bb47769ec8fcc7503cc';

export const getImages = async (query, page) => {
  const response = await axios.get(
    `?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`
  );
  return response.data;
};

// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '22104578-b37830bb47769ec8fcc7503cc';
// const axios = require('axios');

// export default class Api {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//     this.perPage = 40;
//   }

//   async fetchImages() {
//     try {
//       const response = await axios.get(
//         `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=${this.perPage}`
//       );

//       this.incrementPage();

//       return response;
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   incrementPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }
