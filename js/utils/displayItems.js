//SELECTORS
const parentContainer = checkElementNull(".content-items");
//IMPORTS
import { checkElementNull } from "./checkElementNull.js";
import { itemTemplates, localBaseUrl, productionBaseUrl } from "./data.js";
//LOGIC
// DISPLAY LOGIC
var resType = parentContainer.dataset.type;
var itemTemplateGenerator = itemTemplates[resType];
async function fetchData() {
  try {
    parentContainer.textContent = "Fetching Data...";
    const res = await axios.get(`${localBaseUrl}/${resType}`);
    if (res.data.success) {
      //iterate over data and show content
      displayItemsUsingData(res.data.data);
      //add event listeners on delete btns
      addListenersOnDeleteBtns();
      //add event listeners on update btns
      addListenersOnUpdateBtns();
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
    const res = await axios.delete(`${localBaseUrl}/${resType}/${id}`, {
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
function addListenersOnUpdateBtns() {
  let updateBtns = checkElementNull(".link-update-button", true);
  updateBtns = Array.from(updateBtns);
  updateBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log("displaying a form");
    });
  });
}
