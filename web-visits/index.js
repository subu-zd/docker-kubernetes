const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
    host: 'redis-server', 
    // had this been a traditional node app, we would've used
    // https://my-redis-server.com or some other connection URL
    port: 6379 // default port
}); // networking code to connect to the redis server

const port = 4001

client.set('visits', 0);

app.get('/', (req, res) => {
    process.exit(0); // '0' is an exit status code
    // 0 -> we exited and everything is OK
    // 1, 2, 3 etc -> we exited because something went wrong
    client.get('visits', (err, visits) => {
        res.send('Number of visits: ' + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(port, () => {
    console.log('Listening on port ' + port);
});