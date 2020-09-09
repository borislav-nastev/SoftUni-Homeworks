import { getAllTeams } from '../requester.js';
import { showLoading, hideLoading, showNotification } from '../notifications.js';

export default async function catalog() {

    this.partials = {
        header: await this.load('../../templates/common/header.hbs'),
        footer: await this.load('../../templates/common/footer.hbs'),
        team: await this.load('../../templates/catalog/team.hbs')
    };

    try {

        showLoading();
        const teams = await getAllTeams();

        if (teams.hasOwnProperty('errorData')) {
            throw new Error(teams.message);
        }

        teams.forEach(team => {
            this.app.teamOwnersId.add(team.ownerId);
            if (team.members.includes(localStorage.getItem('username'))) {
                localStorage.setItem('userTeamId', team.objectId);
            }
        });

        const hasNoTeam = !this.app.teamOwnersId.has(localStorage.getItem('userId'));
        const isMember = localStorage.getItem('userTeamId') ? true : false;
        
        const context = Object.assign({ teams, hasNoTeam, isMember }, this.app.userData);

        this.partial('../../templates/catalog/teamCatalog.hbs', context);
        hideLoading();

    } catch (err) {
        showNotification('errorEl', err);
        console.error(err);
    }
}