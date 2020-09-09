const elements = {
    loadingEl: document.getElementById('loadingBox'),
    errorEl: document.getElementById('errorBox'),
    infoEl: document.getElementById('infoBox')
}

function showLoading() {
    elements.loadingEl.style.display = 'block';
}

function hideLoading() {
    elements.loadingEl.style.display = 'none';
}

function showNotification(el, message) {

    hideLoading();

    elements[el].textContent = message;

    setTimeout(function () {
        elements[el].style.display = 'block';
    }, 800)

    setTimeout(function () {
        elements[el].style.display = 'none';
    }, 3000);
}

export {
    showNotification,
    showLoading,
    hideLoading
}