class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    unite(obj) {
        if (obj instanceof Rat) {
            this.unitedRats.push(obj)
        }
    }

    getRats() {
        return this.unitedRats;
    }

    toString() {

        let rats = [];

        if (this.unitedRats.length > 0) {
            this.unitedRats.forEach(rat => rats.push(`##${rat.name}`))
        }

        return `${this.name}\n${rats.join('\n')}`;
    }
}


let firstRat = new Rat("Peter");
console.log(firstRat.toString()); // Peter
console.log(firstRat.getRats()); // []

firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));
console.log(firstRat.getRats());
// [ Rat { name: 'George', unitedRats: [] },
//  Rat { name: 'Alex', unitedRats: [] } ]

console.log(firstRat.toString());
// Peter
// ##George
// ##Alex
