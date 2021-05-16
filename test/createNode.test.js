import { createVNode } from "../src/vDOM/createVNode";

test("vDom create element", () => {
  const test = createVNode("h1", { class: "h1" }, ["Hello, Virtual DOM"]);
  expect(test).toEqual({
    tagName: "h1",
    props: { class: "h1" },
    children: ["Hello, Virtual DOM"],
  });
});
test("vDom create null element", () => {
  const test = createVNode("h1");
  expect(test).toEqual({
    tagName: "h1",
    props: {},
    children: [],
  });
});

test("vDom create only props", () => {
  const test = createVNode("h1", { class: "h1" });
  expect(test).toEqual({
    tagName: "h1",
    props: { class: "h1" },
    children: [],
  });
});

test("vDom create only children", () => {
  const test = createVNode("h1", {}, ["Hello, Virtual DOM"]);
  expect(test).toEqual({
    tagName: "h1",
    props: {},
    children: ["Hello, Virtual DOM"],
  });
});
test("vDom create more one children", () => {
  const test = createVNode("div", { class: "container" }, [
    createVNode("span", { class: "p" }, [`count: 5`]),
    createVNode("button", { class: "p" }, ["+"]),
  ]);
  expect(test).toEqual({
    tagName: "div",
    props: { class: "container" },
    children: [
      {
        tagName: "span",
        props: { class: "p" },
        children: ["count: 5"],
      },
      {
        tagName: "button",
        props: { class: "p" },
        children: ["+"],
      },
    ],
  });
});
