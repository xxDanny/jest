import Util from "./util";

let util = null;

beforeAll(() => {
    util = new Util();
})


test("Util 中的 a 方法", () =>{
    expect(util.a()).toBe('a');
})