import timer from './timer'

beforeEach(function() {
    jest.useFakeTimers();
})
test('测试 timer', () => {
   const fn = jest.fn();
   timer(fn);
   jest.advanceTimersByTime(1000)
   expect(fn).toHaveBeenCalledTimes(2);
})