import { textToHtml } from "./stringUtils";

describe(`string utils`, () => {
  test("textToHtml", () => {
    const input1 = `<div><button onClick=alert('alert')"">mybutton</button></div>`;
    const expectedResult1 = `<html><body>&lt;div&gt;&lt;button onClick=alert('alert')""&gt;mybutton&lt;/button&gt;&lt;/div&gt;</body></html>`;
    expect(textToHtml(input1)).toBe(expectedResult1);

    const input2 = `Line 1
Line 2
Line 3
Line 4`;
    const expectedResult2 = `<html><body>Line 1 <br/>Line 2 <br/>Line 3 <br/>Line 4</body></html>`;
    expect(textToHtml(input2)).toBe(expectedResult2);

    const input3 = `!"#$%&'()*+,-./:;<=>?@{|}-~`;
    const expectedResult3 = `<html><body>!"#$%&amp;'()*+,-./:;&lt;=&gt;?@{|}-~</body></html>`;
    expect(textToHtml(input3)).toBe(expectedResult3);
  });
});
