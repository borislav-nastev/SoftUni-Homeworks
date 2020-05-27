function tickets(data, criterion) {

    class Ticket {

        constructor(destination, price, status) {

            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let output = [];
    let sortedCriterion = criterion;
    let sortedOutput;

    for (let line of data) {

        let [destination, price, status] = line.split('|');
        let currentTicket = new Ticket(destination, Number(price), status);
        output.push(currentTicket);
    }

    if (sortedCriterion === 'price') {
        sortedOutput = output.sort((a, b) => a[sortedCriterion] - b[sortedCriterion]);

    } else {
        sortedOutput = output.sort((a, b) => a[sortedCriterion].localeCompare(b[sortedCriterion]));
    }

    return sortedOutput;
}

console.log(tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'price'));