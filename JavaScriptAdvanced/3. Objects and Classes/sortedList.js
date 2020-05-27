class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(el) {
        this.list.push(el);
        this.list.sort((a, b) => a - b);
        return this.size = this.list.length;
    }

    remove(index) {

        if (index < this.list.length && index >= 0) {
            this.list.splice(index, 1);
        }

        return this.size = this.list.length;
    }

    get(index) {
        if (index < this.list.length && index >= 0) {
            return this.list[index];
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

