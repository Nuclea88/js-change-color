import { describe, expect, it, beforeAll } from "vitest";
import { JSDOM } from "jsdom";
import { changeColor, changeText, changeStyles } from "../src/partOne/js/partOne";

describe("Part I", () => {
  let dom;
  let backgroundMock;
  let textMock;

  beforeAll(async () => {
    dom = await JSDOM.fromFile("./index.html", { runScripts: "dangerously" });

    backgroundMock = document.createElement("body");
    backgroundMock.classList.add("container");
    backgroundMock.id = "background";
    document.body.appendChild(backgroundMock);

    textMock = document.createElement("p");
    textMock.id = "text";
    document.body.appendChild(textMock);
  });
  it("should render the script in html", () => {
    const document = dom.window.document;
    const script = document.querySelector("script");
    expect(script).not.toBeNull();
  });
  it("should exist the function changeColor", async () => {
    expect(changeColor).toBeDefined();
    expect(typeof changeColor).toBe("function");
  });
  it("changeColor changes the background color to darkblue", async () => {
    changeColor();
    expect(backgroundMock.style.backgroundColor).toBe("darkblue");
  });
  it("should exist the function changeText", async () => {
    expect(changeText).toBeDefined();
    expect(typeof changeText).toBe("function");
  });
  it("should render default text is red", async () => {
    const document = dom.window.document;
    const text = document.getElementById("text");
    expect(text.innerHTML).toBe("red");
  });
  it("changeText changes the text to darkblue", async () => {
    changeText();
    expect(textMock.innerHTML).toBe("darkblue");
  });
  it("changeStyles changes the text and background color to darkblue", async () => {
    changeStyles();
    expect(backgroundMock.style.backgroundColor).toBe("darkblue");
    expect(textMock.innerHTML).toBe("darkblue");
  });
});
