import splitStrings from '../src/splitStrings.js';

describe('function splitStrings', () => { 
    it("a string 'abc' is splitted in ['ab', 'c_']?", () => {
      expect(splitStrings("abcde")).toStrictEqual(["ab", "cd", "e_"]);
    });
    it("a string 'abcdef' is splitted in ['ab', 'cd', 'ef']?", () => {
      expect(splitStrings("abcdef")).toStrictEqual(["ab", "cd", "ef"]);
    });
 })