export default async function about () {

    const context = Object.assign({}, this.app.userData);

    this.partials = {
        header: await this.load('../../templates/common/header.hbs'),
        footer: await this.load('../../templates/common/footer.hbs'),
    };

    this.partial('../../templates/about/about.hbs', context);
}