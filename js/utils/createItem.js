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
  const submitFormBtn = checkElementNull(".submit-form-btn");
  const form = checkElementNull(".form");
  const createFormAlert = checkElementNull(".create-form-alert");
  submitFormBtn.addEventListener("click", (e) => {
    try {
      e.preventDefault();
      //validate data, throw errs accordingly
      const formData = new FormData(form);
      const inputData = validateForm(formData);
      //send req
      sendReq(inputData);
      //close form
      closeForm();
      //   alert("Item created. Please refresh to see it.");
    } catch (error) {
      console.log("form main");
      createFormAlert.textContent = error.message;
      createFormAlert.style.display = "block";
    }
  });
});

//Post req
async function sendReq(inputData) {
  try {
    const url = "http://localhost:5000/api/v1/links/";
    console.log(inputData);
    const test = await axios.post(url, inputData);
  } catch (error) {
    console.dir(error);
    alert("Unsuccessful creation:( Try again later.");
  }
}

//VALIDATE FORM
function validateForm(formData) {
  const result = {};
  const entries = formData.entries();
  for (const entry of entries) {
    const [key, value] = entry;
    if (value === "") {
      throw new Error("Please provide all fields");
    } else {
      result[key] = value;
    }
  }
  return result;
}

//CLOSE FORM LOGIC
const closeForm = function () {
  formContainer.classList.remove("show-form");
};
