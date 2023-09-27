export const checkElementNull = (selector, isList = false) => {
  if (isList) {
    const elements = document.querySelectorAll(selector);

    if (elements.length) {
      // console.log(element);
      return elements;
    } else {
      console.log(`Pls check the selector: ${selector}`);
    }
  } else {
    const element = document.querySelector(selector);

    if (element) {
      // console.log(element);
      return element;
    } else {
      console.log(`Pls check the selector: ${selector}`);
    }
  }
};
