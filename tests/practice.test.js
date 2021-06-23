const expect = require("chai").expect;
const encrypter = require("../src/practice");

describe("newMessage", () => {
  it("should return the new message given the shift", () => {
    const input = "Abc";
    const expected = "bcd";
    const actual = encrypter(input, 1);
    expect(actual).to.equal(expected);
  });
  it("should return the new message given the shift greater than 25", () => {
    const input = "Abc";
    const expected = "abc";
    const actual = encrypter(input, 26);
    expect(actual).to.equal(expected);
  });
});
