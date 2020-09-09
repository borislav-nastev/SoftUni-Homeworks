import { getTeam, editTeam } from '../requester.js';
import { showLoading, hideLoading, showNotification } from '../notifications.js';

export default async function edit() {

    this.partials = {
        header: await this.load('../../templates/common/header.hbs'),
        footer: await this.load('../../templates/common/footer.hbs'),
        editForm: await this.load('../../templates/edit/editForm.hbs')
    }

    try {

        showLoading();

        const team = await getTeam(this.params.id);

        if (team.hasOwnProperty('errorData')) {
            throw new Error(team.message);
        }

        const context = Object.assign({ team }, this.app.userData);
        this.partial('../../templates/edit/editPage.hbs', context);

        hideLoading();

    } catch (err) {
        showNotification('errorEl', err);
        console.error(err);
    }
}

export async function updateTeam() {

    const name = this.params.name;
    const comment = this.params.comment;

    try {

        if (!name) {
            throw new Error('New team name is required!');
        }

        showLoading();
        const response = await editTeam(this.params.id, { name, comment });

        if (response.hasOwnProperty('errorData')) {
            throw new Error(response.message);
        }

        showNotification('infoEl', 'Successfully updated a team!');
        this.redirect('#/catalog');

    } catch (err) {
        showNotification('errorEl', err);
        console.error(err);
    }
}