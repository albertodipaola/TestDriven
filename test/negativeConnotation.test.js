import negativeConnotation from "../src/negativeConnotation.js";

describe("negativeConnotation", () => {
  it("'A big brown fox caught a bad rabbit' is true?", () => {
    expect(negativeConnotation("A big brown fox caught a bad rabbit")).toBe(true);
  });

  it("'Xylophones can obtain Xenon.' is false?", () => {
    expect(negativeConnotation("Xylophones can obtain Xenon")).toBe(false);
  });
});
