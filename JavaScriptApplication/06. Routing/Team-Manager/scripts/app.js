import home from './controllers/home.js';
import about from './controllers/about.js';
import register, { registerPost } from './controllers/register.js';
import login, { loginPost } from './controllers/login.js';
import logout from './controllers/logout.js';
import catalog from './controllers/catalog.js';
import createTeam, { createTeamPost } from './controllers/createTeam.js';
import details from './controllers/details.js';
import edit, { updateTeam } from './controllers/edit.js';
import leaveTeam from './controllers/leaveTeam.js';
import joinToTeam from './controllers/joinToTeam.js';

window.addEventListener('load', function () {

    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        this.userData = {
            username: localStorage.getItem('username') || '',
            loggedIn: localStorage.getItem('username') ? true : false,
        }

        this.teamOwnersId = new Set();

        this.get('index.html', home);
        this.get('/', home);
        this.get('#/home', home);

        this.get('#/about', about);

        this.get('#/register', register);
        this.post('#/register', ctx => { registerPost.call(ctx) });

        this.get('#/login', login);
        this.post('#/login', ctx => { loginPost.call(ctx) });

        this.get('#/logout', logout);

        this.get('#/catalog', catalog);
        this.get('#/catalog/:id', details);

        this.get('#/create', createTeam);
        this.post('#/create', ctx => { createTeamPost.call(ctx) });

        this.get('#/details/:id', details);

        this.get('#/edit/:id', edit);
        this.post('#/edit/:id', ctx => { updateTeam.call(ctx) });

        this.get('#/leave/:id', ctx => { leaveTeam.call(ctx) });
        this.get('#/join/:id', ctx => { joinToTeam.call(ctx) });

    });

    app.run();
});
