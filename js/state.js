class OrderStatus {
    modalBody = document.getElementById('modal-body');
	constructor(name, nextStatus) {
		this.name = name;
		this.nextStatus = nextStatus;
	}

	next() {
		return new this.nextStatus();
	}
}

class StartOrder extends OrderStatus {
	constructor() {
       
		super('order', ConfirmOrder);
        this.modalBody.innerHTML="StartOrder";
	}
}

class ConfirmOrder extends OrderStatus {
	constructor() {
        
		super('confirm', Delivered);
        this.modalBody.innerHTML="ConfirmOrder";
	}
}

class Delivered extends OrderStatus {
	constructor() {
       
		super('delivered', Delivered);
        this.modalBody.innerHTML="Delivered";
	}
}

class Order {
	constructor() {
		this.state = new StartOrder();
	}

	nextState() {
		this.state = this.state.next();
	};
    // cancelOrder(){
    //     this.state.name = 
    // }
}

export {Order}