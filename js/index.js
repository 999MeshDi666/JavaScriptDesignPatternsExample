
import { Order } from "./state.js";

let items = document.getElementById('items');
let sandwich = JSON.parse(localStorage.getItem('list'))

for(let i = 0; i <sandwich.length; i++){
    items.innerHTML += `<div class="card" style="width: 18rem;">
                            <img src=${sandwich[i][1]['src']} class="card-img-top card-img">
                            <div class="card-body">
                                <h5 class="card-title">${sandwich[i][1]['title']}</h5>
                                <p class="card-text">${sandwich[i][1]['subtitle']}</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Описание: ${sandwich[i][1]['desc']}</li>
                                <li class="list-group-item">Доступность: 
                                    ${sandwich[i][1]['availability']===true?"Доступно":"Не доступно"}</li>
                                <li class="list-group-item">Цена: ${sandwich[i][1]['price']}</li>
                            </ul>
                            <div class="card-body">
                            <button 
                                class="btn btn-primary order-btn" 
                                ${sandwich[i][1]['availability']===true? "":"disabled"} 
                                data-bs-toggle="modal" data-index=${i} 
                                data-bs-target="#staticBackdrop">Заказать
                            </button>
                            </div>
                        </div>`
}
const order = new Order();
let orderBtns = document.querySelectorAll('.order-btn');
let modalBody = document.getElementById('modal-body');
let modalNextBtn = document.getElementById('modal-next-btn');
let modalPrevBtn = document.getElementById('modal-prev-btn');

orderBtns.forEach((elem)=>
    elem.addEventListener('click', (e)=>{
        modalBody.setAttribute('data-index', e.target.dataset.index) 
        order.orderContent(modalBody)
    })
)

modalNextBtn.addEventListener('click', ()=>{
    order.nextState(modalPrevBtn);
    order.orderContent(modalBody);
})

modalPrevBtn.addEventListener('click', ()=>{
    order.prevState(modalPrevBtn)
    order.orderContent(modalBody);
})