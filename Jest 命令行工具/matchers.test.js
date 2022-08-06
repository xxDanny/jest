// test('对象 a 是否等于 { one : 1 }', () => {
//     const a = undefined
//     expect(a).toBeNull()
// })

// test('测试 toBeUndefined', () => {
//     const a = undefined
//     expect(a).toBeUndefined()
// })

// test('测试 toBeUndefined', () => {
//     const a = []
//     expect(a).toBeUndefined()
// })

// test('测试 toBeDefined', () => {
//     const a = []
//     expect(a).toBeDefined()
// })

// test('测试 toBeTruthy', () => {
//     const a = null
//     expect(a).toBeTruthy()
// })

// test('测试 toBeFalsy', () => {
//     const a = null
//     expect(a).toBeFalsy()
// })


// test('测试 toBeFalsy', () => {
//     const a = 1
//     expect(a).not.toBeFalsy()
// })


// test('测试 toBeGreaterThan', () => {
//     const count = 10
//     expect(count).toBeGreaterThan(9)
// })


// test('测试 toBeLessThan', () => {
//     const count = 10
//     expect(count).toBeLessThan(9)
// })

// test('测试 toBeGreaterThan', () => {
//     const count = 10
//     expect(count).toBeGreaterThanOrEqual(9, 10) 
// })

// test('测试 toBeCloseTo', () => {
//     const num1 = 0.1;
//     const num2 = 0.2;
//     expect( num1 + num2 ).toEqual(0.3)
// })
// test('测试 toBeCloseTo', () => {
//     const num1 = 0.1;
//     const num2 = 0.2;
//     expect( num1 + num2 ).toBeCloseTo(0.3)
// })

// // String
// test('测试 toBeCloseTo', () => {
//     const str = 'http://www.baidu.com'
//     expect(str).toMatch('http')
// })

// test('测试 toBeCloseTo', () => {
//     const str = 'http://www.baidu.com'
//     expect(str).toMatch(/http/)
// })

// array，set
test('测试 toContain', () => {
    const arr = ['immoc','dell','lee']
    expect(arr).toContain('dell')
})


// 异常
const throwNewErrorFunc = () => {
    throw new Error('This is an Error')

}
test('测试 toContain', () => {
    expect(throwNewErrorFunc).toThrow()
})