export function htmlToText(input: string | Element | null): string {
  try {
    let element: Element;
    if (typeof input === "string") {
      const parser = new DOMParser();
      const doc = parser.parseFromString(input, "text/html");
      element = doc.body;
    } else if (input instanceof Element) {
      element = input;
    } else {
      throw new Error("Input must be an HTML string or a DOM element.");
    }

    const meaningful = Array.from(element.childNodes).filter((node) => {
      if (node.nodeType === Node.TEXT_NODE)
        return node.nodeValue?.trim() !== "";
      return node.nodeType === Node.ELEMENT_NODE;
    });

    if (
      meaningful.length === 1 &&
      meaningful[0]!.nodeType === Node.ELEMENT_NODE &&
      (meaningful[0] as Element).tagName.toUpperCase() === "PRE"
    ) {
      return (meaningful[0] as Element).textContent ?? "";
    }

    const blockTags = new Set([
      "DIV",
      "P",
      "H1",
      "H2",
      "H3",
      "H4",
      "H5",
      "H6",
      "UL",
      "OL",
      "LI",
      "SECTION",
      "ARTICLE",
      "HEADER",
      "FOOTER",
      "NAV",
      "ASIDE",
      "TABLE",
      "FORM",
      "BLOCKQUOTE",
      "HR",
      "ADDRESS",
      "DL",
      "DT",
      "DD",
      "FIELDSET",
      "FIGURE",
      "FIGCAPTION",
    ]);

    type Token = { type: "text"; content: string } | { type: "newline" };
    const tokens: Token[] = [];

    function processNode(node: Node): void {
      if (node.nodeType === Node.TEXT_NODE) {
        const value = node.nodeValue;
        if (value?.trim() === "") return;
        tokens.push({ type: "text", content: value! });
        return;
      }

      if (node.nodeType === Node.ELEMENT_NODE) {
        const tag = (node as Element).tagName.toUpperCase();

        if (tag === "BR") {
          tokens.push({ type: "newline" });
          return;
        }

        for (const child of Array.from(node.childNodes)) {
          processNode(child);
        }

        if (
          blockTags.has(tag) &&
          tokens.length > 0 &&
          tokens[tokens.length - 1]!.type !== "newline"
        ) {
          tokens.push({ type: "newline" });
        }
      }
    }

    processNode(element);

    let result = tokens
      .map((t) => (t.type === "newline" ? "\n" : t.content))
      .join("");
    result = result.replace(/ *\n */g, "\n");
    result = result.replace(/\n+$/g, "");
    return result;
  } catch (err) {
    console.error("htmlToText error:", err);
    return "";
  }
}
