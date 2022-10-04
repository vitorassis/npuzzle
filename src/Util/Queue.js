export default class Queue{
    q;
    constructor(){
        this.q = [];
    }

    push(obj){
        this.q.push(obj);
    }

    pop(){
        return this.q.shift();
    }

    isEmpty(){
        return this.q.length == 0;
    }

    clear(){
        this.q = [];
    }
}