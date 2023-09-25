//SELECTORS
const openSidebarBtn = checkElementNull(".nav-button");
const closeSidebarBtn = checkElementNull(".sidebar-close-btn");
const sidebar = checkElementNull(".sidebar");

//IMPORTS
import { checkElementNull } from "./checkElementNull.js";

//LOGIC
// SIDEBAR
openSidebarBtn.addEventListener("click", () => {
  sidebar.classList.add("show-sidebar");
});
closeSidebarBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});
