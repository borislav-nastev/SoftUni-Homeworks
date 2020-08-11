function solve() {
    
    const url = `https://judgetests.firebaseio.com/schedule/`;

    const stopInfo = document.querySelector('.info');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    

    let stopId = 'depot';
    let stopName = '';

    function depart() {

        fetch(url + `${stopId}.json`)
            .then(response => response.json())
            .then(data => {
                stopName = data.name;
                stopId = data.next;
                stopInfo.textContent = `Next stop ${stopName}`;
                manageBtn();
            })
            .catch(() => {
                stopInfo.textContent = 'Error';
                departBtn.setAttribute('disabled', true);
                arriveBtn.setAttribute('disabled', true);
            })
    }

    function arrive() {
        stopInfo.textContent = `Arriving at ${stopName}`;
        manageBtn();
    }

    function manageBtn() {

        if (departBtn.disabled) {
            departBtn.removeAttribute('disabled');
            arriveBtn.setAttribute('disabled', true);

        } else {
            departBtn.setAttribute('disabled', true);
            arriveBtn.removeAttribute('disabled');
        }
    }

    return {
        depart,
        arrive
    };
}

let result = solve();