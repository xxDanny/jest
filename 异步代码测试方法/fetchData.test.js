import {fetchData} from './fetchData';

// test('fetchData 获取数据内容为{ success : true }',(done) => {
//     fetchData((data)=>{
//         expect(data).toEqual({
//             success : true
//         })
//         done()
//     })
//  } )

//  test('fetchData 获取数据内容为{ success : true }',(done) => {
//     return fetchData().then((res)=>{
//         expect(res.data).toEqual({
//             success : true
//         });
//         done();
//     })
//  } )

// // 另外一种方法测试 promise
//  test('fetchData 获取数据内容为{ success : true }',() => {
//     return expect(fetchData()).resolves.toMatchObject({
//         data: {
//             success : true
//         }
//     })    
// })

// // 测试 promise 方法三
//  test('fetchData 获取数据内容为{ success : true }',async () => {
//     await expect(fetchData()).resolves.toMatchObject({
//         data: {
//             success : true
//         }
//     })    
//  })


// 测试 promise 方法四
 test('fetchData 获取数据内容为{ success : true }',async () => {
    const res = await fetchData();
    expect(res.data).toMatchObject({
        success : true
    })
 })


//  test('fetchData 获取数据内容为 404',() => {
//      //确保至少执行了一个 expect
//     expect.assertions(1);
//     return fetchData().catch((e)=>{
//         expect(e.toString().indexOf('404') > -1).toBeTruthy()
//     })
//  } )


//  test('fetchData 获取数据内容为 404',() => {
//     return expect(fetchData()).rejects.toThrow();
//  } )


//  test('fetchData 获取数据内容为 404',async() => {
//     await expect(fetchData()).rejects.toThrow();
//  })


//  test('fetchData 获取数据内容为 404', async() => {
//     expect.assertions(1);
//     try{
//         await fetchData()
//     }
//     catch(e){
        
//         expect(e.toString().indexOf('404') > -1).toBeTruthy()
//     }
//  })