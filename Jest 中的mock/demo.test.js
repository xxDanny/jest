import { runCallback, createObject,getData } from "./demo";
import axios from "axios";

jest.mock('axios');

test('测试 runCallback',() => {
    // const func = jest.fn(() => {
    //     return '456'
    // });
    const func = jest.fn();
    func.mockReturnValueOnce('one').mockReturnValueOnce('two').mockReturnValueOnce('Three');
    runCallback(func);
    runCallback(func);
    runCallback(func);
    expect(func.mock.results[0].value).toEqual('one')
   
})

// test.only('测试 createObject',() => {
//     const func = jest.fn();
//     createObject(func);
//     console.log(func.mock) 
// })

// test.only('测试 getData',async () => {
//     axios.get.mockResolvedValueOnce({data: 'hello'})
//     await getData().then((data)=>{
//          expect(data).toBe('hello')
//     })
// })