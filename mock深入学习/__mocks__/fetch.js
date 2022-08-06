//import axios from 'axios';

// mock 一个假的fetch
export const fetch = () => {
    return new Promise((resolve, reject) => {
        resolve(
         "(function(){return '123'})()"
        )
    })
}

// 'function(){return '123'}()'