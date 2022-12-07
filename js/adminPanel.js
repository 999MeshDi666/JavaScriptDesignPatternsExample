import {AdminController, Admin} from "./bridge.js"

const admin = new Admin(new AdminController());
let adminFormWrapper = document.getElementById('form_control-wrapper');
let adminForm = document.getElementById('adminForm')
let controlBtn = document.getElementById('btn-control-id');
const removeInputs = () =>{
    if(adminFormWrapper.childElementCount != 0){
       let child = adminFormWrapper.lastElementChild;
       while(child){
          adminFormWrapper.removeChild(child);
          child = adminFormWrapper.lastElementChild;
       }
    }
}
const generateInputs = (list) => {
   list.forEach((elem)=>{
      let filedSet = document.createElement('fieldset');
      filedSet.className="my-2";

      let input = document.createElement('input');
      input.type = elem.type;
      input.id = elem.title;
      input.name = elem.title;
      input.className= elem.class;
      input.placeholder = elem.placeholder;
      input.required = elem.required;
 
     
      let label = document.createElement('label');
      label.htmlFor = elem.title;
      label.textContent = elem.placeholder;
      filedSet.appendChild(label);
      filedSet.appendChild(input);
      adminFormWrapper.appendChild(filedSet);
    })
    
} 
const adminPanelActions = (action) =>{
   let addFields = [
      {
         type: "text",
         title: "title",
         value:"",
         placeholder: "Название товара",
         class: "form-control",
         required: true
      },
      {
         type: "text",
         title: "subtitle",
         value:"",
         placeholder: "Подзаголовк",
         class: "form-control",
         required: true
      },
      {
         type: "text",
         title: "price",
         value:"",
         placeholder: "Цена",
         class: "form-control",
         required: true
      },
      {
         type: "text",
         title: "src",
         value:"",
         placeholder: "Путь до картинки",
         class: "form-control",
         required: true
      },
      {
         type: "textarea",
         title: "desc",
         value:"",
         placeholder: "Описание товара",
         class: "form-control",
         required: true
      },
      {
         type: "checkbox",
         title: "availability",
         value:"",
         placeholder: "Доступность: ",
         class: "form-check-input",
         required: false
      },
      {
         type: "submit",
         title: "submit",
         value: "Выполнить",
         placeholder: "",
         class: "btn btn-success mt-4 submit-control",
         required: false
      },
   
   ];
   let removeFields = [
      {
         type: "text",
         title: "title",
         placeholder: "Название товара",
         class: "form-control",
         required: true
     },
     {
      type: "submit",
      title: "submit",
      value: "Выполнить",
      placeholder: "",
      class: "btn btn-success mt-4 submit-control",
      required: false
   },
   ]
   let availableFields = [
       {
           type: "text",
           title: "title",
           placeholder: "Название товара",
           class: "form-control",
           required: true
       },
       {
         type: "checkbox",
         title: "availability",
         placeholder: "Доступность: ",
         class: "form-check-input",
         required: false
      },
      {
         type: "submit",
         title: "submit",
         value: "Выполнить",
         placeholder: "",
         class: "btn btn-success mt-4 submit-control",
         required: false
      },
   ];
   adminFormWrapper.setAttribute('data-action', action)

   removeInputs();
   if(action === "add"){
      generateInputs(addFields);
   }
   if(action === "remove"){
      generateInputs(removeFields);
   }
   if(action === "available"){
      generateInputs(availableFields);
   }
}

adminPanelActions('add');

adminForm.addEventListener('submit', (e)=>{
   e.preventDefault();
   let title = document.getElementById("title");
   let subTitle = document.getElementById('subtitle')
   let price = document.getElementById('price')
   let src = document.getElementById('src')
   let desc = document.getElementById('desc')
   let availability = document.getElementById('availability')
   
   if(adminFormWrapper.getAttribute('data-action') === "add"){
      console.log(adminFormWrapper.getAttribute('data-action'))
      admin.add(title.value, subTitle.value, desc.value, price.value, availability.checked, src.value);
   }
   else if(adminFormWrapper.getAttribute('data-action') === "remove"){
      admin.remove(title.value);
      console.log(adminFormWrapper.getAttribute('data-action'))
   }
   else if(adminFormWrapper.getAttribute('data-action') === "available"){
      admin.availability(title.value, availability.checked);
      console.log(adminFormWrapper.getAttribute('data-action'))
   }
   adminForm.reset()
})

controlBtn.addEventListener('click', (e)=>{
   let action = e.target.dataset.action;
   adminPanelActions(action)  
})





export {adminPanelActions}
