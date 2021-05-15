import {createVNode, createDOMNode} from './vDom/vDOM'

console.log(createVNode)
let vNode = createVNode("div", { class: "container" }, [
  createVNode("h1", { class: "h1" }, ["Hello, Virtual DOM"]),
  createVNode("p", { class: "p" }, ["Wow, its realy working ;)"]),
  createVNode("button", { class: "p" }, ["-"]),
  createVNode("span", { class: "p" }, [`count: 0`]),
  createVNode("button", { class: "p" }, ["+"]),
]);
let vNode2 = createVNode("div", { class: "container" }, [
  createVNode("h1", { class: "h1" }, ["Hello, Virtual DOM"]),
  createVNode("p", { class: "p" }, ["Wow, its realy working ;)"]),
  createVNode("button", { class: "p" }, ["-"]),
  createVNode("span", { class: "p" }, [`count: 5`]),
  createVNode("button", { class: "p" }, ["+"]),
]);
console.log(vNode)

const node = createDOMNode(vNode);

document.getElementById('app').appendChild(node)

