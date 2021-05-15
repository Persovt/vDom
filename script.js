const createDOMNode = ({ tagName, props, children }) => {
  const node = document.createElement(tagName);
  console.log(children)
 

  if (Object.values(props).length > 0)
    Object.entries(props).forEach(([key, value]) => {
      node.setAttribute(key, value);
    });

  children.forEach((child) => {
    if(typeof child !== 'string')
      node.appendChild(createDOMNode(child));
      else node.innerHTML = child
  });

  return node;
};
const createVNode = (tagName, props = {}, children = []) => {
  return {
    tagName,
    props,
    children,
  };
};


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
setTimeout(( ) => {
  vNode = vNode2;
  console.log(123)
},5000)
const node = createDOMNode(vNode);

document.getElementById('app').appendChild(node)
console.log(node);
