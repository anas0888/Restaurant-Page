
import {homeContent} from "./home.js";

 const home = homeContent();

const homeBtn = document.querySelector(".home");
const content = document.querySelector(".content");

homeBtn.addEventListener('click',() => {
content.append(home);

});
