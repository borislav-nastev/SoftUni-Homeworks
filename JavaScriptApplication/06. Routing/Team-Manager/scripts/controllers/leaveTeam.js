import { getTeam, editTeam } from '../requester.js';
import { showLoading, showNotification } from '../notifications.js';

export default async function leaveTeam() {

    const id = this.params.id;
    const response = await getTeam(id);
    response.members.splice(response.members.indexOf(localStorage.getItem('username')), 1);

    try {

        showLoading();

        const team = await editTeam(id, response);

        if (team.hasOwnProperty('errorData')) {
            throw new Error(team.message);
        }

        localStorage.removeItem('userTeamId');

        showNotification('infoEl', 'Successfully leave a team!');
        this.redirect('#/catalog');

    } catch (err) {
        showNotification('errorEl', err);
        console.error(err);
    }
}