class OrderStatus {
	constructor(name, nextStatus, prevStatus) {
		this.name = name;
		this.nextStatus = nextStatus;
		this.prevStatus = prevStatus;
	}

	next() {
		return new this.nextStatus();
	}
	prev(){
		return new this.prevStatus();
	}
	
}

class StartOrder extends OrderStatus {
	constructor() {
		super('order', ConfirmOrder, Delivered);
	}
}

class ConfirmOrder extends OrderStatus {
	constructor() {
		super('confirm', Delivered, StartOrder);
	}
}

class Delivered extends OrderStatus {
	constructor() {
		super('delivered', StartOrder, ConfirmOrder);
	}
}

class Order {
	sandwich = JSON.parse(localStorage.getItem('list'))
	constructor() {
		this.state = new StartOrder();
	}

	nextState(modalPrevBtn) { 
		this.state = this.state.next();

        this.state.name === "confirm" ?
		modalPrevBtn.style.display = "block": 
		modalPrevBtn.style.display = "none"
	}
	prevState(modalPrevBtn){
		this.state = this.state.prev();
		this.state.name === "confirm" ?
		modalPrevBtn.style.display = "block": 
		modalPrevBtn.style.display = "none"
		
    }
	orderContent(modalBody){

		if(this.state.name === "order"){
			let id = modalBody.getAttribute('data-index')
			modalBody.innerHTML = 
			`<ul>
				<li> Title: ${this.sandwich[id][1]['title']}</li>
				<li> Subtitle: ${this.sandwich[id][1]['subtitle']}</li>
				<li> Description: ${this.sandwich[id][1]['desc']}</li>
				<li> Price: ${this.sandwich[id][1]['price']}</li>
			</ul>`
		}
		else if(this.state.name === "confirm"){
			modalBody.innerHTML = "confirm"
		}
		else if(this.state.name === "delivered"){
			modalBody.innerHTML = "delivered"
		}
		
	}
   
}

export {Order}