import { createTeam as apiCreatTeam } from '../requester.js';
import { showLoading, showNotification } from '../notifications.js';

export default async function createTeam() {

    const context = Object.assign({}, this.app.userData);

    this.partials = {
        header: await this.load('../../templates/common/header.hbs'),
        footer: await this.load('../../templates/common/footer.hbs'),
        createForm: await this.load('../../templates/create/createForm.hbs')
    };

    this.partial('../../templates/create/createPage.hbs', context);
}

export async function createTeamPost() {

    const name = this.params.name;
    const comment = this.params.comment;
    const members = [this.app.userData.username];

    try {
        if (!name) {
            throw new Error('Team name is required!');
        }

        showLoading();
        const response = await apiCreatTeam({ name, comment, members });

        if (response.hasOwnProperty('errorData')) {
            throw new Error(response.message);
        }

        showNotification('infoEl', 'Successfully created a team!');
        this.redirect('#/catalog');

    } catch (err) {
        showNotification('errorEl', err);
        console.error(err);
    }
}