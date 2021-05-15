export const createVNode = (tagName, props = {}, children = []) => {
    return {
      tagName,
      props,
      children,
    };
  };