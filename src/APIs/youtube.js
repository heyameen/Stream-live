import axios from "axios";

const KEY = 'AIzaSyD5gEH74s5sizlbr5IOJoBTa_BI7Aqi1UY';

const youtubeApi = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params : {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});



export default youtubeApi