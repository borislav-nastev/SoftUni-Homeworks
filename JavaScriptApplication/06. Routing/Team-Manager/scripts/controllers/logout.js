import { logoutUser } from '../requester.js';
import { showLoading, hideLoading } from '../notifications.js';

export default async function logout() {

    showLoading();
    await logoutUser();

    localStorage.removeItem('userToken');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    localStorage.removeItem('userTeamId');

    this.app.userData.username = null;
    this.app.userData.loggedIn = false;

    hideLoading();
    this.redirect('#/login');
}