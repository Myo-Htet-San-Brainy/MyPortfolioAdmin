//SELECTORS
const parentContainer = checkElementNull(".content-items");
const formContainer = checkElementNull(".transparent-bg");

//IMPORTS
import { checkElementNull } from "./checkElementNull.js";
import { itemTemplates, baseUrl, updateFormTemplates } from "./data.js";
//LOGIC
// DISPLAY LOGIC
var resType = parentContainer.dataset.type;
var itemTemplateGenerator = itemTemplates[resType];
async function fetchData() {
  try {
    parentContainer.textContent = "Fetching Data...";
    const res = await axios.get(`${baseUrl}/${resType}`);
    if (res.data.success) {
      //iterate over data and show content
      displayItemsUsingData(res.data.data);
      //add event listeners on delete btns
      addListenersOnDeleteBtns();
      //add event listeners on update btns
      // addListenersOnUpdateBtns(res.data.data);
      return;
    }
    throw new Error();
  } catch (error) {
    alert("An error happens while fetching data:(");
  }
}
fetchData();

function displayItemsUsingData(data) {
  let items = data.map((item) => {
    return itemTemplateGenerator(item);
  });
  items = items.join(" ");
  parentContainer.innerHTML = items;
}

//DELETE RELATED LOGIC
function addListenersOnDeleteBtns() {
  let deleteBtns = checkElementNull(".link-delete-button", true);
  deleteBtns = Array.from(deleteBtns);
  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      //get id and resType
      const container = btn.parentElement.parentElement;
      const id = container
        .querySelector(".content-item-id")
        .textContent.split(" ")[1];
      const resType = btn.dataset.type;
      //send delete req
      sendDeleteReq(id, resType);
    });
  });
}

async function sendDeleteReq(id, resType) {
  try {
    const res = await axios.delete(`${baseUrl}/${resType}/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });
    if (res.data.success) {
      alert("Successful data deletion.Please refresh to see updated data.");
      return;
    }
    throw new Error();
  } catch (error) {
    console.dir(error);
    alert("An error happens while deleting data:(");
  }
}

// UPDATE RELATED LOGIC
function addListenersOnUpdateBtns(data) {
  let updateBtns = checkElementNull(".link-update-button", true);
  updateBtns = Array.from(updateBtns);
  updateBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      //get restype, id
      const resType = btn.dataset.type;
      const container = btn.parentElement.parentElement;
      const id = container
        .querySelector(".content-item-id")
        .textContent.split(" ")[1];
      // get the form and fill values in it
      const updateFormGenerator = updateFormTemplates[resType];
      const clickedItem = data.filter((item) => String(item._id) === id);
      const updateFormTemplate = updateFormGenerator(clickedItem[0]);
      //show form
      formContainer.innerHTML = updateFormTemplate;
      formContainer.classList.add("show-form");
      //CLOSE FORM LISTENER
      const formCloseBtn = checkElementNull(".form-close-cross");
      formCloseBtn.addEventListener("click", (e) => {
        e.preventDefault();
        closeForm();
      });
      //UPDATE SUBMIT BTN LOGIC
      const updateSubmitBtn = checkElementNull(".submit-form-btn");
      const form = checkElementNull(".form");
      const createFormAlert = checkElementNull(".create-form-alert");
      updateSubmitBtn.addEventListener("click", (e) => {
        try {
          e.preventDefault();
          //validate data, throw errs accordingly
          const formData = new FormData(form);
          const inputData = validateForm(formData);
          console.log(inputData);
          //send req

          //close form
          closeForm();
        } catch (error) {
          createFormAlert.textContent = error.message;
          createFormAlert.style.display = "block";
        }
      });
    });
  });
}

//CLOSE FORM LOGIC
const closeForm = function () {
  formContainer.classList.remove("show-form");
};

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
