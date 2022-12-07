import {addSandwich, sandwiches} from "./flyWeight.js";
class Controller{
    constructor() {
       
    }
    add(title,subtitle,desc,price,availability,src){
        addSandwich(title,subtitle,desc,price,availability,src)
        localStorage.setItem('list', JSON.stringify([...sandwiches]))
    }
    remove(key){
        sandwiches.delete(key)
        localStorage.setItem('list', JSON.stringify([...sandwiches]))
    }
    availability(title, isAvailable)
    {
        sandwiches.get(title).availability = isAvailable;
        localStorage.setItem('list', JSON.stringify([...sandwiches]))
    }

}
class AdminController extends Controller{
    constructor() {
        super();
    }  
}

class User{
    constructor(control) {
        this.control = control
    }
    add(title,subtitle,desc,price,availability,src){
        this.control.add(title,subtitle,desc,price,availability,src)
    }
    remove(key){
        this.control.remove(key)
       
    }
    availability(title, isAvailable){
        this.control.availability(title, isAvailable)
    }
}
class Admin extends User{
    constructor(control) {
        super(control);
    }
}

export {AdminController, Admin}