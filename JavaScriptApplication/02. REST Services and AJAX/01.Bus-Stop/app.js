function getInfo() {

    // Active stopId 1287, 1308, 1327 and 2334
    const stopNameContainer = document.getElementById('stopName');
    const busesUl = document.getElementById('buses');
    const stopInput = document.getElementById('stopId');

    const stopId = stopInput.value;

    const url = `https://judgetests.firebaseio.com/businfo/${stopId}.json`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            busesUl.innerHTML = '';
            stopNameContainer.textContent = data.name;
            Object.keys(data.buses).forEach(bus => {
                const currentLi = document.createElement('li');
                currentLi.textContent = `Bus ${bus} arrives in ${data.buses[bus]} minutes`;

                busesUl.appendChild(currentLi);
            });

            stopInput.value = '';
        })
        .catch(error => stopNameContainer.textContent = 'Error')
}