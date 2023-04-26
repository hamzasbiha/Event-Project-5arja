const app = require('./app');
const db = require('./database');


const port = 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
