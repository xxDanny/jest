import Counter  from './Counter';
let i;

describe('测试 Counter 对象',() => {
    let counter;
    let a;
    console.log('describe 1')
    beforeEach(() => {
        console.log('最外部的 beforeEach')
        i = 1;
        counter = new Counter();
    })

    describe('测试 Counter 中加法相关功能', () => {
       
        beforeEach(() => {
            console.log('测试加法的 beforeEach')
         
        })
        console.log('测试加法的 describle')
        test('测试 Counter 中的 addOne 方法',() => {
            counter.addOne()
            expect(counter.number).toBe(1)
        })
        test('测试 Counter 中的 addTwo 方法',() => {
            counter.addTwo()
            expect(counter.number).toBe(2)
        })
    })

    describe('测试 Counter 中减法相关功能', () => {
        test('测试 Counter 中的 minusOne 方法',() => {
            counter.minusOne()
            console.log(`minus : ${i}`)
            expect(counter.number).toBe(-1)
        })

        test('测试 Counter 中的 minusTwo 方法',() => {
            counter.minusTwo()
            expect(counter.number).toBe(-2)
        })
    })

})
    


