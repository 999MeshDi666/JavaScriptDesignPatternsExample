
import { Order } from "./state.js";

let items = document.getElementById('items');
let sandwich = JSON.parse(localStorage.getItem('list'))

for(let i = 0; i <sandwich.length; i++){
    items.innerHTML += `<div class="card" style="width: 18rem;" id="card" data-index=${i}>
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
                                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Заказать</button>
                            </div>
                        </div>`
}

// card.addEventListener('click', (e)=>{
//     console.log(e.target.dataset.index)
// })

let orderBtn = document.getElementById('order-btn');
const order = new Order();
orderBtn.addEventListener('click', ()=>{
    order.nextState();
    console.log(order.state.name)
})