// import {sandwiches} from "./flyWeight.js";
// import {AdminController, Admin} from "./bridge.js"
// import { adminPanelActions } from "./adminPanel.js";

let items = document.getElementById('items');
let sandwich = JSON.parse(localStorage.getItem('list'))

for(let i = 0; i <sandwich.length; i++){
    let li = document.createElement('li');
    li.textContent = Object.values(sandwich[i][1])
    items.appendChild(li);
}
