import { add, minus, multi } from './math';

test('测试加法 3 + 7', () => {
    expect(add(3, 7)).toBe(10);
})