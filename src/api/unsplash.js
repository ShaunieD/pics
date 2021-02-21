import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID -b3AJq7oSVmrdpNy-_AOBiqImZnZu-oEoQxutZadVX8',
    },
});