import axios from "axios";

export default axios.create({
    baseURL: 'https://3eed-75-188-54-90.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});