export const checkElementNull = (selector, isList = false) => {
  if (isList) {
  } else {
    const element = document.querySelector(selector);
    if (element) {
      return element;
    } else {
      console.log(`Pls check the selector: ${selector}`);
    }
  }
};
