function attachGradientEvents() {
    
    const gradient = document.getElementById('gradient');
    const result = document.getElementById('result');

    gradient.addEventListener('mousemove', function(event) {

        let elementWidth = event.target.clientWidth - 1;
        let currentPosition = event.offsetX;
        let place = Math.trunc((currentPosition / elementWidth) * 100);
        
        result.textContent = `${place}%`;
    });

    gradient.addEventListener('mouseout', function() {
        result.textContent = '';
    });
}