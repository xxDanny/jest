import axios from "axios";

// 回调
// export const fetchData = (callback) => {
//     let url = 'http://www.dell-lee.com/react/api/demo.json';
//     axios.get(url)
//         .then((res) => {
//             callback(res.data)
//         })
// }

export const fetchData = (callback) => {
    let url = 'http://www.dell-lee.com/react/api/demo.json';
    return axios.get(url)
}