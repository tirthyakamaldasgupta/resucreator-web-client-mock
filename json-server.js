const cors = require('cors');
const jsonServer = require('json-server');
const data = require('./mock-database.json');

const router = jsonServer.router(data);
// router.use(cors());

router.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization']
}));

const server = jsonServer.create();
server.use(router);
server.listen(3000, () => {
    console.log('JSON Server is running on port 3000');
});
