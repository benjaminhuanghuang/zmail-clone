import { htmlToText } from "./domUtils";

describe("htmlToText", () => {
  // Mock the console.error to avoid polluting test output
  let consoleErrorSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  // Test for basic text extraction
  test("should extract basic text from HTML string", () => {
    const html = "<div>Hello World</div>";
    const result = htmlToText(html);
    expect(result).toBe("Hello World");
  });

  // Test for line breaks within block elements
  test("should preserve line breaks between block elements", () => {
    const html = "<div>First line</div><div>Second line</div>";
    const result = htmlToText(html);
    expect(result).toBe("First line\nSecond line");
  });

  // Test for BR tags - this was the problematic case
  test("should preserve empty lines from BR tags", () => {
    const html = "<div>a</div><br/><div>b</div>";
    const result = htmlToText(html);
    expect(result).toBe("a\n\nb");
  });

  // Test for multiple BR tags
  test("should preserve multiple consecutive line breaks", () => {
    const html = "<div>a</div><br/><br/><div>b</div>";
    const result = htmlToText(html);
    expect(result).toBe("a\n\n\nb");
  });

  // Test for mixed content
  test("should handle mixed content with proper line breaks", () => {
    const html = `
      <div>First paragraph</div>
      <br/>
      <div>Second paragraph with <span>inline</span> elements</div>
      <p>Third paragraph</p>
    `;
    const result = htmlToText(html);
    expect(result).toBe(
      "First paragraph\n\nSecond paragraph with inline elements\nThird paragraph"
    );
  });

  // Test for PRE tags
  test("should preserve formatting in PRE tags", () => {
    const html = "<pre>  Preformatted\n  Text  \n</pre>";
    const result = htmlToText(html);
    expect(result).toBe("  Preformatted\n  Text  \n");
  });

  // Test for nested elements
  test("should handle nested elements correctly", () => {
    const html = `
      <div>
        <h1>Title</h1>
        <p>Paragraph <strong>with</strong> formatting</p>
      </div>
    `;
    const result = htmlToText(html);
    expect(result).toBe("Title\nParagraph with formatting");
  });

  // Test for BR tags within block elements
  test("should handle BR tags within block elements", () => {
    const html = "<div>Line 1<br/>Line 2</div>";
    const result = htmlToText(html);
    expect(result).toBe("Line 1\nLine 2");
  });

  // Test for complex HTML structures
  test("should handle complex HTML structures", () => {
    const html = `
      <article>
        <header>
          <h1>Article Title</h1>
        </header>
        <section>
          <p>First paragraph</p>
          <br/>
          <p>Second paragraph</p>
        </section>
        <footer>Footer text</footer>
      </article>
    `;
    const result = htmlToText(html);
    expect(result).toBe(
      "Article Title\nFirst paragraph\n\nSecond paragraph\nFooter text"
    );
  });

  // Test for input as DOM element
  test("should work with DOM element input", () => {
    document.body.innerHTML = "<div>Element content</div>";
    const element = document.body.firstChild;
    const result = htmlToText(element as Element);
    expect(result).toBe("Element content");
  });

  // Test for error handling with invalid input
  test("should handle invalid input gracefully", () => {
    const result = htmlToText(null);
    expect(result).toBe("");
    expect(console.error).toHaveBeenCalled();
  });

  // Test for whitespace handling
  test("should normalize whitespace around line breaks", () => {
    const html =
      "<div>Text with    spaces</div>\n  \n<div>   More text   </div>";
    const result = htmlToText(html);
    expect(result).toBe("Text with    spaces\nMore text");
  });

  // Test for empty elements
  test("should handle empty elements properly", () => {
    const html = "<div></div><br/><div>Content</div>";
    const result = htmlToText(html);
    expect(result).toBe("\nContent");
  });

  // Test specifically for the case mentioned in the problem
  test("should correctly preserve empty line in the example case", () => {
    const html = `
      <div>a</div>
      <br/>
      <div>b</div>
    `;
    const result = htmlToText(html);
    expect(result).toBe("a\n\nb");
  });
});
