import uniqueInOrder from '../src/uniqueInOrder.js'

describe("uniqueInOrder", () => {
  it("'AAAABBBCCDAABBB'=>['A', 'B', 'C', 'D', 'A', 'B']", () => {
    expect(uniqueInOrder("AAAABBBCCDAABBB")).toStrictEqual(['A', 'B', 'C', 'D', 'A', 'B']);
  });
});
