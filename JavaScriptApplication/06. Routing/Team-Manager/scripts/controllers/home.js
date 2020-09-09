export default async function home() {

    const teamId = localStorage.getItem('userTeamId') || '';
    const hasTeam = teamId ? true : false;

    const context = Object.assign({ hasTeam, teamId }, this.app.userData);

    this.partials = {
        header: await this.load('../../templates/common/header.hbs'),
        footer: await this.load('../../templates/common/footer.hbs'),
    };

    this.partial('../../templates/home/home.hbs', context);
}