jest.mock('./fetch');
import { fetch } from "./fetch";
const {getNumber} = jest.requireActual('./fetch')


test('测试 fetch', () => {
    return fetch().then((data) => {
        expect(eval(data)).toEqual('123')
    })
})

test('测试 getNumebr', () => {
    expect(getNumber()).toEqual('123')
})