import axios from "axios";

const KEY = 'AIzaSyBsKou6oSiHXE5qo9TggH9ZvNSZoHrPkIA';

const youtubeApi = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params : {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});



export default youtubeApi