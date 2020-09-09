import { loginUser } from '../requester.js';
import { showLoading, showNotification } from '../notifications.js';

export default async function login() {
    this.partials = {
        header: await this.partial('../../templates/common/header.hbs'),
        footer: await this.partial('../../templates/common/footer.hbs'),
        loginForm: await this.partial('../../templates/login/loginForm.hbs')
    };

    this.partial('../../templates/login/loginPage.hbs');
}

export async function loginPost() {

    const username = this.params.username;
    const password = this.params.password;

    try {

        showLoading();

        const response = await loginUser(username, password);
    
        if (response.hasOwnProperty('errorData')) {
            throw new Error(response.message);
        }

        localStorage.setItem('userToken', response['user-token']);
        localStorage.setItem('username', response.username);
        localStorage.setItem('userId', response.objectId);

        this.app.userData.username = localStorage.getItem('username');
        this.app.userData.loggedIn = true;

        showNotification('infoEl', 'Successfully logged in!')
        this.redirect('#/catalog');

    } catch (err) {
        showNotification('errorEl', err);
        console.error(err);
    }
}