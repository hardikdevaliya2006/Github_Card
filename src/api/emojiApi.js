import axios from "axios";

const BASE_URL = `https://emoji-api.com`;

const emojiApi = axios.create({
  baseURL: BASE_URL,
  params: {
    access_key: '9d3526613d42b24b7246a36cd00f7f11a452b376',
  },
});

export default emojiApi;

// import.meta.env.VITE_ACCESS_KEY
