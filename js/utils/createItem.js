//globals
var baseUrl = "http://localhost:5000/api/v1";

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
      sendCreateItemReq(inputData, formType);
      //close form
      closeForm();
    } catch (error) {
      createFormAlert.textContent = error.message;
      createFormAlert.style.display = "block";
    }
  });
});

// req
async function sendCreateItemReq(inputData, resType) {
  try {
    console.log(inputData);
    const res = await axios.post(`${baseUrl}/${resType}/`, inputData, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTU3NDUxMzUsImV4cCI6MTY5NTc0ODczNX0.FXamkpCymAgNcsLjHVE22IohfJ0B4CO1pSNJbn188Vg",
      },
    });
    console.dir(res);
    if (res.data.success) {
      alert("Item created. Please refresh to see it.");
    }
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
