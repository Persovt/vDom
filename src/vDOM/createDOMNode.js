export const createDOMNode = ({ tagName, props, children }) => {
    const node = document.createElement(tagName);
    console.log(children);

    if (Object.values(props).length > 0)
      Object.entries(props).forEach(([key, value]) => {
        node.setAttribute(key, value);
      });

    children.forEach((child) => {
      if (typeof child !== "string") node.appendChild(createDOMNode(child));
      else node.innerHTML = child;
    });

    return node;
  };