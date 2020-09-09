import { registerUser } from '../requester.js';
import { showLoading, showNotification } from '../notifications.js';

export default async function register() {
    this.partials = {
        header: await this.load('../../templates/common/header.hbs'),
        footer: await this.load('../../templates/common/footer.hbs'),
        registerForm: await this.load('../../templates/register/registerForm.hbs')
    };

    this.partial('../../templates/register/registerPage.hbs');
}

export async function registerPost() {

    const username = this.params.username;
    const password = this.params.password;
    const rePassword = this.params.repeatPassword;

    try {
        if (!username) {
            throw new Error('Username can not be empty!');
        }

        if (!password || !rePassword) {
            throw new Error('Password / RepeatPassword can not be empty!');
        }

        if (password !== rePassword) {
            throw new Error('Password and RepeatPassword do not match!');
        }

        showLoading();
        const response = await registerUser(username, password);

        if (response.hasOwnProperty('errorData')) {
            throw new Error(response.message);
        }

        showNotification('infoEl', 'Successfully registered!');
        this.redirect('#/login');

    } catch (err) {
        showNotification('errorEl', err);
        console.error(err);
    }
}