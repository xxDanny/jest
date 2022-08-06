import { generateConfig, generateAnotherConfig } from "./snapshot";

// test('测试 generateConfig',() => {
//     expect(generateConfig()).toEqual({
//         server: 'http://localhost',
//         port: 8080
//     })
// })

// test('测试 generateConfig',() => {
//     expect(generateConfig()).toMatchSnapshot({
//         time: expect.any(Date)
//     });
// })

// test('测试 generateAnotherConfig',() => {
//     expect(generateAnotherConfig()).toMatchSnapshot();
// })

test("测试 generateAnotherConfig", () => {
  expect(generateAnotherConfig()).toMatchInlineSnapshot(`
    Object {
      "port": 8081,
      "server": "http://localhost",
    }
  `);
});
