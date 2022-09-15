import axios from "axios";

const baseUrl = 'https://youtube-v31.p.rapidapi.com';

const options = {
    url: baseUrl,
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': 'a2575e7cefmshd978fdf5250f940p1120aajsnf0715aa4ad87',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};


export const fetchFromApi = async (url) => {
    let response = await axios.get(`${baseUrl}/${url}`,options);
    const {data} = response;
    return data;
}