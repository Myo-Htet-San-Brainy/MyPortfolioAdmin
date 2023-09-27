//SELECTORS
const parentContainer = checkElementNull(".content-items");
//IMPORTS
import { checkElementNull } from "./checkElementNull.js";
import { itemTemplates, localBaseUrl, productionBaseUrl } from "./data.js";
//LOGIC
//fetch data
var resType = parentContainer.dataset.type;
var itemTemplateGenerator = itemTemplates[resType];
async function fetchData() {
  try {
    parentContainer.textContent = "Fetching Data...";
    const res = await axios.get(`${localBaseUrl}/${resType}`);
    if (res.data.success) {
      //iterate over data and show content
      console.log(res.data.data);
      displayItemsUsingData(res.data.data);
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
