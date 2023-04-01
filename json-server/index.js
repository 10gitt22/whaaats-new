const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const en_errors = require('../public/locales/en/errors.json')
const ua_errors = require('../public/locales/uk-UA/errors.json')

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

function getTranslationFile(language) {
    switch (language) {
        case 'uk-UA':
            return ua_errors
        case 'en':
            return en_errors
        default:
            return en_errors
    } 
}

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

// LOGIN ENDPOINT
server.post('/login', (req, res) => {
    try {
        const { username, password } = req.body;
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const { users = [] } = db;

        const userFromBd = users.find(
            (user) => user.username === username && user.password === password,
        );
        
        if (userFromBd) {
            const {password: userPass, ...userData} = userFromBd
            return res.json(userData);
        }

        return res.status(403).json({ message: 'User not found' });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

// CHECK USER AUTH
server.use((req, res, next) => {
    const language = req.headers['accept-language']
    if (!req.headers.authorization) {
        const message = getTranslationFile(language)['401']
        return res.status(401).json({ message });
    }

    next();
});

server.use(router);

// START SERVER
server.listen(8000, () => {
    console.log('server is running on 8000 port');
});
