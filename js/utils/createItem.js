//SELECTORS
const createItemBtn = checkElementNull(".create-btn");
const formContainer = checkElementNull(".transparent-bg");

//IMPORTS
import { checkElementNull } from "./checkElementNull.js";
import { formTemplates } from "./data.js";

//LOGIC
//EVENT LISTENER CREATE BTN
createItemBtn.addEventListener("click", (e) => {
  //GET THE CORRECT FORM TEMPLATE N ADD IT TO PARENT
  const formType = e.currentTarget.dataset.page;
  const formTemplate = formTemplates[formType];
  formContainer.innerHTML = formTemplate;
  //ADD CLASS TO PARENT
  formContainer.classList.add("show-form");
  //CLOSE FORM LISTENER
  const formCloseBtn = checkElementNull(".form-close-cross");
  formCloseBtn.addEventListener("click", () => {
    closeForm();
  });
  //CREATE ITEM BTN LISTENER
  const form = checkElementNull(".form");
  form.addEventListener("click", (e) => {
    e.preventDefault();
    //validate data, throw errs accordingly and send req
    //clear inputs
    //close form
    closeForm();
  });
});

//CLOSE FORM LOGIC
const closeForm = function () {
  formContainer.classList.remove("show-form");
};
