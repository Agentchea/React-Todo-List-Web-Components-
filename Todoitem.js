Class Todoitem extends HTMLElement {

    constructor () {
        super ()
        this.innerHTML = "Hi I am custom"
    }

}
customElements.define ("todo-item", Todoitem)