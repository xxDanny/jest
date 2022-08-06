import axios from 'axios';

export const fetch = () => {
    axios.get('/api').then((res) => res.data)
}

// 'function(){return '123'}()'

export const getNumber = () => {
    return '123'
}