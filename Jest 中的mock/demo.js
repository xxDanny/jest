import axios from  'axios';

export const runCallback = (callback) => {
    callback();
}

export const createObject = (className) => {
    new className();
}

export const getData = () => {
    axios.get('/api').then((res) => res.data)
}