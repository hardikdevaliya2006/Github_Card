import axios from "axios";

const BASE_URL = `https://github-contributions-api.deno.dev/`

const contributions = axios.create({
    baseURL: BASE_URL
})

export default contributions