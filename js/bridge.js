import {addSandwich, sandwiches} from "./flyWeight.js";
class Controller{
    constructor() {
       
    }
    add(title,subtitle,desc,price,availability,src){
        addSandwich(title,subtitle,desc,price,availability,src)
    }
    remove(key){
        sandwiches.delete(key)
    }
    availability(title, isAvailable)
    {
        sandwiches.get(title).availability = isAvailable;
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