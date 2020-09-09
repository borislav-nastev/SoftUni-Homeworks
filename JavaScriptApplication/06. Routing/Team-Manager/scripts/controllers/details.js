import { getTeam } from '../requester.js';
import { showLoading, hideLoading, showNotification } from '../notifications.js';

export default async function details() {

    this.partials = {
        header: await this.load('../../templates/common/header.hbs'),
        footer: await this.load('../../templates/common/footer.hbs'),
        teamControls: await this.load('../../templates/catalog/teamControls.hbs'),
        teamMember: await this.load('../../templates/catalog/teamMember.hbs')
    };

    try {

        showLoading();

        const team = await getTeam(this.params.id);

        if (team.hasOwnProperty('errorData')) {
            throw new Error(team.message);
        }

        const isAuthor = localStorage.getItem('userId') === team.ownerId;
        const isOnTeam = localStorage.getItem('userTeamId') ? true : false;
        const isOnCurrentTeam = localStorage.getItem('userTeamId') === team.objectId;

        const context = Object.assign({ team, isAuthor, isOnTeam, isOnCurrentTeam }, this.app.userData);
        this.partial('../../templates/catalog/details.hbs', context);

        hideLoading();

    } catch (err) {
        showNotification('errorEl', err);
        console.error(err);
    }
}