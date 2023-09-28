//SELECTORS
const passwordElement = checkElementNull(".password-input");
const loginBtn = checkElementNull(".login-submit-btn");

//IMPORTS
import { checkElementNull } from "../js/utils/checkElementNull.js";
import { baseUrl } from "./utils/data.js";

//LOGIC
//btn listening
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //get psw
  const psw = passwordElement.value;
  //check psw
  if (!psw) {
    alert("Please provide password.");
    return;
  }
  //send login req
  sendLoginReq(psw);
});

async function sendLoginReq(psw) {
  try {
    const res = await axios.post(`${baseUrl}/admin/adminLogin`, {
      password: psw,
    });
    if (res.data.success) {
      //store jwt
      localStorage.setItem("jwt", res.data.data);
      //proceed to links page
      window.location.href = "index.html";
      return;
    }
    throw new Error();
  } catch (error) {
    alert("Login not successful:(");
  }
}
