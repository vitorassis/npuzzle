export default class Stack {
    s;

    constructor() {
        this.s = [];
    }

    push(obj) {
        this.s.push(obj);
    }

    pop(){
        return this.s.pop();
    }

    top(){
        return this.s[this.s.length-1];
    }

    isEmpty(){
        return this.s.length == 0;
    }

    clear(){
        this.s = [];
    }
}