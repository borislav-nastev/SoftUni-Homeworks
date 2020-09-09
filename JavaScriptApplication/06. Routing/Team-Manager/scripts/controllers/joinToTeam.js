import { getTeam, editTeam } from '../requester.js';
import { showLoading, showNotification } from '../notifications.js';

export default async function joinToTeam() {

    const id = this.params.id;
    const response = await getTeam(id);
    response.members = [...response.members.concat(localStorage.getItem('username'))];

    try {

        showLoading();

        const team = await editTeam(id, response);

        if (team.hasOwnProperty('errorData')) {
            throw new Error(team.message);
        }

        showNotification('infoEl', 'Successfully joined to the team!');
        this.redirect('#/catalog');

    } catch (err) {
        showNotification('errorEl', err);
        console.error(err);
    }
}